import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import PhotoItem from './photoItem'

const section = ({ name, desc, photos }) => {
    return (
        <>
            <div className=' font-yeseva text-white text-2xl text-left z-50 lg:w-[912px] w-11/12 mb-3'>{name}</div>
            <div className=' font-nunito text-white text-md text-left z-50 lg:w-[912px] w-11/12  mb-10'>{desc}</div>

            <PhotoProvider>
            <div className=' font-nunito grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 z-50 lg:w-[912px] w-11/12 text-left mb-32'>
                {photos.map(({ img, alt, isVertical }, index) => (
                    <PhotoItem key={index} img={img} alt={alt} isVertical={isVertical} />
                ))}
            </div>
            </PhotoProvider>
        </>
    )
}

export default section