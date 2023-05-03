import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'


// const DetailedPost = () => {
  
//   const [post, setPost] = useState(null)
//   const { id } = useParams();

//   // const { data: post } = useFetch('https://jsonplaceholder.typicode.com/posts/' + id)

//   console.log(post)
//   return (
//           <div>
//             { post && (
//               <div className="post-details">
//                 <h2>{post.title}</h2>
//                 <div className="d-flex">
//                   <div className="post-desc">
//                     <p>Description: {post.body}</p>
//                     <p>Id: {post.id}</p>
//                     <p>User id: {post.userId}</p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )
// }

const DetailedPost = () => {
  // import { useFetch } from '../hooks/useFetch';

    const [post, setPost] = useState(null)
    const { id } = useParams();

  
    useEffect(() => {
      const getPost = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        const data = await res.json()
        setPost(data)
      }
      getPost()
    }, [])
  
  
    return (
      <div>
        { post && (
          <div className="post-details">
            <h2>{post.title}</h2>
            <div className="d-flex">
              <div className="post-desc">
                <p>Description: {post.body}</p>
                <p>Id: {post.id}</p>
                <p>User id: {post.userId}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
  


export default DetailedPost