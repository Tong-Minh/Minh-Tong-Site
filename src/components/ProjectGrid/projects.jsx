import React from 'react'
import ProjectGridItem from './projectGridItem'
import { Link, Element } from 'react-scroll';
import globetrotter from './projectAssets/globetrotter.svg'
import culinarycards from './projectAssets/culinarycards.svg'
import goodblogger from './projectAssets/goodblogger.svg'
import olaf from './projectAssets/olafmessenger.svg'
import personal from './projectAssets/personal.svg'
import tcutz from './projectAssets/tcutz.svg'
import resume from './projectAssets/Minh Tong - 2025.pdf'

const projects = () => {
    return (
        <>
            <Element name="project-section" className=' font-yeseva text-5xl text-left z-50 lg:w-[912px] w-11/12  mb-10'>Projects</Element>
            <div className=' font-nunito grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 z-50 lg:w-[912px] w-11/12 text-left mb-16'>
                <ProjectGridItem 
                    name="Personal Site"
                    img={personal}
                    alt="Personal Site Logo/My Full Name"
                />
                <ProjectGridItem 
                    name="Globetrotters"
                    img={globetrotter}
                    alt="Globetrotter Logo"
                />
                <ProjectGridItem 
                    name="Culinary Cards"
                    img={culinarycards}
                    alt="Culinarycards Logo"
                />
                <ProjectGridItem 
                    name="The Good Blogger"
                    img={goodblogger}
                    alt="The Good Blogger Logo"
                />
                <ProjectGridItem 
                    name="St. Olaf Messenger"
                    img={olaf}
                    alt="The St. Olaf Messenger Logo"
                />
                <ProjectGridItem 
                    name="T-Cutz Hair Salon"
                    img={tcutz}
                    alt="The T-Cutz Asian Salon Logo"
                />
            </div>

            <a href={resume} className=' font-nunito mb-16 p-2 hover:underline cursor-pointer'>Here's my full resume &lt;3</a>
        </>
    )
}

export default projects