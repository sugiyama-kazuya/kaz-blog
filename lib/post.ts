import fetch from 'node-fetch'
import { BASE_URL, API_KEY } from '../const'

/**
 *
 */
type category = {
  category: string
}

/**
 *
 */
type eyecatch = {
  url: string
  height: number
  width: number
}

/**
 *
 */
type data = {
  id: string
  title: string
  createdAt: string
  category: category
  eyecatch: eyecatch | null
}

/**
 *
 */
type ids = {
  params: {
    id: string
  }
}[]

/**
 *
 */
type post = {
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

/**
 *
 * @returns
 */
export async function getAllPosts(): Promise<data> {
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

export async function getAllPostIds(): Promise<ids> {
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
 *
 * @param id
 * @returns
 */
export async function getPostData(id: string): Promise<post> {
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
