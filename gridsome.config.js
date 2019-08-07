module.exports = {
  siteName: 'the meme depot',
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
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-145254989-1'
      }
    }
  ]
}