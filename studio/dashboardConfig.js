export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '602a9995ea2bd23191bf431d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-t9ok23sa',
                  apiId: '14a6e0d9-4c64-4dc9-8ae0-370b4a3d8970'
                },
                {
                  buildHookId: '602a99958f30cb3a31ecab96',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-w1qu3466',
                  apiId: '59467962-fe0d-4388-9c95-e94477ede406'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/koobistudio/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-w1qu3466.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
