'use client'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import b1 from '@/assets/icon/b3.svg'
import b2 from '@/assets/icon/b1.svg'
import b3 from '@/assets/icon/b2.svg'
import b4 from '@/assets/icon/b8.svg'
import b5 from '@/assets/icon/b4.svg'
import b6 from '@/assets/icon/b5.svg'
import b7 from '@/assets/icon/b6.svg'
import b8 from '@/assets/icon/b7.svg'
import b9 from '@/assets/icon/b9.svg'
import Image from 'next/image'

const MainServices = () => {
    const t = useTranslations('Main-Service')
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className='p-6 container mx-auto'>
            <div className='text-center text-white py-10'>
                <h1 className='font-bold text-3xl md:text-4xl'>{t('title')}</h1>
                <p className='text-sm md:text-base font-light'>{t('desc')}</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-white'>

                <div data-aos="fade-right" className='bg-[#bdabd61e] p-8 rounded-2xl hover:scale-105 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                    <div className='flex justify-center'>
                        <Image className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 duration-700' src={b1} alt="service" />
                    </div>
                    <h1 className='font-semibold text-2xl md:text-3xl pt-4'>{t('service-t1')}</h1>
                    <p className='font-light py-4 text-sm md:text-base'>
                        {t('service-d1')}
                    </p>
                </div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic" className='bg-[#bdabd61e] p-8 rounded-2xl hover:scale-105 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                    <div className='flex justify-center'>
                        <Image className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 duration-700' src={b2} alt="service" />
                    </div>
                    <h1 className='font-semibold text-2xl md:text-3xl pt-4'>{t('service-t2')}</h1>
                    <p className='font-light py-4 text-sm md:text-base'>
                        {t('service-d2')}
                    </p>
                </div>

                <div data-aos="fade-left" className='bg-[#bdabd61e] p-8 rounded-2xl hover:scale-105 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                    <div className='flex justify-center'>
                        <Image className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 duration-700' src={b3} alt="service" />
                    </div>
                    <h1 className='font-semibold text-2xl md:text-3xl pt-4'>{t('service-t3')}</h1>
                    <p className='font-light py-4 text-sm md:text-base'>
                        {t('service-d3')}
                    </p>
                </div>

                <div data-aos="fade-right" className='bg-[#bdabd61e] p-8 rounded-2xl hover:scale-105 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                    <div className='flex justify-center'>
                        <Image className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 duration-700' src={b4} alt="service" />
                    </div>
                    <h1 className='font-semibold text-2xl md:text-3xl pt-4'>{t('service-t4')}</h1>
                    <p className='font-light py-4 text-sm md:text-base'>
                        {t('service-d4')}
                    </p>
                </div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic" className='bg-[#bdabd61e] p-8 rounded-2xl hover:scale-105 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                    <div className='flex justify-center'>
                        <Image className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 duration-700' src={b5} alt="service" />
                    </div>
                    <h1 className='font-semibold text-2xl md:text-3xl pt-4'>{t('service-t5')}</h1>
                    <p className='font-light py-4 text-sm md:text-base'>
                        {t('service-d5')}
                    </p>
                </div>

                <div data-aos="fade-left" className='bg-[#bdabd61e] p-8 rounded-2xl hover:scale-105 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                    <div className='flex justify-center'>
                        <Image className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 duration-700' src={b6} alt="service" />
                    </div>
                    <h1 className='font-semibold text-2xl md:text-3xl pt-4'>{t('service-t6')}</h1>
                    <p className='font-light py-4 text-sm md:text-base'>
                        {t('service-d6')}
                    </p>
                </div>

                <div data-aos="fade-right" className='bg-[#bdabd61e] p-8 rounded-2xl hover:scale-105 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                    <div className='flex justify-center'>
                        <Image className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 duration-700' src={b7} alt="service" />
                    </div>
                    <h1 className='font-semibold text-2xl md:text-3xl pt-4'>{t('service-t7')}</h1>
                    <p className='font-light py-4 text-sm md:text-base'>
                        {t('service-d7')}
                    </p>
                </div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic" className='bg-[#bdabd61e] p-8 rounded-2xl hover:scale-105 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                    <div className='flex justify-center'>
                        <Image className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 duration-700' src={b8} alt="service" />
                    </div>
                    <h1 className='font-semibold text-2xl md:text-3xl pt-4'>{t('service-t8')}</h1>
                    <p className='font-light py-4 text-sm md:text-base'>
                        {t('service-d8')}
                    </p>
                </div>

                <div data-aos="fade-left" className='bg-[#bdabd61e] p-8 rounded-2xl hover:scale-105 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                    <div className='flex justify-center'>
                        <Image className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 duration-700' src={b9} alt="service" />
                    </div>
                    <h1 className='font-semibold text-2xl md:text-3xl pt-4'>{t('service-t9')}</h1>
                    <p className='font-light py-4 text-sm md:text-base'>
                        {t('service-d9')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainServices