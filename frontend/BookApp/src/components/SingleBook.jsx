import { useLoaderData } from "react-router-dom"

const SingleBook = () => {
    const { bookTitle, imageURL, authorName, bookDescription, category} = useLoaderData()
  return (
    <div className="mt-36 px-4 lg:px-24 space-y-5 md:flex justify-between items-center">
      <div>
        <img src={imageURL} className="h-96" />
      </div>
      <div className="lg:w-[60vw] space-y-6">
        <h2 className="font-semibold text-5xl text-[#1e1915]">{bookTitle}</h2>
        <h3 className="md:text-[20px] text-[#1e1915] underline">{authorName}</h3>
        <p className="font-medium">{bookDescription}</p>
        <p>Category :- <span className="mx-4 text-[#3f8363]">{category}</span></p>
        <div className="md:flex space-x-12">
          <button className="bg-[#3f8363] text-white font-medium px-4 py-2 hover:bg-black transition-all ease-in duration-200 rounded-md">Want to read</button>
          <button className="bg-[#3f8363] text-white font-medium px-4 py-2 hover:bg-black transition-all ease-in duration-200 rounded-md">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default SingleBook