import React from 'react'
import { Link, Element } from 'react-scroll';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Section from './section'
import PhotoItem from './photoItem'

//import your fav photos only
import boat from "./photoAssets/california/boat.JPG"
import jellyfish from './photoAssets/california/jellyfish.JPG';
import rocks from './photoAssets/california/rocks.JPG';
import seagull from './photoAssets/california/seagull.JPG';

const photos1 = [
  { img: boat, alt: 'Boat', isVertical: false },
  { img: jellyfish, alt: 'Jellyfish', isVertical: true },
  { img: rocks, alt: 'Rocks', isVertical: false },
  { img: seagull, alt: 'Seagull', isVertical: false },
];

import hongdae from './photoAssets/korea/hongdae.jpg'
import lize from './photoAssets/korea/lizeandcocoa.jpg'
import moped from './photoAssets/korea/moped.jpg'
import nighthongdae from './photoAssets/korea/nighthongdae.jpg'
import streetlights from './photoAssets/korea/streetlights.jpg'

const photos2 = [
  { img: hongdae, alt: 'Hongdae Couple', isVertical: true },
  { img: lize, alt: 'Lize and Cocoa Store', isVertical: true },
  { img: moped, alt: 'Moped on the Street', isVertical: true },
  { img: nighthongdae, alt: 'Night in Hongdae', isVertical: true },
  { img: streetlights, alt: 'Streetlights of Hongdae', isVertical: true },
];

const photos = () => {
  return (
    <>
            <Element name="project-section" className=' font-yeseva text-white text-5xl text-left z-50 lg:w-[912px] w-11/12 mb-10'>Photos</Element>

            <Section 
              name="San Francisco, California"
              desc="A short little trip I took to California my freshman year to visit my friend who lives in San Ramon. Our friends from San Diego and LA also met us there."
              photos={photos1}
            />

            <Section 
              name="Seoul, Korea"
              desc="Funny story, my sister told me when I started high school that if I graduated with a 4.0, she'd take me anywhere in the world. This was the result of that. <3"
              photos={photos2}
            />

            {/* <a href={resume} className=' font-nunito mb-16 p-2 hover:underline cursor-pointer'>Here's my full resume &lt;3</a> */}
    </>
  )
}

export default photos