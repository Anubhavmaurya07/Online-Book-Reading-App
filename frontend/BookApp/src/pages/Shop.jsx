import { useEffect, useState } from "react"
import { Card } from 'flowbite-react';
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/all-books').then(res => res.json()).then(data => setBooks(data))
  }, [])
  return (
    <div className="px-4 lg:px-24 mt-28">
      <h1 className="text-center font-bold text-5xl">All Books are here</h1>
      <div className="my-12 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
      {
        books.map(book => <Link to={`/book/${book._id}`} key={book._id} >
        <Card
          
        >
          <img src={book.imageURL} className="h-96" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {book.bookTitle}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {book.authorName}
          </p>
          <button className="bg-blue-700 font-semibold rounded-md px-4 py-2 text-white hover:bg-black transition-all ease-in duration-200">Buy Now</button>
        </Card>
        </Link>)
      }
      </div>
    </div>
  )
}

export default Shop