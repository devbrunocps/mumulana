import Cyber from '../cyber/Cyber';

export default function SectionFour() {
    return (
        <div className='w-full flex flex-col items-center'>

            <span className='text-center z-20 relative top-40 font-mont text-neutral-200 text-5xl w-1/4'>Tokenomics Distribution</span>

            <div className='grid grid-cols-3 justify-items-center items-center'>

                <div className='relative w-1/2 ml-72 max-lg:ml-16 flex flex-col gap-12'>
                    <div className='flex flex-col'>
                        <span className='text-4xl text-white font-mont font-medium'>7% Ecosystem</span>
                        <span className='text-lg text-neutral-400 font-mont'>Percentage allocated for Mumulana Ecosystem</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-4xl text-white font-mont font-medium'>7% Ecosystem</span>
                        <span className='text-lg text-neutral-400 font-mont'>Percentage allocated for Mumulana Ecosystem</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-4xl text-white font-mont font-medium'>7% Ecosystem</span>
                        <span className='text-lg text-neutral-400 font-mont'>Percentage allocated for Mumulana Ecosystem</span>
                    </div>
                </div>

                <div className='flex justify-center w-[100vw] h-[120vh] top-0'>
                    <Cyber />
                </div>

                <div className='relative w-1/2 mr-72 max-lg:mr-16 flex flex-col gap-12'>
                    <div className='flex flex-col'>
                        <span className='text-4xl text-white font-mont font-medium'>7% Ecosystem</span>
                        <span className='text-lg text-neutral-400 font-mont'>Percentage allocated for Mumulana Ecosystem</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-4xl text-white font-mont font-medium'>7% Ecosystem</span>
                        <span className='text-lg text-neutral-400 font-mont'>Percentage allocated for Mumulana Ecosystem</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-4xl text-white font-mont font-medium'>7% Ecosystem</span>
                        <span className='text-lg text-neutral-400 font-mont'>Percentage allocated for Mumulana Ecosystem</span>
                    </div>
                </div>

            </div>


        </div>
    );
}
