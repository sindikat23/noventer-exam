import { Button } from "antd"
import Image from "next/image"

import w1 from '@/assets/images/W1.png'
import w2 from '@/assets/images/W2.png'
import w3 from '@/assets/images/W3.png'
import { useTranslations } from "next-intl"

const MainProjects = () => {
        const t = useTranslations('Main-Project')
    return (
        <div className="container mx-auto inter px-4">
            <div className='py-10'>
                <div className='text-center text-white py-10'>
                    <h1 className='text-3xl md:text-4xl font-bold py-2'>{t('title')}</h1>
                    <p className='text-base md:text-lg'>{t('description')}</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 py-8'>
                    <div className='rounded-2xl overflow-hidden hover:scale-105 transition duration-700 hover:shadow-[0_0_20px] hover:shadow-blue-900 cursor-pointer'>
                        <Image className='w-full h-auto object-cover' src={w1} alt="Tourmad" />
                    </div>
                    <div className='flex flex-col gap-4 justify-center text-white lg:items-start lg:text-left'>
                        <h1 className='text-xl md:text-2xl font-semibold'>{t('project-t1')}</h1>
                        <p className='text-sm md:text-base leading-relaxed'>
                        {t('project-d1')}
                        </p>
                        <Button type='primary' size='large'>{t('project-btn')}</Button>
                    </div>
                    <div className='flex flex-col gap-4 justify-center text-white lg:items-end lg:text-right'>
                        <h1 className='text-xl md:text-2xl font-semibold'>{t('project-t2')}</h1>
                        <p className='text-sm md:text-base leading-relaxed'>
                        {t('project-d2')}
                        </p>
                        <Button type='primary' size='large'>{t('project-btn')}</Button>
                    </div>
                    <div className='rounded-2xl overflow-hidden hover:scale-105 transition duration-700 hover:shadow-[0_0_20px] hover:shadow-blue-900 cursor-pointer'>
                        <Image className='w-full h-auto object-cover' src={w2} alt="ProRun" />
                    </div>

                    <div className='rounded-2xl overflow-hidden hover:scale-105 transition duration-700 hover:shadow-[0_0_20px] hover:shadow-blue-900 cursor-pointer'>
                        <Image className='w-full h-auto object-cover' src={w3} alt="Xalq Trans" />
                    </div>
                    <div className='flex flex-col gap-4 justify-center text-white lg:items-start lg:text-left'>
                        <h1 className='text-xl md:text-2xl font-semibold'>{t('project-t3')}</h1>
                        <p className='text-sm md:text-base leading-relaxed'>
                        {t('project-d3')}
                        </p>
                        <Button type='primary' size='large'>{t('project-btn')}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainProjects
