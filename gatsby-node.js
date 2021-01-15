const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {

        const clientCase = path.resolve('./src/templates/client-case.js')
        resolve(
            graphql(
                `
                  {
                    allMarkdownRemark(
                        filter: { frontmatter: { type: { eq: "client" } } },
                        sort: { fields: [frontmatter___date], order: DESC }
                    ) {
                      edges {
                        node {
                          fields {
                            slug
                          }
                          frontmatter {
                            title
                            permalink
                            type
                          }
                        }
                      }
                    }
                  }
        `
            ).then(result => {
                if (result.errors) {
                    console.log(result.errors)
                    reject(result.errors)
                }

                // Create case pages.
                const clients = result.data.allMarkdownRemark.edges;

                _.each(clients, (client, index) => {
                    const previous = index === client.length - 1 ? null : clients[index + 1].node;
                    const next = index === 0 ? null : clients[index - 1].node;

                    createPage({
                        path: clientCase.node.frontmatter.permalink,
                        component: clientCase,
                        context: {
                            slug: client.node.fields.slug,
                            previous,
                            next,
                        },
                    })
                })
            })
        )

        const blogPost = path.resolve('./src/templates/blog-post.js')
        resolve(
            graphql(
                `
                  {
                    allMarkdownRemark(
                        filter: { frontmatter: { type: { eq: "post" } } },
                        sort: { fields: [frontmatter___date], order: DESC }
                    ) {
                      edges {
                        node {
                          fields {
                            slug
                          }
                          frontmatter {
                            title
                            permalink
                            type
                          }
                        }
                      }
                    }
                  }
        `
            ).then(result => {
                if (result.errors) {
                    console.log(result.errors)
                    reject(result.errors)
                }

                // Create blog posts pages.
                const posts = result.data.allMarkdownRemark.edges;

                _.each(posts, (post, index) => {
                    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
                    const next = index === 0 ? null : posts[index - 1].node;

                    createPage({
                        path: post.node.frontmatter.permalink,
                        component: blogPost,
                        context: {
                            slug: post.node.fields.slug,
                            previous,
                            next,
                        },
                    })
                })
            })
        )

        const jobPost = path.resolve('./src/templates/job-post.js')
        resolve(
            graphql(
                `
                  {
                    allMarkdownRemark(
                        filter: { frontmatter: { type: { eq: "job" } } },
                        sort: { fields: [frontmatter___date], order: DESC }
                    ) {
                      edges {
                        node {
                          fields {
                            slug
                          }
                          frontmatter {
                            title
                            permalink
                            type
                          }
                        }
                      }
                    }
                  }
        `
            ).then(result => {
                if (result.errors) {
                    console.log(result.errors)
                    reject(result.errors)
                }

                // Create blog posts pages.
                const posts = result.data.allMarkdownRemark.edges;

                _.each(posts, (post) => {
                    createPage({
                        path: post.node.frontmatter.permalink,
                        component: jobPost,
                        context: {
                            slug: post.node.fields.slug,
                        },
                    })
                })
            })
        )
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
