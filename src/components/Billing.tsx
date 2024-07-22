import { Apple, Bill, Google } from '../assets';
import { layout, styles } from '../utils/style';

const Billing = () => {
    return <section id='product' className={`${layout.sectionReverse} flex-col-reverse`}>
        <div className={`${layout.sectionImageReverse}`}>
            <img src={Bill} alt="bill" className='w-[100%] h-[100%] relative z-[5] ' />
        </div>
        <div className={`${layout.sectionInfo}`}>
            <h2 className={`${styles.heading2}`}>Hisob-kitob va fakturial <br className='sm:block hidden' />
            osongina boshqarish
            </h2>
            <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati laudantium voluptates facere impedit nisi? Iusto quo quae numquam voluptatibus cumque.
            </p>
            <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
                <img src={Google} alt="google-img" className='w-[129px] h-[42px] object-contain mr-5 cursor-pointer' />
                <img src={Apple} alt="google-img" className='w-[129px] h-[42px] object-contain mr-5 cursor-pointer' />
            </div>
        </div>
    </section>
}

export default Billing;
