import React from 'react'
import { useState } from 'react'

export default function BookEdit({book,onSubmit}) {
    const[title,setTitle]=useState( book.title )
const handleChange=(event) => {

setTitle(event.target.value)

}
const handleSubmit=(event) => {
    event.preventDefault();
    // console.log('new titile is ' , title) file
    
    onSubmit(book.id,title);
}

  return (
<form action="" className="book-edit" onSubmit={handleSubmit}>
    <label htmlFor="" >Title</label>
    <input type="text" className="input" value={title} onChange={handleChange} />
<button className="btn btn-primary">Save</button>


</form>
  )
}
