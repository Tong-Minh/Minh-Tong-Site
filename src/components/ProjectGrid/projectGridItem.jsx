import React from 'react'

const projectGridItem = (props) => {
    return (
    <>
        <div className=''>
            <div className=' w-full h-72 border-2 border-stone-800'>
                <img></img>
            </div>
            <div className=' font-nunito mt-1'>{props.name}</div>
            <div></div>
        </div>
    </>
    )
}

export default projectGridItem