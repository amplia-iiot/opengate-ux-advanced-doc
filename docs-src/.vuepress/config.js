module.exports = {
    title: 'Opengate UX Quick Reference',
    description: 'Here you can learn to develop and deploy your own wiwi (wizard/widget) for the Opengate platform',
    dest:'docs',
    base:'/opengate-ux-advanced-doc/',
    plugins: [
        ['flexsearch'],
        ['@vuepress/active-header-links'],
        ['@vuepress/back-to-top'],
        ['vuepress-plugin-export']
    ],
    locales: {
      '/': {
        lang: 'Español', 
        title: 'Características avanzadas UX',
        description: 'Primeros pasos'
      },
      '/en/': {
        lang: 'English',
        title: 'UX Advanced features',
        description: 'Quick Start'
      }
    },
    themeConfig: {
      editLinks: false,
      logo: '/logo/opengate.png',
      displayAllHeaders: true,
      sidebarDepth: 2,
      locales: {
        '/': {
          selectText: 'Idiomas',
          nav: [
            {
              text: 'Inicio',
              link: '/'
            },
            {
              text: 'WiWi Kit de desarrollo (WWDK)',
              link: '/wiwis/'
            },
            {
              text: 'Vistas personalizadas',
              link: '/views/'
            },
            {
              text: 'OGAPI',
              link: '/ogapi/'
            },
           /* {
              text: 'WAPI - REST',
              link: '/wapi/'
            },
            {
              text: 'OGAPI Doc. Completa',
              link: 'https://amplia-iiot.github.io/opengate-js/'
            },
            {
              text: 'OpenGate REST API',
              link: 'https://www.amplia-iiot.com/documentation/latest/'
            }*/
          ],
          sidebar: {
            '/wiwis/': [
              '',
              'development',
              'deployment'
            ]
          }
        },
        '/en/': {
          selectText: 'Languages',
          nav: [
            {
              text: 'Home',
              link: '/en/'
            },
            {
              text: 'WiWi Development Kit (WWDK)',
              link: '/en/wiwis/'
            },
            {
              text: 'Custom Views',
              link: '/en/views/'
            },
            {
              text: 'OGAPI',
              link: '/en/ogapi/'
            },
            /*{
              text: 'WAPI - REST',
              link: '/en/wapi/'
            },
            {
              text: 'Full OGAPI Doc.',
              link: 'https://amplia-iiot.github.io/opengate-js/'
            },
            {
              text: 'OpenGate REST API',
              link: 'https://www.amplia-iiot.com/documentation/latest/'
            }*/
          ],
          sidebar: {
            '/en/wiwis/': [
              '',
              'development',
              'deployment'
            ]
          }
        }
      }
    }
}