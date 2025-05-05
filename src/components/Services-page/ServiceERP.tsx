import Image from 'next/image'
import React from 'react'
import { Button } from 'antd'

import shl1 from '@/assets/images/Service-page-image/shl1.svg'
import dec_s from '@/assets/icon/b7.svg'

const ServiceERP = () => {
    return (
        <div className=''>
            <section className="container mx-auto py-10 px-5 md:px-16 text-white">
                <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row bg-[#2B2343]/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/10">
                    <div className='absolute -bottom-8 right-120 text-[#ffffff09]'>
                        <Image
                            src={dec_s}
                            alt='icon_file'
                            width={100}
                            className=''
                        />
                    </div>
                    <div className="w-full md:w-2/3 p-8 md:p-10 inter">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">ERP sahifalari</h2>
                        <ul className="space-y-6 mb-6 grid grid-cols-1 lg:grid-cols-2 ">
                            <li className="flex items-start jus gap-3">
                                <div className='px-2 pt-4 mt-1 bg-white rounded-[5px]'></div>
                                <div>
                                    <p className="font-semibold">Butun Korxona Integratsiyasi</p>
                                    <p className="text-sm text-gray-300 lg:w-60  ">
                                        Turli bo&#39;limlarni birlashtirib, ma&#39;lumot almashinuvini optimallashtiradi.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className='px-2 pt-4 mt-1 bg-white rounded-[5px]'></div>
                                <div>
                                    <p className="font-semibold">Avtomatlashtirish</p>
                                    <p className="text-sm text-gray-300 lg:w-60">
                                    Ko&#39;pgina jarayonlarni avtomatlashtirib, vaqt va resurslarni tejaydi.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className='px-2 pt-4 mt-1 bg-white rounded-[5px]'></div>
                                <div>
                                    <p className="font-semibold">Tahlil va xabarnoma</p>
                                    <p className="text-sm text-gray-300 lg:w-60">
                                    Korxona faoliyatini tahlil qilish va muhim xabarnomalarni olish imkonini beradi.
                                    </p>
                                </div>
                            </li>
                        </ul>


                        <div className="text-sm text-gray-300 mb-4">
                            <p>Texnik vazifa tayyorlab berish: <b>5-10 kun</b></p>
                            <p>Sayt sahifalar soni: <b>10 yoki undan yuqori</b></p>
                            <p>Veb Dizayn: <b>7-10 kun mehnat. Narxi: $300-500</b></p>
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

export default ServiceERP