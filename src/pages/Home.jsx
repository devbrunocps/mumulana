import Navbar from "../components/navbar/Navbar"
import SectionOne from "../components/sections/section-one"
import SectionTwo from "../components/sections/section-two"

const Home = () => {
    return (
        <div className="w-full min-h-screen bg-[#060608] flex flex-col">
            <Navbar />
            <main className="">
                <SectionOne />
                <SectionTwo />
            </main>
        </div>
    )
}

export default Home