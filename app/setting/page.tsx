import React from 'react'
import { elementAdmin } from '@/constants/Index'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <div className='grid w-full h-[100vh]  bg-[#000000ea]' style={{ gridTemplateColumns : '11.8rem auto'}}>
            <div className='overflow-hidden text-white'>
                <div className='mx-1 my-[6rem]'>
                   {elementAdmin.map((item,index) => (
                        <div key={index} className='flex items-center gap-[10px] m-4'>
                              <Image src={item.image} alt='logo' width={25} height={25}/>
                                    <Link href={`/${item.link.toLowerCase()}`}>
                                          <h2 className=' font-bold'>{item.name}</h2>
                                    </Link>
                        </div>      
                  ))}
                </div>

                <div className='  m-6 py-[3.5rem] cursor-pointer'>
                        <Link className='flex items-center gap-3' href='/'>
                              <Image src='/logout.png' alt='logo' width={25} height={25}/>
                              <h1 className=' font-bold'>Logout</h1>
                        </Link>   
                </div>
          </div>

      <div className='p-[3px]'>
            <div className='h-[36.3rem] overflow-y-scroll p-4 px-3 py-1 bg-white rounded-lg'>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloremque inventore earum tenetur quasi praesentium est 
                     </p>
            </div>
      </div>
    
</div>
  )
}
