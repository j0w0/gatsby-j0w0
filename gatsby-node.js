const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const query = await graphql(`
    {allWpPage {
      nodes {
        slug
      }
    }
    allWpProject {
      nodes {
        slug
      }
    }
    allWpProjectTag {
      nodes {
        slug
      }
    }
    allWpProjectCategory {
      nodes {
        slug
      }
    }}
  `).then(result => {
    // projects
    result.data.allWpProject.nodes.forEach(node => {
      createPage({
        path: `portfolio/${node.slug}`,
        component: path.resolve(`./src/templates/project.js`),
        context: {
          slug: node.slug,
        },
      })
    })
    // project categories
    result.data.allWpProjectCategory.nodes.forEach(node => {
      createPage({
        path: `portfolio/category/${node.slug}`,
        component: path.resolve(`./src/templates/project-category.js`),
        context: {
          slug: node.slug,
        },
      })
    })
    // project tags
    result.data.allWpProjectTag.nodes.forEach(node => {
      createPage({
        path: `portfolio/tag/${node.slug}`,
        component: path.resolve(`./src/templates/project-tag.js`),
        context: {
          slug: node.slug,
        },
      })
    })
    // pages
    result.data.allWpPage.nodes.forEach(page => {
      createPage({
        path: `${page.slug}`,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          slug: page.slug,
        },
      })
    })
  })

  return query;
}