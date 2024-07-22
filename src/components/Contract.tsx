import { Card } from '../assets';
import { layout, styles } from '../utils/style';

const Contract = () => {
    return <section className={`${layout.section} flex-col-reverse`}>
        <div className={`${layout.sectionInfo}`}>
            <h2 className={`${styles.heading2}`}>Bir necha qadamda <br className='sm:block' />
                kontrakt imzola !
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`} >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam vitae similique distinctio temporibus expedita.
                Veritatis architecto voluptatum nam tempora cupiditate.
            </p>
        </div>
        <div className={`${layout.sectionImage}`}>
            <img src={Card} alt="card   " />
        </div>
    </section>
}

export default Contract;
