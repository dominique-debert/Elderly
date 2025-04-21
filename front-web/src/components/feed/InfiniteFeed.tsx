import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import { Card } from '../ui/Card'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'

interface Post {
  id: string
  title: string
  content: string
}

export function InfiniteFeed() {
  const { data, isLoading, lastElementCallback } = useInfiniteScroll<Post>(
    ['posts'],
    async (page: any) => {
      const response = await fetch(`/api/posts?page=${page}`)
      const data = await response.json()
      return {
        data: data.posts,
        hasMore: data.hasMore,
      }
    }
  )

  if (isLoading) {
    return <Card isLoading className="w-full" />
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {data.map((post: { id: Key | null | undefined; title: string | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }, index: number) => (
        <Card
          key={post.id}
          ref={index === data.length - 1 ? lastElementCallback : undefined}
          title={post.title}
          className="w-full"
        >
          <p>{post.content}</p>
        </Card>
      ))}
    </div>
  )
}
