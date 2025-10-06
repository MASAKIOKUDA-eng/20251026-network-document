module.exports = {
  title: 'モブエンジニアの書庫',
  author: 'モブエンジニア',
  language: 'ja',
  size: 'A5',
  theme: [
    'vivliostyle-theme-macneko-techbook@0.4.0',
    '@mitsuharu/vivliostyle-theme-noto-sans-jp@0.1.4',
    'theme/theme-custom',
  ],
  cover: 'cover/front.png', // 表表紙
  entry: [
    'index.md',
    'preface.md',
    'docs/section1.md',
    'docs/section2.md',
    'docs/section3.md',
    'docs/section4.md',
    'docs/section5.md',
    'authors.md',
    'colophon.md',
    'cover/back.md', // 裏表紙（Markdownでラップ）
  ],
  entryContext: './manuscripts',
  output: ['output/ebook.pdf'],
  workspaceDir: '.vivliostyle',
  toc: false,
}