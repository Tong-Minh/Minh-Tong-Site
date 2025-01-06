import React from 'react'

const introduction = (props) => {

    // mt-[140px] mb-[30px]
  return (
    <div className=' flex flex-col items-center absolute top-80 inset-0'>
        <div className=' font-yeseva text-8xl pb-5'>{props.pageName}</div>
        <div className=' font-nunito text-xl text-center max-w-[600px]'>{props.description}</div>
    </div>
  )
}

export default introduction