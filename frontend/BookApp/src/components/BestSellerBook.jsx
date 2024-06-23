import {  useEffect, useState } from "react"
import BookCard from "./BookCard"

const BestSellerBook = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/all-books')
    .then(res => res.json())
    .then(data => setBooks(data.slice(0,8)))
  }, [])
  return (
    <BookCard books={books} headline="Best Seller Books" />
  )
}

export default BestSellerBook