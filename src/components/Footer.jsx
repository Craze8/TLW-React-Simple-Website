import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full bg-[#273e3d] text-white px-5 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

     
        <div>
          <h2 className="text-xl font-bold">YourBrand</h2>
          <p className="text-sm text-gray-300 mt-2">
            Empowering businesses with cutting-edge solutions.
          </p>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Services</li>
            <li className="hover:underline cursor-pointer">Blog</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <FaFacebook className="text-xl hover:text-blue-400 cursor-pointer" />
            <FaTwitter className="text-xl hover:text-blue-300 cursor-pointer" />
            <FaInstagram className="text-xl hover:text-pink-400 cursor-pointer" />
          </div>
        </div>
      </div>


      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-500 pt-4">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </div>
  );
}
