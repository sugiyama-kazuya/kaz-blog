import fetch from 'node-fetch'
import { BASE_URL, API_KEY } from '../const'
import { Post, Posts, Ids } from '../types/post'
import { ParamsCategories } from '../types/category'

/**
 *全記事を取得する
 * @returns Posts 記事リスト
 */
export async function getAllPosts(): Promise<Posts> {
  const response = await fetch(`${BASE_URL}/news`, {
    headers: {
      'X-MICROCMS-API-KEY': API_KEY,
    },
  })

  const data = await response.json()

  if (!data.contents) {
    return data
  }

  return data.contents.map((content: any) => {
    return {
      id: content.id,
      title: content.title,
      createdAt: content.createdAt,
      category: content.category,
      eyecatch: content.eyecatch ? content.eyecatch : null,
    }
  })
}

/**
 * 全記事のIDリストを取得する
 * @returns Ids 記事IDリスト
 */
export async function getAllPostIds(): Promise<Ids> {
  const url = `${BASE_URL}/news`
  const res = await fetch(url, {
    headers: {
      'X-MICROCMS-API-KEY': API_KEY,
    },
  })

  let result
  try {
    result = await res.json()
    // console.log(result)
  } catch (e) {
    console.error(e)
  }

  return result.contents.map((content: any) => {
    return {
      params: {
        id: content.id,
      },
    }
  })
}

/**
 * 記事を取得する
 * @param id 取得する記事ID
 * @returns Post 記事情報
 */
export async function getPostData(id: string): Promise<Post> {
  const url = `${BASE_URL}/news/${id}`
  const res = await fetch(url, {
    headers: {
      'X-MICROCMS-API-KEY': API_KEY,
    },
  })

  let result
  try {
    result = await res.json()
    console.log(result)
  } catch (e) {
    console.error(e)
  }

  const convertDateString = (date: number): string => {
    const time = new Date(date)
    return `${time.getUTCFullYear()}.${
      time.getMonth() + 1
    }.${time.getDate()} ${time.getHours()}:${time.getMinutes()}`
  }

  return {
    id: result.id,
    title: result.title,
    body: result.body,
    category: result.category.category,
    eyecatch: result.eyecatch.url,
    createdAt: convertDateString(result.createdAt),
    updatedAt: convertDateString(result.updatedAt),
  }
}

/**
 * 指定のカテゴリの記事一覧を取得する
 * @param category
 * @returns Posts 記事リスト
 */
export async function getTargetPosts(categoryId: string): Promise<Posts> {
  const response = await fetch(`${BASE_URL}/news`, {
    headers: {
      'X-MICROCMS-API-KEY': API_KEY,
    },
  })

  const datas = await response.json()

  const targetData = datas.contents.filter((data: any) => {
    return data.category.id === categoryId
  })

  return targetData.map((content: any) => {
    return {
      id: content.id,
      title: content.title,
      createdAt: content.createdAt,
      category: content.category,
      eyecatch: content.eyecatch ? content.eyecatch : null,
    }
  })
}
