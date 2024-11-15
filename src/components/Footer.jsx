import { assets } from "../assets/assets"


const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 w-full bg-gray-900 overflow-hidden" id="Footer">

        <div className="container flex mx-auto flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <img src={assets.logo_dark} alt="" />
                <p className="text-gray-400 mt-4">At Real-Estate-Homes-by-Ify, we believe that finding your perfect home is more than just a transaction; it’s about creating a future. With years of experience and a deep passion for real estate, our dedicated team is here to guide you through every step of the process. Whether you’re buying your first home, 
                    selling an investment property, or searching for your dream space, we are committed to making your journey smooth, transparent, and personalized.</p>
            </div>

            <div className="w-full md:w-1/5 mb-8 md:md-0">
                <h3 className="text-white text-lg font-bold mb-4">Company</h3>
                <ul className="flex flex-col text-gray-400 gap-2">
                    <a href="#Header" className="hover:text-white">Home</a>
                    <a href="#About" className="hover:text-white">About</a>
                    <a href="##Contact" className="hover:text-white">Contact Us</a>
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                </ul>
            </div>

            <div className="w-full md:w-1/3">
            <h3 className="text-white text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="mb-4 text-gray-400 max-w-80">The Latest News, Article and Resources Sent to Your Inbox Weekly</p>
            <div className="flex gap-2">
                <input type="email" placeholder="Enter Your Email" className="p-2 rounded text-gray-400 bg-gray-800 border border-gray-700 focus:outline-none w-full md:w-auto" />
           <button className="py-2 px-4 rounded bg-blue-500 text-white">Subscribe</button>
            </div>
            </div>
        </div>

        <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
            Copyright 2024 © Real Estate App By Ify. All Rights Reserved
        </div>
      
    </div>
  )
}

export default Footer
