import React from 'react'
import { elementAdmin } from '@/constants/Index'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <div className='grid w-full h-[100vh] overflow-hidden bg-[#000000ea]' style={{ gridTemplateColumns : '11.8rem auto'}}>
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
            <div className='h-[36.3rem] p-4 px-3 overflow-y-scroll py-1 bg-white rounded-lg'>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque inventore earum tenetur quasi praesentium est necessitatibus libero ex! Sunt ducimus eaque, quis, sed quo molestias architecto sint dolor assumenda modi facilis beatae. Aut praesentium quasi, exercitationem laboriosam sit asperiores nisi ipsum mollitia nesciunt ex blanditiis? Placeat nisi expedita voluptates deleniti eum accusamus rerum illum iusto! Alias totam optio sit commodi nulla odio quas nesciunt vel, voluptates fuga libero velit architecto inventore ipsum autem provident quaerat! Maxime aperiam placeat reprehenderit maiores adipisci fuga, nisi quia doloremque quod eaque reiciendis mollitia provident doloribus. Amet quam rem in nisi, dicta, modi cum adipisci architecto quas expedita non reprehenderit alias ad tempore id voluptatem. Pariatur minus vero nihil, corporis voluptas iusto vitae ipsum iure! Dolorum, voluptatibus totam.</p>
            </div>
      </div>
    
</div>
  )
}
