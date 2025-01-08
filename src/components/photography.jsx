import React, { useEffect } from 'react'
import IntroductionStill from "../components/introductionStill"
import arrowDown from '../assets/arrow-down-white.svg'
import Footer from "../components/footer.jsx"
import Projects from "../components/ProjectGrid/projects"

import { Link as ScrollLink, Element } from 'react-scroll'

const photography = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#101010';

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
        <div className=' flex flex-col items-center '>
            <div className=' h-[775px]'>
                <IntroductionStill 
                pageName="Photography"
                description="I do a little photography every now and then. Do I want to pay for Adobe Lightroom? No, no I don't. Do I? Sadly, yeah."
                />

                <ScrollLink to="project-section" smooth={true} duration={500} className=" flex flex-col items-center absolute top-[650px] inset-0">
                    <div className=' font-nunito text-white text-sm pb-3 px-1 cursor-pointer'>Photos</div>
                    <img src={arrowDown} className=" cursor-pointer px-5" alt="Down Arrow" />
                </ScrollLink>
            </div>

            <Footer />
        </div>
    </>
  )
}

export default photography