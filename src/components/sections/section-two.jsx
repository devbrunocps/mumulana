const SectionTwo = () => {
    return (
        <section className="w-full min-h-[100vh] flex flex-col items-center pt-24">
            <div className="w-2/5 max-md:w-1/2 flex flex-col gap-6 font-mont justify-center items-center">
                <span className="text-neutral-200 text-5xl">The Team Behind</span>
                <span className="text-neutral-400 text-lg text-center">Alpha AI's success is anchored by a team of industry veterans, each bringing a wealth of experience and specialized knowledge to the table. With a deep understanding of blockchain technology and AI development, the team is committed to pushing the boundaries of possibility in the blockchain ecosystem.</span>
                <button className="button-gradient border-[1px] border-[#6C00FF] py-2 px-2 rounded-xl text-white transition duration-200 font-mont text-lg">Learn more</button>
            </div>

            <div>
                <div className="flex">
                    <div className="flex flex-col">
                        <span>888M</span>
                        <span>Token</span>
                    </div>
                    <div></div>
                    <div className="flex flex-col">
                        <span>0%</span>
                        <span>Fee buy/sell</span>
                    </div>
                    <div></div>
                    <div className="flex flex-col">
                        <span>Liquidity</span>
                        <span>Blocked</span>
                    </div>
                    <div></div>
                    <div className="flex flex-col">
                        <span>45%</span>
                        <span>Pre Sale</span>
                    </div>
                </div>
                <img className="mt-36" src="./assets/planet.png" loading="eager"></img>
            </div>
        </section>
    )
}

export default SectionTwo