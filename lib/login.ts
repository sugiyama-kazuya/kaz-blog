import { BLOG_API_LOGIN } from '../const'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
/**
 * ログイン処理
 * @param email
 * @param password
 */
export async function loginAsync(
  email: string,
  password: string,
): Promise<any | void> {
  const router = useRouter()
  const request = {
    email: email,
    password: password,
  }

  await fetch(BLOG_API_LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  })
    .then((response) => response.json())
    .then((data) => {
      Cookies.set('loginToken', data.access_token)
      router.push('/memo')
    })
    .catch((error) => {
      return error
    })
}
