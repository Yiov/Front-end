import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "FRONT-END",
  description: "WEB前端开发入门",

  head: [
    ['link',{ rel: 'icon', href: '/logo.png'}],
  ],

  base: '/', 

  markdown: {
    lineNumbers: true, 
  },

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '首页', link: '/' },
      {
        //分组标题1
        text: '介绍',
        items: [
          { text: '前言', link: '/profile/' },
        ],
      },
      {
        //分组标题2
        text: 'HTML 4',
        items: [
          { text: '简介', link: '/html4/intro/' },
          { text: 'HTML入门', link: '/html4/getting-started/' },
          { text: '代码编辑器', link: '/html4/vscode/' },
          { text: 'HTML基础', link: '/html4/base/' },
          { text: '标签参考', link: '/html4/reference/' },
        ],
      },
      {
        //分组标题3
        text: 'CSS 2',
        items: [
          { text: '简介', link: '/css2/' },
        ],
      },
      {
        //分组标题4
        text: 'HTML 5',
        items: [
          { text: '简介', link: '/html5/' },
        ],
      },
      {
        //分组标题5
        text: 'CSS 3',
        items: [
          { text: '简介', link: '/css3/' },
        ],
      },


    ],

    sidebar: [
      {
        //分组标题1
        text: '介绍',
        collapsed: false,
        items: [
          { text: '前言', link: '/profile/' },
        ],
      },
      {
        //分组标题2
        text: 'HTML 4',
        collapsed: false,
        items: [
          { text: '简介', link: '/html4/intro/' },
          { text: 'HTML入门', link: '/html4/getting-started/' },
          { text: '代码编辑器', link: '/html4/vscode/' },
          { text: 'HTML基础', link: '/html4/base/' },
          { text: '标签参考', link: '/html4/reference/' },
        ],
      },
      {
        //分组标题3
        text: 'CSS 2',
        collapsed: false,
        items: [
          { text: '简介', link: '/css2/' },
        ],
      },
      {
        //分组标题4
        text: 'HTML 5',
        collapsed: false,
        items: [
          { text: '简介', link: '/html5/' },
        ],
      },
      {
        //分组标题5
        text: 'CSS 3',
        collapsed: false,
        items: [
          { text: '简介', link: '/css3/' },
        ],
      },

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yiov/' },
      { icon: 'twitter', link: 'https://twitter.com/' }, 
      { icon: 'discord', link: 'https://chat.vitejs.dev/' }, 
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },

    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel:'返回顶部',


    //大纲显示2-3级标题
    outline:[2,3],
    //大纲顶部标题
    outlineTitle:'大纲',

    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 


  }
})
