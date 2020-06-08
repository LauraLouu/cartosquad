module.exports = {
    title: 'CARTOSQUAD',
    description: 'resources and information about cartography bundled in one documentation',
    markdown: {
        lineNumbers: true
    },
    head: [
        ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/img/favicons/apple-touch-icon.png" }],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/img/favicons/favicon-32x32.png" }],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/img/favicons/favicon-16x16.png" }],
        ['link', { rel: "mask-icon", color: "#432e36", href: "/assets/img/favicons/safari-pinned-tab.svg" }],

    ],
    plugins: {
        '@vuepress/medium-zoom': {
            selector: '.theme-default-content :not(a) > img'
        },
        '@vuepress/back-to-top': true
    },
    themeConfig: {
        logo: '/assets/img/logo.png',
        lastUpdated: 'Last Updated',
        nav: [{
                text: 'Introduction',
                link: '/intro'
            }, {
                text: 'What\'s new',
                link: '/news'
            },
            {
                text: 'About',
                link: '/about'
            }
        ],
        sidebar: [{
                title: 'Cartography Guides',
                collapsable: true,
                children: [
                     '/Guide/color',
                    ['/Guide/typeface', 'Font on maps'],
                    '/Guide/visvar',
                    '/Guide/classification',
                    {
                        title: 'Map Symbolizations',
                        path: '/Guide/symbols',
                        collapsable: true,
                        children: [
                            '/Guide/points',
                            '/Guide/lines',
                            '/Guide/areas'//,
                          //  '/Guide/terrain',
                          //  '/Guide/3d',
                          //  '/Guide/temporalAnimation'
                        ]
                    },
                   // '/Guide/vishier', ['/Guide/basemap', 'Basemap Design'],
                    '/Guide/projections',
                   // '/Guide/gen', ['/Guide/examples', 'Good & Bad Map Examples'],
                   // '/Guide/ownTuts',
                   // '/Guide/courses'
                ]
            }, {
                title: 'Tools & Software',
                collapsable: true,
                children: [
                    ['/Tools/software', 'Desktop software'],
                    ['/Tools/webdev', 'Web development'],
                    ['/Tools/online', 'Useful online tools to help in small tasks']
                ]
            },
            /*['https://lauralouu.github.io/OpenDataPortal/', 'Open Data Map (in progress)'],

            {
                title: 'Open Data Providers',
                collapsable: true,
                children: [
          '/Data/',
            ['/Data/base', 'Base Data (SHP, GeoJSON)'],
            ['/Data/raster', 'Raster Data (Imagery, DEMs)'],
            ['/Data/official', 'Official Data by Governmental Institutions'],
            ['/Data/research', 'Data provided by research institutions'],
            ['/Data/volunteer', 'Crowd-sourced, volunteered Open Data']
        ]
      },*/
            {
                title: 'Map Gallery',
                collapsable: true,
                children: [
                    ['/Gallery/interactive/', 'Interactive Web Maps'],
                    ['/Gallery/static/', 'Static Maps'],
                    ['/Gallery/design/', 'Artistic Maps']
                ]
            },
            ['/media', 'Cartography Media'],
            ['/societies', 'Societies & Communities']//,
         //   '/conferences'
        ]
    }
}