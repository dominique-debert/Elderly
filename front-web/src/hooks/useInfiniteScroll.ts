import { useEffect, useRef, useCallback } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'

export function useInfiniteScroll<T>(
  queryKey: string[],
  fetchFn: (page: number) => Promise<{ data: T[]; hasMore: boolean } & Record<string, any>>,
  options = {}
) {
  const observerRef = useRef<IntersectionObserver>()
  const lastElementRef = useRef<HTMLElement>()

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) => fetchFn(pageParam as number),
    getNextPageParam: (lastPage: { hasMore: boolean }, allPages) =>
      lastPage.hasMore ? allPages.length + 1 : undefined,
    initialPageParam: 1,
    ...options,
  })

  const lastElementCallback = useCallback(
    (element: HTMLElement | null) => {
      if (isFetchingNextPage) return

      if (observerRef.current) {
        observerRef.current.disconnect()
      }

      observerRef.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage()
        }
      })

      if (element) {
        observerRef.current.observe(element)
        lastElementRef.current = element
      }
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage]
  )

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return {
    data: data?.pages.flatMap(page => (page as unknown as { data: T[] }).data) ?? [],
    isLoading,
    isError,
    isFetchingNextPage,
    lastElementCallback,
  }
}
