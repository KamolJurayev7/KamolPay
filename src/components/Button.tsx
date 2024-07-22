import { FC } from "react";

interface Props {
    styles?:string;
}

const Button:FC <Props> = ({ styles }):JSX.Element => {
    return (
        <button
            type='button'
            className={`py-3 px-6 font-montserrat  font-medium text-[18px] bg-[#5ce1e6] active:shadow-md active:shadow-teal-400 rounded-[10px] outline-none ${styles as string}`}
        >
            Started
        </button>
    )
}

export default Button;
