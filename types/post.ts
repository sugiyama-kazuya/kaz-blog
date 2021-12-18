/**
 * カテゴリー
 */
export type Category = {
  category: string
}

/**
 * アイキャッチ画像
 */
export type Eyecatch = {
  url: string
  height: number
  width: number
}

/**
 * 記事リスト
 */
export type Posts = {
  id: string
  title: string
  createdAt: string
  category: Category
  eyecatch: Eyecatch | null
}[]

/**
 * 記事のIDリスト
 */
export type Ids = {
  params: {
    id: string
  }
}[]

/**
 * 記事情報
 */
export type Post = {
  id: string
  title: string
  body: [
    {
      fieldId: string
      content: string
    },
  ]
  category: string
  eyecatch: string
  createdAt: string
  updatedAt: string
}
