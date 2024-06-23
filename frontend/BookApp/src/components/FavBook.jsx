import favBookImg from '../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'
const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 w-full my-20 flex items-center">
        <div className='md:w-1/2'>
            <img src={favBookImg} alt="" className='rounded md:w-10/12'/>
        </div>
        <div className='md:w-1/2 space-y-8'>
            <h2 className='font-bold leading-snug text-black text-5xl w-3/4'>Find Your Favourite <span className='text-blue-700'>Book Here!</span></h2>
            <p className='text-base text-black font-medium md:w-5/6 leading-7'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ipsum fugiat eaque voluptatem! Natus cum mollitia, esse, temporibus animi dolore blanditiis eius dolor sunt iusto explicabo molestiae?
            </p>
            <div className='flex items-center justify-between w-3/4'>
                <div>
                    <h3 className='text-3xl text-black font-bold'>800+</h3>
                    <p className='text-black text-sm'>Book Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl text-black font-bold'>550+</h3>
                    <p className='text-black text-sm'>Registed User</p>
                </div>
                <div>
                    <h3 className='text-3xl text-black font-bold'>1200+</h3>
                    <p className='text-black text-sm'>Pdf Downloaded</p>
                </div>
            </div>
            <Link to='/shop'>
                <button className='bg-blue-700 text-white font-medium px-4 py-2 hover:bg-black transition-all ease-in duration-200 rounded-md my-5'>Explore Now</button>
            </Link>
        </div>
    </div>
  )
}

export default FavBook