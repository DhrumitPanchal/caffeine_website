import React from 'react'


const Itemcard = (props) => {
  
  return (
<>
{

props.items.map((e)=>(

<div className='flex flex-col border-[.2rem] border-[#1b1107] max-sm:snap-center snap-none'>
      <div className='relative flex flex-col justify-center items-center max-sm:h-[35rem] max-sm:w-[37rem] h-[25rem] w-[25rem]'>
        <div className='h-1/2 w-full bg-[#1b1107]'></div>
        <div className='h-1/2 w-full'></div>
        <div className='absolute max-sm:h-[25rem] max-sm:w-[25rem] max-sm:border-[.8rem] h-[20rem] w-[20rem] border-[.5rem] border-[#ddb288]'>
         <img className='h-full w-full ' src="/images/090075367644bec822aed80f8156cb43.jpg" alt="" />
        </div>
      </div>
      <h2 className="text-[#1b1107] font-fonts max-sm:text-[4.5rem] max-sm:leading-[5rem] text-center text-[3rem] leading-[3rem]" >Coffee Heaven {props.cardid}</h2>
      <div className='w-full py-[1rem] max-sm:text-[2.5rem] max-sm:mt-[3rem] text-center mt-[2rem] bg-[#c5ad8c] text-[2rem] text-[#1b1107] border-t-[.2rem] border-[#1b1107] cursor-pointer '>Order Now</div>
    </div>
))
}

</>
  )
}

export default Itemcard
