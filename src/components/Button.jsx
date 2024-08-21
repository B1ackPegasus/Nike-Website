import React from 'react';

const Button = ({label, icon , backgroundColor , textColor, borderColor , fullwidth}) => {
    return (
        <button className={`button flex
         justify-center items-center gap-2
          px-7 py-4 border font-montserrat
          text-lg leading-none rounded-full 
          ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 
            'bg-coral-red text-white border-coral-red'}
            ${fullwidth && 'w-full'}`}
           >
            {label}
            {icon && <img src = {icon}
                 alt="arrow icon "
                 className = "ml-2 rounded-full
                 w-5 h-5"/>}
        </button>
    );
};

export default Button;