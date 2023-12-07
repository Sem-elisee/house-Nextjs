import React from 'react'
import { elementAdmin } from '@/constants/Index'
import Image from 'next/image'
import Link from 'next/link'
// import { Input } from '@/Components/ui/input'
import {
      Table,
      TableBody,
      TableCaption,
      TableCell,
      TableFooter,
      TableHead,
      TableHeader,
      TableRow,
    } from "@/Components/ui/table"

import { ChevronDown,
         FilePlus,
         Search,
         FileEdit,
         Trash2
      } from 'lucide-react'

export default function page() {
      const invoices = [
            {
              invoice: "INV001",
              name : 'Sem',
              email: 'Sem@gmail.com',
              adresse: 'Cocody angre',
              date: '10/22/33',
              phone: '25-38-48-37-48',
            },
            {
              invoice: "INV002",
              name : 'Olive',
              email: 'Olive@gmail.com',
              adresse: 'Yopougnon',
              date: '11/10/33',
              phone: '25-38-48-37-48',
            },
            {
              invoice: "INV003",
              name : 'Bando',
              email: 'Bando@gmail.com',
              adresse: 'Macory  Remblais',
              date: '15/10/11',
              phone: '25-38-48-37-48',
            },
            {
              invoice: "INV004",
              name : 'Paul',
              email: 'Paul@gmail.com',
              adresse: 'Montreal',
              date: '19/11/12',
              phone: '25-38-48-37-48',
            },
            {
              invoice: "INV005",
              name : 'Paul',
              email: 'Paul@gmail.com',
              adresse: 'Montreal',
              date: '19/11/12',
              phone: '25-38-48-37-48',
            },
            {
              invoice: "INV006",
              name : 'Paul',
              email: 'Paul@gmail.com',
              adresse: 'Montreal',
              date: '19/11/12',
              phone: '25-38-48-37-48',
            },
            {
              invoice: "INV007",
              name : 'Paul',
              email: 'Paul@gmail.com',
              adresse: 'Montreal',
              date: '19/11/12',
              phone: '25-38-48-37-48',
            },
            {
              invoice: "INV008",
              name : 'Paul',
              email: 'Paul@gmail.com',
              adresse: 'Montreal',
              date: '19/11/12',
              phone: '25-38-48-37-48',
            },
            {
              invoice: "INV009",
              name : 'Paul',
              email: 'Paul@gmail.com',
              adresse: 'Montreal',
              date: '19/11/12',
              phone: '25-38-48-37-48',
            },
          ]

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

              <div className=' m-6 py-[3.5rem] cursor-pointer'>
                      <Link className='flex items-center gap-3' href='/'>
                            <Image src='/logout.png' alt='logo' width={25} height={25}/>
                            <h1 className=' font-bold'>Logout</h1>
                      </Link>   
              </div>
      </div>

      <div className='p-[3px]'>
            <div className='h-[36.3rem]  bg-white rounded-lg'>
              {/* p-4 px-3 py-1 */}
                  {/* <div className=""></div> */}
                  <div className='lg:px-8 lg:py-4 flex justify-between '>
                  {/* bg-zinc-300 */}
                        {/* <Image src='/fenisha (2).png' width={100} height={100} alt='' className=' w-[100px] h-[40px]'/> */}
                        <div className='flex gap-3'>
                              <Image src='/user1.jpg' width={100} height={100} alt='' className=' rounded-full w-[40px] h-[40px] cursor-pointer'/>
                              <div>
                                    <p className=' font-bold text-[13px]'>Paul Joseph</p>
                                    <p className='text-[13px]'>Paul@gmail.com</p>
                              </div>
                              <ChevronDown className='relative top-2 right-1 cursor-pointer'/>
                        </div>    
                  </div>
                  <div className='px-7 py-8 flex justify-between '>
                        <div className='gap-[2rem] flex items-center'>
                              <h1 className='text-[1.7rem] font-bold'>Customer's List</h1>
                              <div>
                                    <div className='relative border-2 rounded-xl w-[200px]  border-black px-3 py-1  items-center flex gap-2'>
                                    {/* */}
                                          <button>
                                                <Search className=''/>
                                          </button>
                                          
                                          <input type="text" 
                                          placeholder='Search'
                                          className=' outline-none w-[145px]'
                                          />
                                    </div>
                              </div>
                        </div>

                        <div className='bg-black text-white items-center px-4 py-3 text-sm cursor-pointer'>
                              <button className='flex gap-2 '><FilePlus /> Add Customer</button>
                        </div>
                  </div>

                  <div className='px-5'>
                        <div className='bg-white border-[2px] w-full h-[380px] rounded-lg overflow-y-scroll'>
                              <Table>
                                    <TableHeader className='bg-black h-[60px]'>
                                          <TableRow>
                                                <TableHead className="w-[100px]">ID Customer</TableHead>
                                                <TableHead className="w-[100px]">Name</TableHead>
                                                <TableHead className="w-[100px]">Email</TableHead>
                                                <TableHead className="w-[100px]">Adresse</TableHead>
                                                <TableHead className="w-[100px]">Date</TableHead>
                                                <TableHead className="w-[100px]">Phone</TableHead>
                                                <TableHead className="w-[100px]">Action</TableHead>
                                          </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                    {invoices.map((invoice,key) => (
                                    <TableRow key={key} className='even:bg-[#dddddd84] items-center justify-center'>
                                          <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                          <TableCell>{invoice.name}</TableCell>
                                          <TableCell>{invoice.email}</TableCell>
                                          <TableCell>{invoice.adresse}</TableCell>
                                          <TableCell>{invoice.date}</TableCell>
                                          <TableCell>{invoice.phone}</TableCell>
                                          <TableCell className='flex gap-4 relative top-2'>
                                                <div className='cursor-pointer text-blue-500  rounded-full'>
                                                      <FileEdit className='w-[20px] h-[20px]'/> 
                                                </div>
                                                <div className='cursor-pointer text-red-500 rounded-full'>
                                                      <Trash2 className='w-[20px] h-[20px]'/>
                                                </div>
                                          </TableCell>
                                    </TableRow>
                                     ))} 
                                    </TableBody>
                                    {/* <TableFooter>
                                    <TableRow>
                                    <TableCell colSpan={3}>Total</TableCell>
                                    <TableCell className="text-right">$2,500.00</TableCell>
                                    </TableRow>
                                    </TableFooter> */}
                  </Table>
                        </div>
                  </div>
                    {/* <h1 className='font-bold text-2xl'>Clients</h1> */}
                       
                        {/* <Search /> */}
                    {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque inventore earum tenetur quasi praesentium est necessitatibus libero ex! Sunt ducimus eaque, quis, sed quo molestias architecto sint dolor assumenda modi facilis beatae. Aut praesentium quasi, exercitationem laboriosam sit asperiores nisi ipsum mollitia nesciunt ex blanditiis? Placeat nisi expedita voluptates deleniti eum accusamus rerum illum iusto! Alias totam optio sit commodi nulla odio quas nesciunt vel, voluptates fuga libero velit architecto inventore ipsum autem provident quaerat! Maxime aperiam placeat reprehenderit maiores adipisci fuga, nisi quia doloremque quod eaque reiciendis mollitia provident doloribus. Amet quam rem in nisi, dicta, modi cum adipisci architecto quas expedita non reprehenderit alias ad tempore id voluptatem. Pariatur minus vero nihil, corporis voluptas iusto vitae ipsum iure! Dolorum, voluptatibus totam.</p> */}
              </div>
        </div>
</div>
  )
}
