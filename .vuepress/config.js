module.exports = {
  
  locales: {
      '/': {
       lang: 'zh-CN'
      }
     },
     
     
    
     
  title: "Chaynfa",
  description: '好好学习，天天向上',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    noFoundPageByTencent: false,
    
      
        
      
     
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '历史记录', link: '/timeline/', icon: 'reco-date' },
      { text: '类别', 
        icon: 'reco-message',
        items: [
          { text: '展开', link: '/docs/theme-reco/' }
        ]
      },
      { text: '关于', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/Chaynfa', icon: 'reco-github' }
        ]
      }
    ],
    sidebar: {
      '/docs/theme-reco/': [
        '',
        'theme',
        'plugin',
        'api'
      ]
    },  
    type: 'blog',
    
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' ,// 默认 “标签”，
        
      }
    },
    //友情链接
    friendLink: [
      
      {
        title: 'Chaynfa',
        desc: '好好学习',
        avatar: "/avatar.png",
        link: 'https://github.com/Chaynfa'
      },
    ],
    logo: '/logo.png',
    
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'Chaynfa',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2022'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}  
