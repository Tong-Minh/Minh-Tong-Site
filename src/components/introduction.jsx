import React, { useRef } from 'react';
import Typewriter from "typewriter-effect";

const introduction = (props) => {

    const name = props.pageName;
    const secondName = props.pageSecondName;
    const typewriterRef = useRef(null);
    const num = props.delete;

    function hideCursor() {
        if (typewriterRef.current) {
            const cursorElement = typewriterRef.current.querySelector('.Typewriter__cursor');
            if (cursorElement) {
                setTimeout(function() {
                    cursorElement.classList.add('hidden-cursor');
                }, 1000);
            }
        }
    }
    
    return (
        <div className=' flex flex-col items-center absolute top-80 inset-0'>
            <div ref={typewriterRef} className=' font-yeseva lg:text-8xl md:text-7xl text-6xl pb-5'>
                <Typewriter
                        
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(name)
                                .pauseFor(2000)
                                .deleteChars(num)
                                .typeString(secondName)
                                .callFunction(() => hideCursor())
                                .start();
                        }}
                />
            </div>
            <div className=' font-nunito text-xl text-center lg:max-w-[600px] md:max-w-[400px] max-w-[350px]'>{props.description}</div>
        </div>
    )
}

export default introduction