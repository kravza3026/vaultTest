import { useState } from 'react'
import Logo from '@/assets/images/logo.png'
import LogoSm from '@/assets/images/small-logo.png'
import arrow from '@/assets/images/icons/arrow.svg'
import home from '@/assets/images/icons/home.svg'
import medal from '@/assets/images/icons/medal.svg'
import calendar from '@/assets/images/icons/calendar.svg'
import shield from '@/assets/images/icons/shield.svg'
import award from '@/assets/images/icons/award.svg'
import crown from '@/assets/images/icons/crown.svg'
import alert from '@/assets/images/icons/alert.svg'
import xp from '@/assets/images/icons/xp.svg'


const navItems = [
    { label: 'HOME', href: '/', icon:home, active:true },
    { label: 'CLUBS', href: '/about', icon:shield, active:false },
    { label: 'EVENTS', href: '/services', icon:award, active:false },
    { label: 'RANKINGS', href: '/contact', icon:medal, active:false },
    { label: 'CALENDAR', href: '/contact', icon:calendar, active:false },
]

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-primary ">
            <div className="mx-auto flex h-20  items-center justify-between pr-6">
                {/* Logo */}

                   <div className="flex h-full">
                       <a href="/" className="text-lg font-bold">
                           <img src={Logo} alt="MyApp Logo" className="h-full max-h-20 w-full hidden 2xl:block" />
                           <img src={LogoSm} alt="MyApp Logo" className="h-full max-h-20 w-full block 2xl:hidden" />
                       </a>
                       <div className="text-start flex items-center justify-center h-full">
                           <div className="bg-gray-base h-full flex-row content-center p-6 2xl:pr-13.25">
                               <p className="p-0 font-semibold leading-[100%]">Use platform as:</p>
                               <p className="uppercase text-[22px] font-bold leading-[100%]">PLAYER</p>
                           </div>
                           <div className="bg-grey h-full flex justify-center items-center w-7.5 bg-gray-light cursor-pointer text-white">
                               <img src={arrow} alt="arrow" className="h-full max-h-3 w-auto text-white" />
                           </div>
                       </div>
                   </div>
                   {/* Desktop nav */}
                   <nav className="hidden lg:flex 2xl:gap-2.5 gap-2 text-sm font-medium text-white! h-full items-center">
                       {navItems.map(item => (
                           <div className="relative h-full flex items-center px-2 2xl:px-4">
                            <span
                                className={`w-full h-1 absolute top-0 left-0 ${
                                    item.active ? 'bg-accent shadow-[0px_3px_23.1px_0px_#C3FF00]' : 'bg-transparent'
                                }`}
                            ></span>
                               <a key={item.href} href={item.href} className="hover:opacity-70 duration-150  text-base flex items-center gap-x-1.75 ">
                                   <img className={`-mt-1 ${item.active ? 'drop-shadow-sm drop-shadow-white/50' : 'drop-shadow-sm drop-shadow-white/10'}`} src={item.icon} alt={item.label}/>
                                   <p className={`text-sm  
                                   ${item.active ? 'text-text text-shadow' : 'text-disabled'}
                                   `}>{item.label}</p>
                               </a>
                           </div>
                       ))}
                   </nav>

               <div className='flex items-center gap-x-6 h-full'>
                   <div className="flex items-center gap-x-6 h-full">
                       <div className="w-38 h-10.5 p-0.5 rounded-full bg-linear-to-r from-white to-[#00FFFF] hover:from-[#00FFFF] transition duration-500 overflow-hidden hidden sm:block">
                           <div className="SportyPro w-full h-full cursor-pointer flex items-center justify-center gap-x-1.75 rounded-full bg-light-blue text-primary uppercase font-bold">
                               <span>UPGRADE</span>
                               <img src={crown} className="-mt-1" alt=""/>
                           </div>
                       </div>

                       <div className="relative cursor-pointer hidden sm:block">
                           <div className="bg-primary size-3 rounded-full absolute -top-1.5 -right-1 flex items-center justify-center">
                               <span className="relative size-1.5 bg-accent border-primary z-10 rounded-full"></span>
                           </div>
                           <img className='w-[18.5px]' src={alert} alt="alert"/>
                       </div>
                       <span className='h-2/3 w-0.5 bg-gray-base hidden 2xl:block'></span>
                       <div className='flex items-center gap-x-11'>
                           <div className='flex items-center gap-x-3'>
                               <img className='rounded-full' width='56' src="https://i.pravatar.cc/60" alt="user name"/>
                               <div className='hidden 2xl:block '>
                                   <p className='font-semibold text-[20px]'>Rob Andrews</p>
                                   <div className='flex items-center gap-x-1'>
                                       <img src={xp} alt=""/>
                                       <p className='text-[18px] font-semibold font-rajdhani leading-0'>3700</p>
                                   </div>
                               </div>
                           </div>
                           <img src={arrow} alt="MyApp Logo" className="h-full max-h-3 w-auto rotate-90 hidden 2xl:block" />
                       </div>
                   </div>

                   {/* Burger */}
                   <button
                       className="relative z-50 flex h-10 w-10 flex-col items-center justify-center lg:hidden bg-transparent! outline-0! "
                       onClick={() => setMenuOpen(!menuOpen)}
                       aria-label="Toggle menu"
                   >
                  <span
                      className={`h-1 w-6 bg-white transition ${
                          menuOpen ? 'translate-y-1.5 rotate-45' : ''
                      }`}
                  />
                       <span
                           className={`my-1 h-1 w-6 bg-white transition ${
                               menuOpen ? 'opacity-0' : ''
                           }`}
                       />
                       <span
                           className={`h-1 w-6 bg-white transition ${
                               menuOpen ? '-translate-y-1.5 -rotate-45' : ''
                           }`}
                       />
                   </button>
               </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`lg:hidden z-40 fixed inset-0 bg-white transition-transform duration-300 ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <nav className="flex h-full flex-col items-center bg-primary justify-center gap-8 text-lg font-medium">
                    {navItems.map(item => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
            <nav className='w-full bg-light h-[40px]'>
                <ul className='text-primary flex justify-center gap-x-11.5 text-[18px] leading-[100%] py-2.25'>
                    <li>Upcoming Matches</li>
                    <li>Past Matches</li>
                    <li>My Profile</li>
                </ul>
            </nav>
        </header>
    )
}
