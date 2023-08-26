/**
 * MicroCMS APIのベースURL
 */
export const BASE_URL: string = process.env.BASE_URL

/**
 * MicroCMS APIのキー
 */
export const API_KEY: string = process.env.X_API_KEY

/**
 * kaz-blog-apiのベースURL
 */
export const BLOG_API_URL: string = process.env.BLOG_API_BASE_URL

/**
 * ログインAPI
 */
export const BLOG_API_LOGIN: string = BLOG_API_URL + process.env.BLOG_API_LOGIN

/**
 * メモ取得API
 */
export const BLOG_API_GET_MEMO: string =
  BLOG_API_URL + process.env.BLOG_API_GET_MEMO

/**
 * Authorization
 */
export const AUTHORIZATION = 'Authorization'
