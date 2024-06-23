import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import {FaCartShopping} from 'react-icons/fa6'

const BookCard = ({ books, headline }) => {
  return (
    <div className="lg:px-24 my-16 px-4">
        <h2 className="text-5xl font-bold text-center my-4 text-black">{headline}</h2>

        {/* Cards */}
        <div className='my-10'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
                }}
                modules={[Pagination]}
                className="mySwiper w-full h-full mt-20"
            >
                {
                    books.map(book => <SwiperSlide key={book._id}>
                        <Link to={`/book/${book._id}`} >
                            <div className='relative bg-gray-100 p-6'>
                                <img src={book.imageURL} />
                                <div className='bg-blue-600 hover:bg-black p-2 rounded absolute top-3 right-3 transition-all ease-in duration-200'>
                                    <FaCartShopping className='w-4 h-4 text-white'/>
                                </div>
                            </div>
                            <div className='flex justify-between mt-2'>
                                <div className='text-black text-sm'>
                                    <h3 className='font-bold'>{book.bookTitle}</h3>
                                    <p>{book.authorName}</p>
                                </div>
                                <div>
                                    <p className='text-blue-600 font-bold'>$10</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    </div>
  )
}

export default BookCard