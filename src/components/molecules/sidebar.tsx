import { VFC } from 'react'
import sidebar from 'styles/sidebar.module.scss';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Link from 'next/link'
import Image from 'next/image'
import { Categories } from "../../../types/category"

interface Props {
  categories: Categories,
  inputSeach: (param: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * サイドバー
 * @param Props
 * @returns VFC<Props>
 */
const Sidebar: VFC<Props> = ({categories, inputSeach}) => {
  console.log("Sidebar: Start");

  console.log(categories)

  return (
    <>
      <div className={sidebar.sidebar}>
        <div className={sidebar.cards}>
          <Card className={sidebar.card}>
            <CardContent className={sidebar.cardInner}>
              <h3 className={sidebar.category}>Search</h3>
              <div className={sidebar.searchWrapper}>
                <TextField id="outlined-basic" label="記事検索" variant="outlined" className={sidebar.searchInput}
                onChange={inputSeach}
                />
              </div>
            </CardContent>
          </Card>

          <Card className={sidebar.card}>
            <CardContent className={sidebar.cardInner}>
              <h3 className={sidebar.category}>プロフィール</h3>
              <div className={sidebar.profile}>
                <figure className={sidebar.profileImgWrapper}>
                  <Image
                    className={sidebar.profileImg}
                    src={"/images/coffee-1281880_1280.jpg"}
                    alt="プロフィール画像"
                    width={100}
                    height={100}
                    />
                </figure>
                <p>大阪でエンジニアをしています。C#でweb開発をしております。</p>
                <Link href="/profile">
                  <a>
                    <Button className={sidebar.profileBtn} variant="outlined">詳細</Button>
                  </a>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className={sidebar.card}>
            <CardContent className={sidebar.cardInner}>
              <h3 className={sidebar.category}>カテゴリー</h3>
              <ul className={sidebar.cardList}>
                {
                  categories.map((category: any) => (
                    <Link key={category.id} href={`/category/${category.id}`}>
                      <a className={sidebar.cardRecord}>
                        <li>{category.name}</li>
                      </a>
                    </Link>
                  )
                )}
              </ul>
            </CardContent>
          </Card>
          {/* <Card className={sidebar.card}>
            <CardContent className={sidebar.cardInner}>
              <h3 className={sidebar.category}>Archive</h3>
              <ul className={sidebar.cardList}>
                <li className={sidebar.cardRecord}>2021/10</li>
                <li className={sidebar.cardRecord}>2021/11</li>
                <li className={sidebar.cardRecord}>2021/12</li>
              </ul>
            </CardContent>
          </Card> */}
        </div>
    </div>
    </>
  )
}

export default Sidebar;
