'use client'

import React from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,  
  FormMessage,
} from "@/Components/ui/form"

import { Input } from "@/Components/ui/input"
import { useForm } from 'react-hook-form'
import { Button } from '@/Components/ui/button'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"


export default function page() {

  const formaShema = z.object({
    email : z.string().min(1, 'Email is required').email('invalid email'),
    password : z.string().min(1,'password is required').min(8,'password must have than 8 characters')
  })

     const form = useForm<z.infer<typeof formaShema>>({
        resolver : zodResolver(formaShema)
    })

  const onSubmit = (value : z.infer<typeof formaShema>) => {
    // value:z.infer<typeof formaShema>
    console.log(value);
  }

  return (
    <div className=' bg-cover bg-center  flex h-screen items-center justify-center flex-col' style={{ backgroundImage: "url('/blob.svg') " }}>
        <div style={{boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} className='px-10 py-10 rounded-2xl'>
        <h1 className='text-3xl font-bold text-center'>Admin Login</h1>
        <div className='my-10'>
          <Form {...form}>            
                <form action=""  onSubmit={form.handleSubmit(onSubmit)}>
                    <div>
                    <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel> </FormLabel>
                              <FormControl className='w-[18rem] h-[3rem] '>
                                <Input placeholder="mail@example.com" {...field} />
                              </FormControl >
                              {/* <FormDescription>
                                This is your public display name.
                              </FormDescription> */}
                              <FormMessage />
                            </FormItem>
                          )}
                      />
                    </div>
                
                    <div className='my-4'>
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel> </FormLabel>
                                <FormControl className=" w-[18rem] h-[3rem] ">
                                  <Input placeholder="password" {...field} type='password' />
                                </FormControl>
                                {/* <FormDescription>
                                  This is your public display name.
                                </FormDescription> */}
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                    </div>
              
                <Button type="submit" className="my-3 w-[18rem] h-[3rem] ">Connexion</Button>
              </form>
            </Form>
        </div>
        </div>
    </div>
  )
}
