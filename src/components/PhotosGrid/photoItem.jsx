import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const photoItem = (props) => {
    const isVertical = props.isVertical;

    return (
        <PhotoView src={props.img}>
            <div className={isVertical ? 'row-span-2 bg-[#e2e2e2] p-4 rounded-sm h-full' : 'bg-[#e2e2e2] p-4 rounded-sm h-full'}>
                <img src={props.img} alt={props.alt} className="w-full h-full object-cover rounded-sm shadow-inner" />
            </div>
        </PhotoView>
    )
}

export default photoItem