import { Button } from 'antd'
import Image from 'next/image'
import React from 'react'

import shl1 from '@/assets/images/Service-page-image/shl1.svg'
import dec_s from '@/assets/icon/b2.svg'

const ServiceEcom = () => {
    return (
        <div className=''>
            <section className="container mx-auto py-10 px-5 md:px-16 text-white">
                <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row bg-[#2B2343]/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/10">
                    <div className='absolute -bottom-6 right-120 text-[#ffffff09]'>
                        <Image
                            src={dec_s}
                            alt='icon_file'
                            width={100}
                            className=''
                        />
                    </div>
                    <div className="w-full md:w-2/3 p-8 md:p-10 inter">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">eCommerce Sahifalari</h2>
                        <ul className="space-y-6 mb-6 grid grid-cols-1 lg:grid-cols-2 ">
                            <li className="flex items-start jus gap-3">
                                <div className='px-2 pt-4 mt-1 bg-white rounded-[5px]'></div>
                                <div>
                                    <p className="font-semibold">Onlayn sotish</p>
                                    <p className="text-sm text-gray-300 lg:w-60  ">
                                        Mijozlarga tovarlarni to&apos;g&apos;ridan-to&apos;g&apos;ri onlayn sotib olish imkoniyatini beradi.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className='px-2 pt-4 mt-1 bg-white rounded-[5px]'></div>
                                <div>
                                    <p className="font-semibold">Xavfsiz to&#39;lov</p>
                                    <p className="text-sm text-gray-300 lg:w-60">
                                        Turli xil xavfsiz to&apos;lov usullarini qo&apos;llab-quvvatlaydi.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className='px-2 pt-4 mt-1 bg-white rounded-[5px]'></div>
                                <div>
                                    <p className="font-semibold">Yetkazib berish</p>
                                    <p className="text-sm text-gray-300 lg:w-60">
                                        Mijozlarga buyurtmalarni tez va qulay tarzda yetkazib berish xizmatini taqdim etadi
                                    </p>
                                </div>
                            </li>
                        </ul>


                        <div className="text-sm text-gray-300 mb-4">
                            <p>Texnik vazifa tayyorlab berish: <b>3-4 kun</b></p>
                            <p>Sayt sahifalar soni: har bir sahifa minimum 5 ta qismdan iborat bo&apos;ladi.</p>
                            <p>Veb Dizayn: <b>7-10 kun mehnat. Narxi: $200-300</b></p>
                        </div>

                        <Button type='primary' color='geekblue' className="md:mt-10 hidden md:inline-flex glass text-white px-3 py-1">
                            Buyurtma berish
                        </Button>
                    </div>
                    <div className="w-full md:w-1/3 object-cover flex items-center justify-center bg-white/5">
                        <Image
                            src={shl1}
                            alt="landig image"
                            className="rounded-[0px_12px_12px_0px] shadow-lg object-contain max-h-[550px] scale-105"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServiceEcom