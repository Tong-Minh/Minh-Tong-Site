import React from 'react'

const footer = () => {
    return (
    <>
        <div className=' font-nunito bg-[#101010] w-screen grid lg:grid-cols-9 grid-cols-1 text-left pt-12 px-10'>
            <div className=' mb-10 text-white lg:col-start-2 lg:col-span-1 grid-cols-1 flex flex-col'>
                <a className=' mb-8'>Follow Me:</a>
                <a href="https://www.Linkedin.com/in/MinhHTong" target="_blank" className=' mb-1 hover:text-amber-400'>→ LinkedIn</a>
                <a href="https://www.instagram.com/minh_tong/?hl=en" target="_blank" className=' mb-1 hover:text-amber-400'>→ Instagram</a>
                <a href="mailto:minhtong972@email.com" target="_blank" className=' mb-1 hover:text-amber-400'>→ Email</a>
            </div>
            <div className=' mb-10 text-white lg:col-start-3 lg:col-span-3 grid-cols-1 flex flex-col'>
                <div className=' mb-8'>Unmentioned Skills:</div>
                <div className=' mb-1 flex flex-row'>
                    <div>Taking blurry photos:</div>
                    <div className=' text-gray-300 pl-2'>Expert</div>
                </div>
                <div className=' mb-1 flex flex-row'>
                    <div>Burning Food:</div>
                    <div className=' text-gray-300 pl-2'>Intermediate</div>
                </div>
                <div className=' mb-1 flex flex-row'>
                    <div>Learning Frameworks:</div>
                    <div className=' text-gray-300 pl-2'>Improving</div>
                </div>
            </div>
            <div className=' mb-32 text-amber-400 lg:col-start-6 lg:col-span-3 grid-cols-1'>
                <div className=' mb-8'>I'm getting better at bringing my ideas to life.</div>
            </div>
        </div>
    </>
    )
}

export default footer