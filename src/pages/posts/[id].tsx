import { VFC } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import { ParsedUrlQuery } from 'node:querystring'
import { getAllPostIds, getPostData } from '../../../lib/post'
import postDetail from "styles/postDetail.module.scss";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LoopIcon from '@mui/icons-material/Loop';

interface Params extends ParsedUrlQuery {
  id: string,
}

type Props = {
  postData: {
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
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}


const Post: VFC<Props> = (props) => {
  const {
    body,
    category,
    createdAt,
    updatedAt
  } = props.postData;

  return (
    <>
      <div className={postDetail.frame}>
        <div className={postDetail.header}>
          <div className={postDetail.category}>
              <span>{category}</span>
          </div>
          <div className={postDetail.dateListWrapper}>
            <ul className={postDetail.dateList}>
              <li>
                {createdAt && (
                  <div className={postDetail.dateIconWrapper}>
                    <AccessTimeIcon fontSize="small"/>
                  </div>
                )}
                {createdAt ? createdAt : ""}
              </li>
              <li>
                {updatedAt && (
                  <div className={postDetail.dateIconWrapper}>
                    <LoopIcon fontSize="small"/>
                  </div>
                )}
                {updatedAt ? updatedAt : ""}
              </li>
            </ul>
          </div>
          <h1 className={postDetail.title}>{props.postData.title}</h1>
          <figure className={postDetail.eyecatch}>
            <Image
              src={props.postData.eyecatch}
              alt="アイキャッチ画像"
              layout={"fill"}
              objectFit={'cover'}
            />
          </figure>
        </div>
        <div
          className={postDetail.contents}
          dangerouslySetInnerHTML={{ __html: body ? body[0].content : null }}
        ></div>
      </div>
    </>
  )
}

export default Post
