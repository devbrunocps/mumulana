import Navbar from "../components/navbar/Navbar"
import SectionOne from "../components/sections/section-one"

const Home = () => {
    return (
        <div className="w-full min-h-screen bg-[#060608] flex flex-col">
            <Navbar />
            <main className="">
                <SectionOne />
            </main>
        </div>
    )
}

export default Home