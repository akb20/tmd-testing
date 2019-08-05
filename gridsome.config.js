module.exports = {
  siteName: 'thememedepot.com',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'memes/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            route: '/tag/:slug',
            create: true,
          },
        },
        remark: {}
      }
    }
  ]
}