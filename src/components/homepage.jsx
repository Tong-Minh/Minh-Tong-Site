import React from 'react'
import arrowDown from '../assets/arrow-down.svg'
import { Link, Element } from 'react-scroll'
import Introduction from "../components/introduction"
import Projects from "../components/ProjectGrid/projects"
import Footer from "../components/footer.jsx"

const homepage = () => {
    return (
    <>
        <div className=' flex flex-col items-center'>
            <div className=' h-[775px]'>
                <Introduction 
                pageName="Minh Tong"
                pageSecondName="ống"
                delete={3}
                description="Junior Web Designer & Software Developer, focusing on learning to create interesting, appealing, and accessible work."
                />

                <Link to="project-section" smooth={true} duration={500} className=" flex flex-col items-center absolute top-[650px] inset-0">
                    <div className=' font-nunito text-sm pb-3 px-1 cursor-pointer'>Portfolio</div>
                    <img src={arrowDown} className=" cursor-pointer px-5" alt="Down Arrow" />
                </Link>
            </div>

            <Projects />
            
            <Footer />
        </div>
    </>
    )
}

export default homepage