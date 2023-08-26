import { isCheckAcceseToken, getAcceseToken } from '../Helper/common'
import { BLOG_API_GET_MEMO } from '../const'
import { useRouter } from 'next/router'

/**
 * メモ一覧を取得する
 * @returns メモ情報
 */
export const fetchMemos = async (): Promise<any> => {
  const router = useRouter()
  const token: string = getAcceseToken()
  if (!token) {
    return router.push('/login')
  }

  await fetch(BLOG_API_GET_MEMO, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      AUTHORIZATION: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}
