import { BASE_URL, API_KEY } from '../const'
import { ParamsCategories } from '../types/category'
import { Categories } from '../types/category'

/**
 * カテゴリータイプを取得する
 */
export async function getAllCategories(): Promise<Categories> {
  const response = await fetch(`${BASE_URL}/category`, {
    headers: {
      'X-MICROCMS-API-KEY': API_KEY,
    },
  })

  const categories = await response.json()
  return categories.contents.map((content: any) => {
    return {
      id: content.id === undefined ? null : content.id,
      name: content.category === undefined ? null : content.category,
    }
  })
}

/**
 *
 * @returns
 */
export async function getAllPostCategories(): Promise<ParamsCategories> {
  const response = await fetch(`${BASE_URL}/category`, {
    headers: {
      'X-MICROCMS-API-KEY': API_KEY,
    },
  })

  const data = await response.json()

  return data.contents.map((content: any) => {
    return {
      params: {
        id: content.id,
      },
    }
  })
}
