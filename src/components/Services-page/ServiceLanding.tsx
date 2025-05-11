import Image from 'next/image'
import React from 'react'
import { Button } from 'antd'

import shl1 from '@/assets/images/Service-page-image/shl1.svg'
import dec_s from '@/assets/icon/b3.svg'
import { useTranslations } from 'next-intl'
const ServiceLanding = () => {
    const t = useTranslations('Service-Landing')
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('title')}</h2>
                        <ul className="space-y-6 mb-6 grid grid-cols-1 lg:grid-cols-2 ">
                            <li className="flex items-start jus gap-3">
                                <div className='px-2 pt-4 mt-1 bg-white rounded-[5px]'></div>
                                <div>
                                    <p className="font-semibold">{t('min-title1')}</p>
                                    <p className="text-sm text-gray-300 lg:w-60  ">
                                        {t('min-desc1')}
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className='px-2 pt-4 mt-1 bg-white rounded-[5px]'></div>
                                <div>
                                    <p className="font-semibold">{t('min-title2')}</p>
                                    <p className="text-sm text-gray-300 lg:w-60">
                                        {t('min-desc2')}
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className='px-2 pt-4 mt-1 bg-white rounded-[5px]'></div>
                                <div>
                                    <p className="font-semibold">{t('min-title3')}</p>
                                    <p className="text-sm text-gray-300 lg:w-60">
                                        {t('min-desc3')}
                                    </p>
                                </div>
                            </li>
                        </ul>


                        <div className="text-sm text-gray-300 mb-4">
                            <p>{t('service-p')} <b>1 {t('ser-day')}</b></p>
                            <p>{t('service-p2')} <b>1</b> {t('service-p3')}</p>
                            <p>{t('service-p4')} <b>{t('service-b4')}</b></p>
                        </div>

                        <Button type='primary' color='geekblue' className="md:mt-10 hidden md:inline-flex glass text-white px-3 py-1">
                            {t('ser-btn')}
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

export default ServiceLanding