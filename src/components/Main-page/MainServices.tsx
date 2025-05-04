'use client'

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
    return (
        <div className='px-4 py-6'>
            {/* Title Section */}
            <div className='text-center text-white py-10'>
                <h1 className='font-bold text-3xl md:text-4xl'>Xizmat turlari</h1>
                <p className='text-sm md:text-base font-light'>Dasturlash sohasidagi eng talabgir xizmat turlaridan quyidagilar:</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-white'>

                <div className='bg-[#bdabd61e] p-8 rounded-2xl hover:scale-105 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                    <div className='flex justify-center'>
                        <Image className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 duration-700' src={b1} alt="service" />
                    </div>
                    <h1 className='font-semibold text-2xl md:text-3xl pt-4'>Landing sahifalar</h1>
                    <p className='font-light py-4 text-sm md:text-base'>
                        Qisqa, ta&apos;sirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun mo&apos;ljallangan.
                    </p>
                </div>

                {/* Service Card */}
                <div className='bg-[#bdabd61e] p-8 rounded-2xl hover:scale-105 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                    <div className='flex justify-center'>
                        <Image className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 duration-700' src={b2} alt="service" />
                    </div>
                    <h1 className='font-semibold text-2xl md:text-3xl pt-4'>Korporativ veb-sayt</h1>
                    <p className='font-light py-4 text-sm md:text-base'>
                        Kompaniyaning umumiy ma&apos;lumotini taqdim etish, xizmatlar yoki mahsulotlar haqida ma&apos;lumot berish.
                    </p>
                </div>

                {/* Service Card */}
                <div className='bg-[#bdabd61e] p-8 rounded-2xl hover:scale-105 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                    <div className='flex justify-center'>
                        <Image className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 duration-700' src={b3} alt="service" />
                    </div>
                    <h1 className='font-semibold text-2xl md:text-3xl pt-4'>Online do&apos;kon</h1>
                    <p className='font-light py-4 text-sm md:text-base'>
                        Mahsulotlar yoki xizmatlarni onlayn tarzda sotish. To&apos;lov tizimlari va mahsulotni boshqarish tizimi mavjud.
                    </p>
                </div>

                <div className='bg-[#bdabd61e] p-8 rounded-2xl hover:scale-105 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                    <div className='flex justify-center'>
                        <Image className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 duration-700' src={b4} alt="service" />
                    </div>
                    <h1 className='font-semibold text-2xl md:text-3xl pt-4'>CRM tizimi</h1>
                    <p className='font-light py-4 text-sm md:text-base'>
                        Mijozlar bilan ishlashni avtomatlashtirish va boshqarish. Katta kompaniyalar yoki mijozlar bilan faol ishlaydigan tashkilotlar.
                    </p>
                </div>

                <div className='bg-[#bdabd61e] p-8 rounded-2xl hover:scale-105 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                    <div className='flex justify-center'>
                        <Image className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 duration-700' src={b5} alt="service" />
                    </div>
                    <h1 className='font-semibold text-2xl md:text-3xl pt-4'>Portfolio saytlari</h1>
                    <p className='font-light py-4 text-sm md:text-base'>
                        Shaxsiy yoki kompaniya ishlarini ko&apos;rsatish. Freelancerlar yoki ijodkorlar uchun o&apos;z ishlarini targ&apos;ib qilishda.
                    </p>
                </div>

                {/* Service Card */}
                <div className='bg-[#bdabd61e] p-8 rounded-2xl hover:scale-105 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                    <div className='flex justify-center'>
                        <Image className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 duration-700' src={b6} alt="service" />
                    </div>
                    <h1 className='font-semibold text-2xl md:text-3xl pt-4'>Blog sahifalari</h1>
                    <p className='font-light py-4 text-sm md:text-base'>
                        O&apos;z fikrlari, yangiliklari yoki ma&apos;lumotlarini o&apos;rtoqlashish. Ma&apos;lumot yetkazish, auditoriyani jalb qilish va reklama qilish uchun.
                    </p>
                </div>

                {/* Service Card */}
                <div className='bg-[#bdabd61e] p-8 rounded-2xl hover:scale-105 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                    <div className='flex justify-center'>
                        <Image className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 duration-700' src={b7} alt="service" />
                    </div>
                    <h1 className='font-semibold text-2xl md:text-3xl pt-4'>Ta&apos;lim platformasi</h1>
                    <p className='font-light py-4 text-sm md:text-base'>
                        Ta&apos;lim kurslari, videodarsliklar yoki online testlar uchun. O&apos;quv muassasalari yoki onlayn dars beruvchi kompaniyalar uchun.
                    </p>
                </div>

                <div className='bg-[#bdabd61e] p-8 rounded-2xl hover:scale-105 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                    <div className='flex justify-center'>
                        <Image className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 duration-700' src={b8} alt="service" />
                    </div>
                    <h1 className='font-semibold text-2xl md:text-3xl pt-4'>ERP platformasi</h1>
                    <p className='font-light py-4 text-sm md:text-base'>
                        ERP platformasi korxona yoki tashkilotning barcha jarayonlarini birlashtiruvchi kompleks dasturiy ta&apos;minotdir.
                    </p>
                </div>

                <div className='bg-[#bdabd61e] p-8 rounded-2xl hover:scale-105 duration-500 hover:shadow-[0_0_15px] hover:shadow-[#5A00DB] cursor-pointer'>
                    <div className='flex justify-center'>
                        <Image className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 duration-700' src={b9} alt="service" />
                    </div>
                    <h1 className='font-semibold text-2xl md:text-3xl pt-4'>Alohida loyihami ?</h1>
                    <p className='font-light py-4 text-sm md:text-base'>
                        Biz yangi startap loyihalarni rivojlantirishda yordam beramiz. G&apos;oyadan boshlab dasturgacha shakllantiramiz.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainServices
