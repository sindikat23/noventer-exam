'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import noventor_logo from '@/assets/logo/nov_logo.svg'
import { Menu, X } from 'lucide-react'
import LangSwitch from './LangSwitch'
import { useTranslations } from 'next-intl'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const t = useTranslations('Navbar');

    return (
        <div className='bg-[#0E041D] inter text-white'>
            <div className='container mx-auto flex justify-between items-center py-6 px-4 lg:px-0'>
                <div>
                    <Image src={noventor_logo} alt='noventor_logo' width={120} height={40} />
                </div>
                <ul className='hidden lg:flex items-center gap-8 font-bold'>
                    <Link href={'/'}><li className='hover:scale-105 duration-300 cursor-pointer'>{t('nav-menu1')}</li></Link>
                    <Link href={'/portfolio-page'}><li className='hover:scale-105 duration-300 cursor-pointer'>{t('nav-menu2')}</li></Link>
                    <Link href={'/service-page'}><li className='hover:scale-105 duration-300 cursor-pointer'>{t('nav-menu3')}</li></Link>
                    <li className='hover:scale-105 duration-300 cursor-pointer'>{t('nav-menu4')}</li>
                </ul>
                <div className='hidden lg:flex items-center gap-4'>
                    <LangSwitch />
                    {/* <select name="lang" className='font-medium p-2 bg-transparent border border-none rounded-md'>
                        <option value="uz">UZB</option>
                        <option value="en">ENG</option>
                    </select> */}
                    <button className='py-3 px-5 rounded-lg bg-[#ffffff2d] font-semibold hover:bg-[#ffffff44] transition'>
                    {t('nav-btn')}
                    </button>
                </div>
                <div className='lg:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className='lg:hidden px-6 pb-6'>
                    <ul className='flex flex-col gap-4 font-semibold'>
                        <Link href={'/'} onClick={() => setIsOpen(false)}><li>{t('nav-menu1')}</li></Link>
                        <Link href={'/portfolio-page'} onClick={() => setIsOpen(false)}><li>{t('nav-menu2')}</li></Link>
                        <Link href={'/service-page'} onClick={() => setIsOpen(false)}><li>{t('nav-menu3')}</li></Link>
                        <li>{t('nav-menu4')}</li>
                    </ul>
                    <div className='mt-4 flex flex-col gap-3'>
                        <LangSwitch/>
                        {/* <select name="lang" className='font-medium p-2 bg-transparent border border-white rounded-md'>
                            <option value="uz">UZB</option>
                            <option value="en">ENG</option>
                        </select> */}
                        <button className='py-3 px-5 rounded-lg bg-[#ffffff2d] font-semibold hover:bg-[#ffffff44] transition'>
                        {t('nav-btn')}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
