import React, { useRef } from 'react';

const introductionStill = (props) => {

    const name = props.pageName;
    
    return (
        <div className=' flex flex-col text-white items-center absolute top-80 inset-0'>
            <div className=' font-yeseva lg:text-8xl md:text-7xl text-6xl pb-5'>
                {name}
            </div>
            <div className=' font-nunito text-xl text-center lg:max-w-[600px] md:max-w-[400px] max-w-[350px]'>{props.description}</div>
        </div>
    )
}

export default introductionStill