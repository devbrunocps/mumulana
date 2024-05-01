import { useState } from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";


const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="h-[6rem] flex justify-around items-center flex-wrap">
            <div className="font-gold text-white font-medium text-3xl">MUMULANA COIN</div>

            <ul className="max-md:hidden flex text-white text-lg font-mont font-normal gap-6">
                <li><a href="dapp">Home</a></li>
                <li><a href="#">Whitepaper</a></li>
                <li><a href="#">Contract</a></li>
            </ul>

            <div className="max-md:hidden flex justify-center items-center gap-4">
                <div className="flex text-white text-2xl gap-2">
                    <FaTwitter className="hover:text-neutral-400 transition duration-200]" />
                    <FaTelegram className="hover:text-neutral-400" />
                </div>
                <div>
                    <button className="button-gradient cursor-pointer py-2 px-2 rounded-xl text-white transition duration-200 font-mont text-md" onClick={() => window.location.href = '/dapp'}>Dapp Stake</button>
                </div>
            </div>

            <div className="md:hidden cursor-pointer z-50" onClick={() => setOpen(!open)}>
                {open ? (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                ) : (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                )}
            </div>


            <ul className={ open ? "z-20 hidden max-md:flex text-white text-sm font-mont font-normal gap-6 absolute bg-neutral-900 w-full top-[6rem] flex-col p-8 opacity-100 delay-500ms transition-all duration-500 transform translate-y-0 visible animate-fade-in" : "z-20 flex text-white text-sm font-mont font-normal gap-6 absolute bg-neutral-950 w-full top-[6rem] flex-col p-8 delay-500ms transition-all duration-500 transform translate-y-[-11rem] opacity-0 visible animate-fade-in" }>
                <li><a href="#">Home</a></li>
                <li><a href="#">Whitepaper</a></li>
                <li><a href="#">Contract</a></li>
            </ul>

        </div>
    )
}

export default Navbar