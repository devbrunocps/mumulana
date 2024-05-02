const SectionTwo = () => {
    return (
        <section className="w-full min-h-[100vh] flex flex-col items-center pt-48 gap-24">
            <div className="w-2/5 max-md:w-1/2 flex flex-col gap-6 font-mont justify-center items-center">
                <span className="text-neutral-200 text-5xl">The Team Behind</span>
                <span className="text-neutral-400 text-lg text-center">Alpha AI's success is anchored by a team of industry veterans, each bringing a wealth of experience and specialized knowledge to the table. With a deep understanding of blockchain technology and AI development, the team is committed to pushing the boundaries of possibility in the blockchain ecosystem.</span>
                <button className="button-gradient border-[1px] border-[#6C00FF] py-2 px-2 rounded-xl text-white transition duration-200 font-mont text-lg">Learn more</button>
            </div>

            <div className="w-3/4 flex flex-col justify-center items-center">
                <div className="flex absolute items-center justify-center gap-16 mt-64">
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-neutral-200 font-mont text-7xl font-medium">888M</span>
                        <span className="text-neutral-400 font-mont font-medium">Token</span>
                    </div>
                    <div className="w-[0.8px] h-[4.5rem] bg-neutral-400"></div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-neutral-200 font-mont text-7xl font-medium">0%</span>
                        <span className="text-neutral-400 font-mont font-medium">Fee buy/sell</span>
                    </div>
                    <div className="w-[0.8px] h-[4.5rem] bg-neutral-400"></div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-neutral-200 font-mont text-7xl font-medium">Liquidity</span>
                        <span className="text-neutral-400 font-mont font-medium">Blocked</span>
                    </div>
                    <div className="w-[0.8px] h-[4.5rem] bg-neutral-400"></div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-neutral-200 font-mont text-7xl font-medium">45%</span>
                        <span className="text-neutral-400 font-mont font-medium">Pre Sale</span>
                    </div>
                </div>
                <img className="mt-20" width={1000} src="./assets/planet.png" loading="eager"></img>
            </div>
        </section>
    )
}

export default SectionTwo