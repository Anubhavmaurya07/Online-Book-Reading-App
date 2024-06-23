import AwardImg from '../assets/awardbooks.png'
import { Link } from 'react-router-dom'
const PromoBanner = () => {
  return (
    <div className="px-4 md:px-24 my-5 bg-teal-100 py-12 md:flex md:flex-row flex-col justify-between items-center">
        <div className="w-1/2">
            <h2 className="text-4xl font-bold text-black leading-snug">
                2023 National Book Awards for Fiction Shortlist
            </h2>
            <Link to='/shop'>
                <button className='bg-blue-700 text-white font-medium px-4 py-2 hover:bg-black transition-all ease-in duration-200 rounded-md my-5'>Get Promo</button>
            </Link>
        </div>
        <div>
            <img src={AwardImg} className='w-96'/>
        </div>
    </div>
  )
}

export default PromoBanner