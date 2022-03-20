const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  
  const query = graphql(`
    {allWpProject {
      nodes {
        slug
      }
    }}
  `).then(result => {
    result.data.allWpProject.nodes.forEach(node => {
      createPage({
        path: `portfolio/${node.slug}`,
        component: path.resolve(`./src/templates/project.js`),
        context: {
          // This is the $slug variable passed to component
          slug: node.slug,
        },
      })
    })
  })

  return query;
}