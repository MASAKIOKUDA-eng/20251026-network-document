module.exports = {
  title: 'モブエンジニアの書庫 ',
  author: 'モブエンジニア',
  language: 'ja',
  size: 'A5',
  theme: [
    'vivliostyle-theme-macneko-techbook@0.4.0',
    '@mitsuharu/vivliostyle-theme-noto-sans-jp@0.1.4',
    'theme/theme-custom',
  ],
  entry: [
    // 目次
    'index.md',
    // はじめに
    'preface.md',
    // 各章の原稿
    'docs/section1.md', //設計時のチームスキルに応じてサービスを選ぶ
    'docs/section2.md', //陳腐化しない構成図を書いてみる
    'docs/section3.md', //VPCで利用するアドレス範囲は慎重に
    'docs/section4.md', //リソース名は誰もが分かる名称を付ける
    'docs/section5.md', //セキュリティグループの設定は柔軟性を持たせる
    // おわりに
    'epilogue.md',
    // 付録
    'appendix.md',
    // 著者紹介
    'authors.md',
    // 奥付
    'colophon.md',
  ],
  entryContext: './manuscripts',
  output: ['output/ebook.pdf'],
  workspaceDir: '.vivliostyle',
  toc: false,
  cover: [
    { front: 'cover/front.png' },
    { back: 'cover/back.png' }
  ],
}
