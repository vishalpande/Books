import React from 'react'
import BookShow from '../components/BookShow'

export default function BookList({books,onDelete,onEdit}) {
  const renderedBooks=books.map((books)=>{
return <BookShow onEdit={onEdit} onDelete={onDelete} key={books.id}  book={books}/>


  })
  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  )
}
