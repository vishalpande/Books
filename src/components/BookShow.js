import React from 'react'
import { useState } from 'react';
import BookEdit from '../components/BookEdit';

export default function BookShow({book,onDelete,onEdit}) {
  const [showEdit,setShowEdit]=useState(false)
  const handleDeleteClick=()=>{
onDelete(book.id)

  }
  const handleEditClick=()=>{
    setShowEdit(!showEdit)

  }
  const handleSubmit=()=>{
setShowEdit(false)


  }
let content=<h3>{book.title}</h3>
if(showEdit){
  content=<BookEdit onSubmit={handleSubmit} onEdit={onEdit} book={book}/>
}

  
  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className='edit' onClick={handleEditClick}>Edit</button>
        <button className='delete' onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  )
}
