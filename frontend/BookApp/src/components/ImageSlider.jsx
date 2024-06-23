import { Carousel } from 'flowbite-react';

const ImageSlider = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={2000}>
        <img src="https://s.gr-assets.com/assets/about/headerImages/About-Carousel-1-4ecdb327a458a36e6e897abe7839e3b9.jpg" alt="..." />
        <img src="https://s.gr-assets.com/assets/about/headerImages/About-Carousel-2-9009546b74c49cece686733bbbf5e5d7.jpg" alt="..." />
        <img src="https://s.gr-assets.com/assets/about/headerImages/About-Carousel-3-735e3eb6fd44644fc310139d9e2ebbed.jpg" alt="..." />
      </Carousel>
      <h2 className='text-center font-semibold text-3xl text-blue-700 my-5'>The right book in the right hands at the right time can change the world.</h2>
      <div className='w-1/2 ml-5 space-y-7'>
        <div>
            <h3 className='text-2xl font-semibold'>Who We Are</h3>
            <p className='ml-3 mt-3'>Books is the world’s largest site for readers and book recommendations. Our mission is to help readers discover books they love and get more out of reading. Books launched in January 2007.</p>
        </div>
        
        <div>
            <h3 className='text-2xl font-semibold'>A Few Things You Can Do On Books</h3>
            <p className='ml-3 mt-3'>See what books your friends are reading.
                Track the books you're reading, have read, and want to read.
                Check out your personalized book recommendations. Our recommendation engine analyzes 20 billion data points to give suggestions tailored to your literary tastes.
                Find out if a book is a good fit for you from our community’s reviews..</p>
        </div>
        
      </div>
    </div>
    )
}

export default ImageSlider;