import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className=' flex h-screen'> 
    
        
       <div className=' w-1/2 flex  flex-col justify-center  items-start '>
        <h1 className=' w-[496px] h-[189px] font-bold text-[40px] leading-[65.8px] tracking-[2.5%] pl-[176px]'>IMPECCABLE CRAFTSMANSHIP AND FINESSE


      </h1>
      <p className='w-[902px] h-[147px] pl-[171px] mt-10 text-[#787054] font-medium text-3xl leading-[49.35px] tracking-[2.5%]  
'>
              An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
         <div className= 'pl-[140px]  w-[288px] h-[58px] gap-10   '>
          <button className='w-[288px] h-[58px] mt-10 text-3xl leading-[37.5px] rounded-lg bg-[#A29875] text-[#FFFFFF] m-10  '>Explore Now</button>
          </div>
        </div>

        
         <div className=' w-1/2 flex justify-center items-center align-middle ' >
          <Image src={"/images/jewel.svg"} alt='next_image' width={462} height={647} className=''></Image>

        
        </div>

      
    </div>
  )
}

export default Hero
