/**
 * 型をチェックする
 * @param x 型チェックしたい値
 */
export function printType(x: any): void {
  console.log(`${typeof x} ${Object.prototype.toString.call(x)}`)
}
