import BannerCard from "./BannerCard"

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 w-full py-40">
            {/* left section */}
            <div className="w-1/2 space-y-8 h-full">
                <h2 className="text-5xl font-bold text-black leading-snug">Buy and Sell Your Books <span className="text-blue-700">for the Best Prices</span></h2>
                <p className="md:w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sit cumque, exercitationem earum sapiente architecto, illum harum nesciunt laborum alias maxime error dignissimos nam dolorem nemo</p>
                <div>
                    <input type="search" name="search" id="search" placeholder="Search a book" className="px-4 rounded-s-sm py-2 outline-none" />
                    <button className="bg-blue-700 text-white rounded-s-sm py-2 px-6 font-medium hover:bg-black transition-all ease-in duration-200">Search</button>
                </div>
            </div>

            {/* right section */}
            <div className="">
                <BannerCard />
            </div>
        </div>
    </div>
  )
}

export default Banner