import Cookies from 'js-cookie'

/**
 * 型をチェックする
 * @param x 型チェックしたい値
 */
export function printType(x: any): void {
  console.log(`${typeof x} ${Object.prototype.toString.call(x)}`)
}

/**
 * アクセストークンの存在チェック
 */
export function isCheckAcceseToken(): boolean {
  return Cookies.get('loginToken') ? true : false
}

/**
 * アクセストークンの取得
 * @returns アクセストークン
 */
export function getAcceseToken(): string | null {
  const token = Cookies.get('loginToken')
  return token ? token : null
}
