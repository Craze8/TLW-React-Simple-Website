import { FaFacebookF, FaGithub } from "react-icons/fa";

const Cards = [
  {
    id: 1,
    title: "Title 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus quas labore! Consequatur, quia perspiciatis!",
    devstack: "Stack1, Stack2, Stack3, Stack4",
    src: "https://placehold.co/300x200",
    type: "Type of Program",
  },
  {
    id: 3,
    title: "Title 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus quas labore! Consequatur, quia perspiciatis!",
    devstack: "Stack1, Stack2, Stack3, Stack4",
    src: "https://placehold.co/300x200",
    type: "Type of Program",
  },
  {
    id: 2,
    title: "Title 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus quas labore! Consequatur, quia perspiciatis!",
    devstack: "Stack1, Stack2, Stack3, Stack4",
    src: "https://placehold.co/300x200",
    type: "Type of Program",
  },
  
];

export default function Tabs() {
  return (
    <div className="h-auto w-full flex flex-col justify-left bg-white text-black font-bold text-left px-4 md:px-6 py-10">
      
    
      <div className="flex flex-wrap justify-center sm:justify-center  gap-12">
        {Cards.map((card) => (
          <div
            key={card.id}
            className="h-auto w-80 p-3 border-2 border-[#273e3d] bg-white rounded-xl shadow-lg overflow-auto transition duration-300 hover:shadow-xl"
          >
          
            <div className="m-2 overflow-hidden flex justify-center">
              <img src={card.src} alt="Hero" className="rounded p-2 shadow-md" />
            </div>

            <div className="p-2 text-gray-800">
              <h1 className="text-2xl text-[#273e3d] font-semibold italic">{card.title}</h1>
              <span className="text-sm text-[#273e3d] font-serif">{card.type}</span>
              <p className="mt-2 text-base leading-relaxed text-justify font-normal italic">
                "{card.desc}"
              </p>

         
              <div className="flex justify-end mt-6 gap-7 text-sm">
                <a
                  href="#"
                  className="text-black hover:text-blue-400 transition duration-300"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="#"
                  className="text-black hover:text-blue-400 transition duration-300"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
