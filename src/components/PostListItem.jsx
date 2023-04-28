import React from 'react'
import { Link } from 'react-router-dom'

const PostListItem = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className='post-item'>
      <h3>{post.title}</h3>
    </Link>
  )
}

export default PostListItem