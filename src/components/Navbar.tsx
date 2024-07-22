import { useState } from 'react'
import { logo, menu, close } from '../assets'
import { navigationLinks } from '../utils/constant'

const Navbar = () => {
    const [active, setActive] = useState<string>('home')
    const [isMenu, setIsMenu] = useState<boolean>(false)
    const showMenu = () => setIsMenu(!isMenu)
    const activeNav = (id:string) => setActive(id)

    return (
        <div className='w-full flex flex-row py-6 justify-between items-center navbar'>
            {/* LOGO */}
            <img src={logo} alt="logo" className='w-[110px] h-[50px] cursor-pointer' />

            {/* Navigation Bar */}
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navigationLinks.map((nav, idx) => (
                    <li
                        onClick={() => activeNav(nav.id)}
                        key={nav.id}
                        className={`
                            font-montserrat font-normal cursor-pointer text-[16px] text-lightWhite hover:text-white transition-all duration-300 
                            ${idx === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'} 
                            ${active === nav.id ? 'text-lightWhite' : 'text-white'}`
                        }>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

            {/* Navigation button */}
            <div className='sm:hidden flex  flex-1 justify-end items-center'>
                <img onClick={showMenu} src={isMenu ? close : menu} alt="menu-icon" className='w-[40px] h-[40px]  object-contain' />

                <div className={`${!isMenu ? 'hidden ' : 'flex'} p-6 bg-black-gradient absolute z-20 top-20 right-0 left-0 my-2 w-full `}>
                    <ul className='list-none flex flex-col justify-center items-center flex-1'>
                        {navigationLinks.map((nav, idx) => (
                            <li
                                key={nav.id}
                                className={
                                    `font-montserrat font-normal cursor-pointer text-[16px] text-white hover:text-lightWhite transition-all duration-300
                                    ${active === nav.id ? 'text-lightWhite' : 'text-white'}
                                `}>
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
