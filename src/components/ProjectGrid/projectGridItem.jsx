import React from 'react'
// import globetrotter from './projectAssets/globetrotter.svg'

const projectGridItem = (props) => {
    return (
    <>
        <div className=''>
            <div className=' w-full h-72 border-2 border-stone-800 flex justify-center'>
                <img className=' h-full' src={props.img} alt={props.alt} />
            </div>
            <div className=' font-nunito mt-1'>{props.name}</div>
            <div></div>
        </div>
    </>
    )
}

export default projectGridItem