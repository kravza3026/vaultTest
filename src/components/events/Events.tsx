import graph_bg from "@/assets/images/bg_graph.svg";

import mark from "@/assets/images/icons/mark.svg";
import progress from "@/assets/images/icons/progress.svg";
import arrow_d from "@/assets/images/icons/arrow_d.svg";

const cards =[
    {featured: false, label:'World Futsal Championships 2025', locale:"Virginia Beach, VA", categories:["INDOOR","UPCOMING","UPCOMING"],genders:"Boys U14 / Girls U16",date:"Dec 17–22, 2025"},
    {featured: true, label:'World Futsal Championships 2025', locale:"Virginia Beach, VA", categories:["INDOOR","UPCOMING","UPCOMING"],genders:"Boys U14 / Girls U16",date:"Dec 17–22, 2025"},
    {featured: false, label:'World Futsal Championships 2025', locale:"Virginia Beach, VA", categories:["INDOOR","UPCOMING","UPCOMING"],genders:"Boys U14 / Girls U16",date:"Dec 17–22, 2025"},
    {featured: false, label:'World Futsal Championships 2025', locale:"Virginia Beach, VA", categories:["INDOOR","UPCOMING","UPCOMING"],genders:"Boys U14 / Girls U16",date:"Dec 17–22, 2025"},
    {featured: false, label:'World Futsal Championships 2025', locale:"Virginia Beach, VA", categories:["INDOOR","UPCOMING","UPCOMING"],genders:"Boys U14 / Girls U16",date:"Dec 17–22, 2025"},
    {featured: true, label:'World Futsal Championships 2025', locale:"Virginia Beach, VA", categories:["INDOOR","UPCOMING","UPCOMING"],genders:"Boys U14 / Girls U16",date:"Dec 17–22, 2025"},
    {featured: true, label:'World Futsal Championships 2025', locale:"Virginia Beach, VA", categories:["INDOOR","UPCOMING","UPCOMING"],genders:"Boys U14 / Girls U16",date:"Dec 17–22, 2025"},
    {featured: false, label:'World Futsal Championships 2025', locale:"Virginia Beach, VA", categories:["INDOOR","UPCOMING","UPCOMING"],genders:"Boys U14 / Girls U16",date:"Dec 17–22, 2025"},
]
export const Events = () => {
    return (
        <>
            <div className='w-full mt-[31px]'>
                <div className="flex gap-x-10  w-full pb-2">
                    <div className="w-1/2 2xl:w-fit">Upcoming Events</div>
                    <div className="w-1/2 2xl:w-fit">My Events</div>
                </div>
                <div className="w-full h-1 bg-gray-light relative">
                    <span className='w-1/2 2xl:w-1/14 absolute start-0 h-1 block bg-accent'></span>
                </div>
            </div>
            <div className='flex flex-wrap justify-center gap-5 my-6'>
                {cards.map(card => (
                    <div className='w-full max-w-[365px] p-5 relative overflow-hidden transition duration-500'>
                        <div className=" absolute z-10 inset-0 bg-card-gray">
                            <img src={graph_bg} className='absolute -left-7 -top-10 w-163.5 opacity-50' alt="icon"/>
                            <div className={`absolute w-150 h-150 rounded-full opacity-70 blur-2xl -top-[150%] -left-full ${card.featured ? 'radial-glow-purpure' : 'radial-glow'} `}/>
                        </div>
                        <div className="flex w-full items-center gap-x-3.5 relative z-10">
                            <div className='space-y-2 w-full'>
                                <p className='text-accent font-bold min-h-8'>{card.featured ? 'FEATURED' : ''}</p>
                                <p className='SportyPro uppercase'>{card.label}</p>
                                <div className='flex gap-x-2 items-center'>
                                    <img src={mark} className='size-5' alt="mark"/>
                                    <p className='text-[#8F9DA2] font-bold'>Virginia Beach, VA</p>
                                </div>
                                <ul className='flex gap-x-2'>
                                    {card.categories.map(category =>(
                                        <li className='bg-[#8F9DA24A] leading-[100%] pt-2 py-1 px-2 font-bold SportyPro font-sm'>{category}</li>
                                    ))}

                                </ul>
                                <hr className='w-full my-4 border-[#2D353B]'/>
                                <div>
                                    <div className='flex items-center gap-x-1.5'>
                                        <img src={progress} alt="progress"/>
                                        <span className='leading-0  font-semibold text-xl'>{card.genders}</span>
                                    </div>
                                </div>
                                <hr className='w-full my-4 border-[#2D353B]'/>
                                <div className='flex justify-between items-center SportyPro'>
                                    <p className=''>Dec 17–22, 2025</p>
                                    <div className={`flex items-center relative px-1 ${card.featured ? 'bg-accent' : 'bg-white'}`}>
                                        <span className="clip w-3 h-3 bg-card-gray absolute -top-1.5 -right-1.5 rotate-45"></span>
                                        <p className='text-primary font-bold py-1 px-1 '>VIEW MORE DETAILS</p>
                                        <img src={arrow_d} alt="arrow" className="h-full max-h-3 w-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </>
    );
};