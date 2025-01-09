import React, { useEffect } from 'react'
import IntroductionStill from "../components/introductionStill"
import arrowDown from '../assets/arrow-down-white.svg'
import Footer from "../components/footer.jsx"
import Projects from "../components/ProjectGrid/projects"
import Photos from "./PhotosGrid/photos.jsx"

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
                description="I do a little photography every now and then. I'm definitely still learning, but hey, I still like how these came out so I still wanted to share them with you."
                />

                <ScrollLink to="project-section" smooth={true} duration={500} className=" flex flex-col items-center absolute top-[650px] inset-0">
                    <div className=' font-nunito text-white text-sm pb-3 px-1 cursor-pointer'>Take a look</div>
                    <img src={arrowDown} className=" cursor-pointer px-5" alt="Down Arrow" />
                </ScrollLink>
            </div>

            <Photos />
            <Footer />
        </div>
    </>
  )
}

export default photography