const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const query = await graphql(`{
    allWpProject {
      nodes {
        slug
        portfolioPdf
      }
    }
    allWpProjectTag {
      nodes {
        slug
        id
      }
    }
    allWpProjectCategory {
      nodes {
        slug
        id
      }
    }
    allWpPage {
      nodes {
        slug
        id
      }
    }
  }`).then(result => {
    // projects
    result.data.allWpProject.nodes.forEach(node => {
      createPage({
        path: `portfolio/${node.slug}`,
        component: path.resolve(`./src/templates/project.js`),
        context: {
          id: node.id,
          slug: node.slug,
          pdfId: parseInt(node.portfolioPdf) || 0
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
          id: node.id
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
          id: node.id
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
          id: page.id
        },
      })
    })
  })

  return query;
}