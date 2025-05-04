import { Button } from 'antd'
import Image from 'next/image'
import React from 'react'

import user from '@/assets/images/A2.png'

const Footer = () => {
    return (
        <div className='bg-[#0E041D] '>
            <div className='container mx-auto  px-2 py-10'>
                <div className='text-xl lg:text-4xl text-center text-white py-10'>
                    <h1 className='font-bold'>Biz bilan aloqa</h1>
                    <p className='text-base font-light'>Loyihangizni qanday realizatsiya qilish haqida batafsil suhbatlashamiz</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-white py-10 pt-16">
                    <div className="col-span-2 bg-[#ebe6e609] p-4 rounded-xl">
                        <h1 className='font-semibold text-2xl pb-4'>Bizning jamoa haqida</h1>
                        <div className='grid grid-cols-3 gap-6'>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
                                    return (
                                        <div key={index}
                                            className='grid grid-cols-1 lg:grid-cols-3 gap-2 cursor-pointer bg-[#e6d1d11e] p-2 rounded-xl hover:scale-102 duration-500 hover:shadow-[0_0_8px] hover:shadow-[#b6a5f1cb]'>
                                            <div className='col-span-1'>
                                                <Image
                                                    src={user}
                                                    className='rounded-lg h-full object-cover'
                                                    alt="user"
                                                />
                                            </div>
                                            <div className='col-span-2'>
                                                <h1 className='text-lg font-medium'>Xusanov <br /> Alibek</h1>
                                                <p className='text-sm'>Developer</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 col-span-1 bg-[#ebe6e609] py-4 px-8 rounded-xl text-center">
                        <div className='grid grid-cols-1 gap-2'>
                            <h1 className='font-semibold text-2xl'>Landing sahifalar</h1>
                            <p className='font-light text-base'>Qisqa, ta&apos;sirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun mo&apos;ljallangan.
                            </p>
                        </div>
                        <div className='flex flex-wrap gap-4 justify-center'>
                            <input type="text" className='w-full px-3 outline-0 py-1 bg-[#fcf2f213] rounded-xl' placeholder='Ismingiz:' />
                            <input type="tel" className='w-full px-3 outline-0 py-1 bg-[#fcf2f213] rounded-xl' placeholder='Telefon raqamingiz' />
                        </div>
                        <div>
                            <Button type='primary' color='geekblue' variant='solid'>Jo&apos;natish</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer