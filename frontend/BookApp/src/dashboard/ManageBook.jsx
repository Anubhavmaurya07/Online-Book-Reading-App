import { Table } from 'flowbite-react';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
const ManageBook = () => {
  const [books, setBooks] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3001/all-books').then(res => res.json()).then(data => setBooks(data));
  }, [books])

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/book/${id}`, {
      method: 'DELETE'
    }).then(res => res.json()).then(data => alert('Book deleted successfully!!'))
  }
  return (
    <div className="px-4 my-12">
      <h2 className="text-3xl font-bold mb-8">Manage your Book</h2>
      <Table striped className='lg:w-[1080px]'>
        
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="">Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          books.map((book,index) =>  {
            return <Table.Body className="divide-y" key={book._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index+1}
                </Table.Cell>
                <Table.Cell>{book.bookTitle}</Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell>Rs299</Table.Cell>
                <Table.Cell className='flex justify-center items-center'>
                  <Link to={`/admin/dashboard/edit-book/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </Link>
                  <button className='mx-4 bg-red-700 text-white font-semibold rounded hover:bg-blue-600 cursor-pointer px-2 py-1' onClick={() => handleDelete(book._id)}>Delete</button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          })
             
        }
      </Table>
    </div>
  )
}

export default ManageBook