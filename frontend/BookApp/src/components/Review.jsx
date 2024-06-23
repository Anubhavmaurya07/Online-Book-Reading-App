// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import {FaStar} from 'react-icons/fa6'
import { Avatar } from 'flowbite-react';
import Profile from '../assets/profile.jpg'
const Review = () => {
  return (
    <div className="px-4 lg:px-24 my-16">
        <h2 className="text-5xl font-bold text-black text-center mb-10">Our Customers</h2>
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
            className="mySwiper"
            >
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-4'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className='mt-7'>
                            <p className='text-base mb-5'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem impedit enim earum ipsa nesciunt ut hic quam ratione ipsum eos? Dolore corrupti ipsam quae molestias sint accusamus expedita suscipit consectetur?
                            </p>
                            <Avatar img={Profile} alt="avatar of Jese" rounded className='mb-4 w-10' />
                            <h5 className='text-black text-lg font-bold'>John Doe</h5>
                            <p className='font-medium'>CEO, ABC Company</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-4'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className='mt-7'>
                            <p className='text-base mb-5'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem impedit enim earum ipsa nesciunt ut hic quam ratione ipsum eos? Dolore corrupti ipsam quae molestias sint accusamus expedita suscipit consectetur?
                            </p>
                            <Avatar img={Profile} alt="avatar of Jese" rounded className='mb-4 w-10' />
                            <h5 className='text-black text-lg font-bold'>John Doe</h5>
                            <p className='font-medium'>CEO, ABC Company</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-4'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className='mt-7'>
                            <p className='text-base mb-5'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem impedit enim earum ipsa nesciunt ut hic quam ratione ipsum eos? Dolore corrupti ipsam quae molestias sint accusamus expedita suscipit consectetur?
                            </p>
                            <Avatar img={Profile} alt="avatar of Jese" rounded className='mb-4 w-10' />
                            <h5 className='text-black text-lg font-bold'>John Doe</h5>
                            <p className='font-medium'>CEO, ABC Company</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-4'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className='mt-7'>
                            <p className='text-base mb-5'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem impedit enim earum ipsa nesciunt ut hic quam ratione ipsum eos? Dolore corrupti ipsam quae molestias sint accusamus expedita suscipit consectetur?
                            </p>
                            <Avatar img={Profile} alt="avatar of Jese" rounded className='mb-4 w-10' />
                            <h5 className='text-black text-lg font-bold'>John Doe</h5>
                            <p className='font-medium'>CEO, ABC Company</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-4'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className='mt-7'>
                            <p className='text-base mb-5'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem impedit enim earum ipsa nesciunt ut hic quam ratione ipsum eos? Dolore corrupti ipsam quae molestias sint accusamus expedita suscipit consectetur?
                            </p>
                            <Avatar img={Profile} alt="avatar of Jese" rounded className='mb-4 w-10' />
                            <h5 className='text-black text-lg font-bold'>John Doe</h5>
                            <p className='font-medium'>CEO, ABC Company</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-4'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className='mt-7'>
                            <p className='text-base mb-5'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem impedit enim earum ipsa nesciunt ut hic quam ratione ipsum eos? Dolore corrupti ipsam quae molestias sint accusamus expedita suscipit consectetur?
                            </p>
                            <Avatar img={Profile} alt="avatar of Jese" rounded className='mb-4 w-10' />
                            <h5 className='text-black text-lg font-bold'>John Doe</h5>
                            <p className='font-medium'>CEO, ABC Company</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
    </div>
  )
}

export default Review