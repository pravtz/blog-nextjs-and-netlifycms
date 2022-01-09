import { categoryPosts } from '../../services/apiMarkdown'
import { Wrapper, Banner, Content } from './styled'

import { useState, useEffect, useCallback } from 'react'
import CardAsidePost from '../CardAsidePost'
import { ListPostPromisse } from '../../types/type'

type categoriaTypeProps = {
  categoryType: string
  TypeTitle: string
}

const AsidePost = ({ categoryType, TypeTitle }: categoriaTypeProps) => {
  const [listAsid, setlistAsid] = useState<ListPostPromisse[]>([])
  const list = useCallback(async () => {
    setlistAsid(await categoryPosts(categoryType))
  }, [])

  useEffect(() => {
    const foo = async () => {
      await list()
    }

    foo()
  }, [])

  console.log(TypeTitle)

  return (
    <Wrapper>
      <Banner></Banner>
      <Content>
        <h2>Veja também:</h2>
        {listAsid.map((post, indice) => {
          if (post.title != TypeTitle) {
            return (
              <div key={indice} className="posts-aside">
                <CardAsidePost
                  title={post.title}
                  date={post.date}
                  thumbnail={post.thumbnail}
                  slug={`/blog/${post.slug}`}
                />
              </div>
            )
          }
        })}
      </Content>
    </Wrapper>
  )
}

export default AsidePost
