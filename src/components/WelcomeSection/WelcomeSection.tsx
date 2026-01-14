import graph from '@/assets/images/graph.png'
import alert from '@/assets/images/icons/alert-01.svg'
import arrow from '@/assets/images/icons/arrow-int.svg'
import brand from '@/assets/images/brands/brand.png'
import brand_2 from '@/assets/images/brands/brand_2.png'
import gold from '@/assets/images/rates/gold.svg'
import graph_bg from '@/assets/images/bg_graph.svg'
import shield from '@/assets/images/icons/shield.svg'
import progress from '@/assets/images/icons/progress.svg'
import mark from '@/assets/images/icons/mark.svg'
import map from '@/assets/images/icons/map.svg'
export const WelcomeSection = () => {
    return (
        <>
        <div className='grid grid-cols-2 2xl:grid-cols-3 gap-x-5'>
            <div className='space-y-6 col-span-2 md:col-span-1 2xl:col-span-2'>
                <img src={graph} className='mx-auto' alt="graph"/>
                <div className='border-t border-[#1E2429]'>
                    <div className='2xl:flex hidden justify-between py-2'>
                        <div className='flex gap-x-2  items-center'>
                            <img src={alert} alt="alert"/>
                            <p className='text-gray font-semibold'>Last login: 29/03/26 06:38 PM</p>
                        </div>
                        <div className='flex gap-x-2'>
                            <p className='uppercase font-semibold'>See more statistic</p>
                            <img src={arrow} alt="arrow"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-2 md:col-span-1 2xl:col-span-1 relative overflow-hidden space-y-2'>
                <div className='w-full p-5 relative overflow-hidden '>
                    <div className="bg absolute z-[10] inset-0 bg-card-gray">
                        <img src={graph_bg} className='absolute -left-7 -top-10 w-[654px] opacity-50' alt=""/>
                        <div className="absolute w-[600px] h-[600px] rounded-full opacity-70 blur-xl -top-32 -left-[70%] radial-glow-purpure "/>
                    </div>
                    <div className="flex items-center gap-x-[14px] relative z-10">
                        <img src={brand} className='size-24' alt="rookez"/>
                        <div className='space-y-2'>
                            <div className='flex gap-x-2'>
                                <p className='text-[28px] font-bold leading-[100%]'>Rookez</p>
                                <img src={gold} height='17.4px' alt=""/>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <img src={shield} alt="icon"/>
                                <p className='text-[#8F9DA2] font-bold leading-0'>This is your current club</p>
                            </div>
                            <div className="flex gap-x-5.75">
                                <div>
                                    <p className='leading-[100%] font-bold text-[28px]'>386</p>
                                    <p className='leading-[100%] text-[#8F9DA2] font-semibold'>Games</p>
                                </div>
                                <div>
                                    <p className='leading-[100%] font-bold text-[28px]'>89%</p>
                                    <p className='leading-[100%] text-[#8F9DA2] font-semibold'>Games</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full p-5 relative overflow-hidden bg-card-gray space-y-4'>
                    <div className='flex justify-between border-b-2 pb-2 border-[#2D353B]'>
                        <div className='flex items-center gap-x-1.5'>
                            <img src={progress} alt="progress"/>
                            <span className='leading-0 text-accent font-semibold text-xl'>Next Match</span>
                        </div>
                        <div className='flex items-center gap-x-1.5'>
                            <span className='leading-0  font-semibold text-xl'>GET DIRECTIONS</span>
                            <img src={map} alt="map"/>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex gap-x-2'>
                            <img src={brand} className='size-5.5' alt="Rookez"/>
                            <p className='font-bold'>Rookez</p>
                        </div>
                        <p className='font-bold text-lg uppercase'>VS</p>
                        <div className='flex gap-x-2'>
                            <img src={brand_2} className='size-5.5' alt="Cougars"/>
                            <p className='font-bold'>Cougars</p>
                        </div>
                    </div>
                    <h3 className='uppercase font-bold text-lg SportyPro leading-[100%]'>World Futsal Championships 2025</h3>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-x-2'>
                            <img src={mark} className='size-5' alt="mark"/>
                            <p className='leading-[100%] font-semibold text-[#8F9DA2]'>Virginia Beach, VA</p>
                        </div>
                        <span className='font-bold text-lg'>
                            29/03/26 06:38 PM
                        </span>
                    </div>
                </div>
            </div>

        </div>

        </>
    );
};