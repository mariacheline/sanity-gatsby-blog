export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec94a15f5ea88abecd612e8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zcnph3bm',
                  apiId: '65dccc7a-3d1d-4ca6-8746-522623653a32'
                },
                {
                  buildHookId: '5ec94a15d2193eb8f88e02b7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-j9gwyrnp',
                  apiId: 'aefcbdc6-937c-4f54-82c3-c36951aec257'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mariacheline/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-j9gwyrnp.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
