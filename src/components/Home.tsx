import { discount, Lambo } from '../assets';
import { styles } from '../utils/style';
import Button from './Button';

const Home = () => {
    return (
        <section id='home' className={`flex flex-col mx-14 md:flex-row ${styles.paddingY} `}>
            {/* animation */}
            <div className={`${styles.flexStart} flex-1 md:my-0 my-10 relative`} >
                <img className='w-full h-full z-10 rounded-md' src={Lambo} alt="lambo-png" />
                <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink_gradient'></div>
                <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 blue_gradient'></div>
                <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 white_gradient'></div>
            </div>

            {/* information */}
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                {/* discount information */}
                <div className='py-[6px] flex items-center justify-between px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient'>
                    <img src={discount} className="w-[25px] h-[25px]" alt="discount-icon" />
                    <p className={`${styles.paragraph} ml-2`} > <span className='text-white'>20%</span> скидка на счет на <span className='text-white'>1 месяц</span> </p>
                </div>

                {/* Title */}
                <div className='w-full'>
                    <h1 className={`${styles.heading}`}>Yangi avlod <br />
                        <span className=' text-white'>Super Car</span>
                    </h1>
                </div>

                {/* Description */}
                <p className={`${styles.paragraph} mt-5 max-w-[550px]`} >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto,
                    reprehenderit amet? Sit
                    eius maiores necessitatibus, reprehenderit sed adipisci ducimus corporis?
                </p>

                {/* Getting started button */}
                {/* <Button styles={'mt-2'}/> */}
            </div>
        </section>
    );
}

export default Home;
