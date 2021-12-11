import fetch from 'node-fetch'
import { BASE_URL, API_KEY } from '../const'

/**
 * 取得するカテゴリータイプ
 */
interface categories {
  category: string[]
}

/**
 * カテゴリータイプを取得する
 */
export async function getAllCategories(): Promise<categories> {
  const response = await fetch(`${BASE_URL}/category`, {
    headers: {
      'X-MICROCMS-API-KEY': API_KEY,
    },
  })

  const categories = await response.json()

  return categories.contents.map((content: any) => {
    return content.category
  })
}
