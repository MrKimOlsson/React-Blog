import React from 'react'
import { useEffect, useState } from 'react'
// import { Navigate } from 'react-router-dom'
import PostListItem from '../components/PostListItem'
import axios from 'axios'
// import { useFetch } from '../hooks/useFetch'



const Home = () => {
    // const { data: posts } = useFetch('https://jsonplaceholder.typicode.com/posts')
    // console.log(posts)

    // const [post, setPost] = useState(null)
    // const { id } = useParams();

    // useEffect(() => {
    //   const getPost = async () => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    //     const data = await res.json()
    //     setPost(data)
    //   }
    //   getPost()
    // }, [])

    const [posts, setPosts] = useState([])
    // const { id } = useParams()

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
      if(res.data) {
        setPosts(res.data)
      }
    }
    getPosts()
  }, [])

    return (
      <div className='post'>
        { posts && posts.map(post => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>
    )
}

export default Home