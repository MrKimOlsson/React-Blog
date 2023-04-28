import React from 'react'
import PostListItem from '../components/PostListItem'
import { useFetch } from '../hooks/useFetch'

const Home = () => {
    const { data: posts } = useFetch('https://jsonplaceholder.typicode.com/posts')

    return (
      <div className='post'>
        { posts && posts.map(post => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>
    )
}

export default Home