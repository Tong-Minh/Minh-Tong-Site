import React from 'react'
import ProjectGridItem from './projectGridItem'

const projects = () => {
    return (
        <>
            <div className=' font-yeseva text-5xl text-left z-50 lg:w-[912px] w-11/12  mb-8'>Projects</div>
            <div className=' font-nunito grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 z-50 lg:w-[912px] w-11/12 text-left'>
                <ProjectGridItem 
                    name="Globetrotters"
                />
                <ProjectGridItem 
                    name="Culinary Cards"
                />
                <ProjectGridItem 
                    name="The Good Blogger"
                />
                <ProjectGridItem 
                    name="T-Cutz Hair Salon"
                />
            </div>
        </>
        // lg:w-9/12 md:w-10/12 w-11/12
    )
}

export default projects