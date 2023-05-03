import React from 'react'
import { useState } from 'react'

const CreatePost = ({ addItem }) => {

  const [formData, setFormData] = useState({
    title: '',
  })

  const handleChange = e => {
    setFormData(formData => {
      return {
        ...formData,
        [e.target.title]: e.target.value
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)

    const newPost = {
      title: formData.title,

    }
    console.log(formData)
    addItem(newPost)
    setFormData({
      title: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className='CreatePost'>
      <div className="form-group">
        <input type="text" name="post" value={formData.title} onChange={handleChange} />
      </div>
      <button>ADD</button>
    </form>
  )
}

export default CreatePost