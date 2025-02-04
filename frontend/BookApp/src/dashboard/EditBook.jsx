import { useLoaderData, useParams } from "react-router-dom"
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';

const EditBook = () => {
  const {id} = useParams()
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL} = useLoaderData();

  const bookCategories = ['Fiction', 'Non-Fiction', 'Mistery', 'Programming', 'Science Fiction', 'Fantasy', 'Horror', 'Bibliography', 'Autobiography', 'History', 'Self-Help', 'Memoir', 'Business', 'Children Books', 'Travel', 'Religion', 'Art and Design']

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0])
  const handleChange = (event) => {
    setSelectedBookCategory(event.target.value);
  }
  // Form Submission
  const handleUpdate = (e) => {
      e.preventDefault();
      const form = e.target;
      const bookTitle = form.bookTitle.value;
      const authorName = form.authorName.value;
      const imageURL = form.imageURL.value;
      const category = form.category.value;
      const bookDescription = form.bookDescription.value;
      const bookPDFURL = form.bookPDFURL.value;
      
      const updatedBookObject = {
        bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
      }

      // send data to database
      fetch(`http://localhost:3001/book/${id}`, {
        method: "PATCH",
        headers:{
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedBookObject)
      }).then(res => res.json()).then(data => alert('Book updated successfully!!!!'))

      form.reset();
  }
  return (
    <div className="px-4 my-12">
      <h2 className="text-3xl font-bold mb-8">Update the Book</h2>
      <form className="flex lg:w-[1080px] flex-wrap flex-col gap-4" onSubmit={handleUpdate}>
        {/* First row */}
        <div className='flex gap-8'>
          {/* book title */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" type="text" name='bookTitle' placeholder="Book name" required defaultValue={bookTitle}/>
          </div>
          {/* author name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Book Author" />
            </div>
            <TextInput id="authorName" type="text" name='authorName' placeholder="Author name" required defaultValue={authorName}/>
          </div>
        </div>

        {/* Second row */}
        <div className='flex gap-8'>
          {/* image url */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" type="text" name='imageURL' placeholder="Book Image URL" required defaultValue={imageURL}/>
          </div>
          {/* category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="category" value="Book Category" />
            </div>
            <Select id='category' name='category' className='w-full rounded' value={selectedBookCategory} onChange={handleChange}>
              {
                bookCategories.map((option) => <option key={option}>{option}</option>)
              }
            </Select>
          </div>
        </div>

        {/* Book Description */}
        <div>
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="Book Description" />
            </div>
            <Textarea id="bookDescription" type="text" name='bookDescription' placeholder="Enter book descripton..." required rows={6} className='w-full' defaultValue={bookDescription}/>
          </div>

          {/* Book pdf url */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="bookPDFURL" value="Book PDF URL" />
            </div>
            <TextInput id="bookPDFURL" type="text" name='bookPDFURL' placeholder="Book pdf url" required defaultValue={bookPDFURL} />
          </div>

          <Button type='submit' className='mt-5'>Upload Book</Button>
      </form>
    </div>
  )
}

export default EditBook