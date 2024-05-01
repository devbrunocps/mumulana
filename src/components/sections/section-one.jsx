const SectionOne = () => {
    return (
        <section className="w-full h-calcvh flex justify-center items-center font-mont">

            <img className="bg-coin-blur absolute top-[8rem]  blur-sm w-[120px] h-[90px]" src="./assets/coin.png" alt="" />
            <img className="bg-coin-blur absolute bottom-[1rem] blur-sm w-[120px] h-[90px]" src="./assets/coin.png" alt="" />

            <aside className="w-1/4 flex flex-col items-center">
                <img className="bg-coin relative -top-24 -left-20 w-[220px] h-[180px] max-md:w-[120px] max-md:h-[80px]" src="./assets/coin.png" alt="" />
                <img className="bg-coin relative -bottom-16  w-[220px] h-[180px] max-md:w-[120px] max-md:h-[80px]" src="./assets/coin.png" alt="" />
            </aside>

            <div className="w-1/3 max-md:w-1/2 flex flex-col gap-4 text-center items-center z-10">
                <span className="text-neutral-300 text-5xl">Unlocking the Power of AI: Buy and trade cryptos Pioneering Web3 Innovation.</span>
                <span className="text-neutral-400 text-lg">In today's fast-paced digital realm, AI stands as a game-changer, disrupting industries with its transformative prowess. Yet, the marriage of AI and blockchain auditing remains an untapped frontier. Enter Web3, the era where blockchain redefines trust and decentralization.</span>
                <div className="flex gap-4">
                    <button className="button-gradient border-[1px] border-[#6C00FF] py-2 px-2 rounded-xl text-white transition duration-200 font-mont text-lg">Buy presale StartCoin</button>
                    <button className=" bg-transparent border-[1px] border-white hover:bg-white hover:text-black py-2 px-2 rounded-xl text-white transition duration-200 font-mont font-regular text-lg">Learn More</button>
                </div>
            </div>

            <aside className="w-1/4 flex flex-col items-center">
                <img className="bg-coin relative -top-20 w-[220px] h-[180px] max-md:w-[120px] max-md:h-[80px]" src="./assets/coin.png" alt="" />
                <img className="bg-coin relative -bottom-12 w-[220px] h-[180px] max-md:w-[120px] max-md:h-[80px]" src="./assets/coin.png" alt="" />
            </aside>

        </section>
    )
}

export default SectionOne