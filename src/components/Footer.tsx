import { logo } from '../assets';
import { footerLinks } from '../utils/constant';
import { styles } from '../utils/style';


const Footer = () => {
    return (
        <div id='clients' className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className='flex-1 flex flex-col justify-start mr-10'>
                    <img src={logo} alt="logo" className='w-[250px] h-[72px] object-contain ' />
                    <p className={`${styles.paragraph} mt-4 max-w-[350px]`}>To'lovlarni oson, ishonchli va xavfsiz qilishning yangi usuli.</p>
                </div>

                <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
                    {footerLinks.map(link => (
                        <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                            <h4 className='font-montserrat font-medium text-[18px] leading-[27px] text-white'>
                                {link.title}
                            </h4>
                            <ul className='list-none mt-4'>
                                {link.links.map((item, idx) => (
                                    <li
                                        className={`font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite hover:text-secondary cursor-pointer ${idx !== link.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                                        key={item.name}>
                                        <a href={item.name}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
                <p className='font-montserrat font-normal text-center text-[18px] leading-[27px] text-white'>Copyright © 2024 KamolPay. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
