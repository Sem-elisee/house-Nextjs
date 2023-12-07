"use client"

import { ElementPay } from '@/constants/Index';
import React from 'react'
import Image from 'next/image'
import { Trending } from '@/constants/Index';
import Link from 'next/link';


export default function Body() {
  return (
    <div>
        <div className='min-[326px]: m-4 min-[326px]:p-2 md:flex md:gap-8 items-center justify-center lg:p-10'>
                  {ElementPay.map((item, key) => (
                  <div key={key} className='border-2 border-[#0000002b] min-[326px]:mt-4 items-center flex min-[326px]:gap-4 min-[326px]:px-3 min-[326px]:py-4 lg:px-8 lg:w-[320px]'>
                    <div className='min-[326px]:gap-2'>
                        <Image  src={item.icon} alt='' width={33} height={33} className=' text-2xl text-neutral-700' />     
                    </div>
                        
                      <div>
                          <h1 className=' font-bold text-[.9rem]'>{item.title}</ h1>
                            <p className=' text-gray-400'>{item.desc}</ p>
                            <p className=' text-gray-400'>{item.desc1}</ p>
                      </div>
                  </div>    
                    ))}
            </div>

        <div className=' sm:px-5 lg:flex items-center md: justify-center lg:p-[-7rem] bg-[#d2d2d24c] '> 
        {/* bg-[#e0dfdf9a]    */}
             <Image src='/shopping (3).png' width={500} height={100} alt='image'/>

             <div className=' sm: px-14 py-7'>
                <h1 className=' text-3xl font-bold'>
                    SUPER <span className='text-red-800 font-normal text-[22px]'>SAVINGS</span>
                </h1>
                <div>
                    <p className=' text-red-800 text-lg'>sale Up to 40 % off 12 months Financing</p>
                    Create a room that's welcoming with a sofa or a sectional coush <br />
                    To help you go extra main confort and style
                </div>
                <Link href='/store'>
                    <button className=' bg-black py-3 px-8 text-white mt-4 hover:bg-white hover: border-[4px] hover: hover:  border-black hover:text-black hover:rounded-lg hover: font-bold hover:bg-transparent'>Shop Now</button>
                </Link>
             </div>
        </div>  

        <div className='min-[326px]:p-8 sm:p-8 md:flex  justify-center lg:py-[4rem]'>
        {/* py-20 flex justify-center overflow-hidden sm:flex-col */}
        {/* m-auto max-w-5xl overflow-hidden */}
                <Image src='/black.png' width={750} height={180} alt='black friday' className='lg:h-[390px] '/>

                <div className=' bg-[#000000e3] text-white lg:w-[350px] lg:h-[390px] overflow-hidden px-16 py-8'>
                    <div className='w-[80px] h-[2px] bg-white'></div>

                    <div className=' text-3xl py-4'>
                        <h1>The Black</h1>
                        <h1>Friday sale</h1>
                    </div>

                    <div className='py-[-2px]'>
                        <p>Enjoy up to 45% off</p>
                        <p>selected luxury furniture</p>
                        <p>accessories and lighting</p>
                        <p>from the world's leading</p>
                        <p>design brands</p>
                    </div>  

                    <div className='py-6'>
                        <button className='bg-white text-black p-2 py-3  px-[19px] font-semibold hover:rounded-sm'>SHOP BLACK FRIDAY</button>
                    </div>
                    </div>
          
                </div>
                            
        <div className=''>
            <div className=' flex text-center justify-center items-center min-[326px]:p-10 lg:py-20'>
                <div className=" border-[1.7px] min-[326px]:w-[5rem] min-[520px]:w-[8rem] md:w-[15rem] lg:w-[25rem] mx-3"></div>
                <h1 className=' min-[520px]: text-lg text-center md:text-2xl font-bold '>Deal of day</h1>
                <div className=" border-[1.7px]  min-[326px]:w-[5rem] min-[520px]:w-[8rem] md:w-[15rem]  lg:w-[25rem] mx-3"></div>
            </div>     
        </div>
        
        <div className=' min-[326px]:px-32 items-center justify-center py-[2rem] sm:grid sm:grid-cols-2 sm:items-center sm:justify-center sm:gap-8 lg:flex lg:gap-16 relative top-[-60px]' > 
                  {Trending.map((item,key) => (
                      <div className='' key={key} >
                          <div className='bg-[#d2d2d24c] min-[326px]:w-[12rem] min-[326px]:h-[12rem] min-[326px]:px-8 min-[326px]:py-8 min-[326px]:mt-10'>
                              <Image src={item.image} alt='err' width={125} height={125}/>
                          </div>
                       
                            <div>
                                <p className=' font-bold'>{item.name}</p>
                            </div>
                            <div className='flex gap-8'>
                                <p className=' font-semibold'>{item.price}</p>
                                <s className=' text-red-500'>{item.newPrice}</s>
                            </div>
                      </div>
                    ))}
        </div>
    </div>
  )
}


         {/* m-auto max-w-5xl overflow-hidden */}


