import React from 'react';


type ButtonProps = {
    bodytext : string;
};

const ButtonWriter = ({bodytext} : ButtonProps) => {
    return (
        <div>
            <button className='bg-poimandres-body-text text-poimandres-body-text-2 rounded p-2'>Click me!</button>
        </div>
    )
};
export default ButtonWriter;