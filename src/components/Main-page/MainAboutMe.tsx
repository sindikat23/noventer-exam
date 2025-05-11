import { useTranslations } from 'next-intl';
import React from 'react'

const MainAboutMe = () => {
          const t = useTranslations('Main-AboutMe');
    return (
        <div className='bg-[#5A00DB]'>
            <div className='container mx-auto px-2 text-white py-5'>
                <h1 className='font-bold text-[48px]'>{t('about-me')}</h1>
                <p className='font-normal text-[18px]'>{t('about-me2')}</p>
            </div>
        </div>
    )
}

export default MainAboutMe