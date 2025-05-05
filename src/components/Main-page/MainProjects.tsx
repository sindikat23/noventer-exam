import { Button } from "antd"
import Image from "next/image"

import w1 from '@/assets/images/W1.png'
import w2 from '@/assets/images/W2.png'
import w3 from '@/assets/images/W3.png'

const MainProjects = () => {
    return (
        <div className="container mx-auto inter px-4">
            <div className='py-10'>
                <div className='text-center text-white py-10'>
                    <h1 className='text-3xl md:text-4xl font-bold py-2'>Loyihalarimiz</h1>
                    <p className='text-base md:text-lg'>biz haqimizda gapirsin !</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 py-8'>
                    <div className='rounded-2xl overflow-hidden hover:scale-105 transition duration-700 hover:shadow-[0_0_20px] hover:shadow-blue-900 cursor-pointer'>
                        <Image className='w-full h-auto object-cover' src={w1} alt="Tourmad" />
                    </div>
                    <div className='flex flex-col gap-4 justify-center text-white lg:items-start lg:text-left'>
                        <h1 className='text-xl md:text-2xl font-semibold'>Tourmad loyihasi</h1>
                        <p className='text-sm md:text-base leading-relaxed'>
                            Tourmad - O&apos;zbekistonning ichki turizmini rivojlantirish maqsadida yaratilgan web sayt. U quyidagi xizmatlarni jamlaydi: mehmonxona, restoran, gidlik, haydovchilar va boshqa servislar. 
                            Foydalanuvchi joylar narxlari va xizmatlarni ko&apos;rib chiqib, buyurtma bera oladi.
                        </p>
                        <Button type='primary' size='large'>Loyihani ko&apos;rish</Button>
                    </div>
                    <div className='flex flex-col gap-4 justify-center text-white lg:items-end lg:text-right'>
                        <h1 className='text-xl md:text-2xl font-semibold'>ProRun loyihasi</h1>
                        <p className='text-sm md:text-base leading-relaxed'>
                            Prorun.uz — yugurish musobaqalari uchun yaratilgan sayt. Foydalanuvchilar oddiy ro&apos;yxatdan o&apos;tib, har qanday musobaqaga qatnashishlari mumkin.
                            Chet elliklar va boshqa qatnashchilar uchun qulay ro&apos;yxatdan o&apos;tish tizimi yaratildi.
                        </p>
                        <Button type='primary' size='large'>Loyihani ko&apos;rish</Button>
                    </div>
                    <div className='rounded-2xl overflow-hidden hover:scale-105 transition duration-700 hover:shadow-[0_0_20px] hover:shadow-blue-900 cursor-pointer'>
                        <Image className='w-full h-auto object-cover' src={w2} alt="ProRun" />
                    </div>

                    <div className='rounded-2xl overflow-hidden hover:scale-105 transition duration-700 hover:shadow-[0_0_20px] hover:shadow-blue-900 cursor-pointer'>
                        <Image className='w-full h-auto object-cover' src={w3} alt="Xalq Trans" />
                    </div>
                    <div className='flex flex-col gap-4 justify-center text-white lg:items-start lg:text-left'>
                        <h1 className='text-xl md:text-2xl font-semibold'>Xalq trans loyihasi</h1>
                        <p className='text-sm md:text-base leading-relaxed'>
                            Bu yerda esa yana ko&apos;proq ma&apos;lumotlar berilishi kerak. Lorem Ipsum matnlari o&apos;rnida asl loyiha tafsilotlari kiritilishi mumkin.
                        </p>
                        <Button type='primary' size='large'>Loyihani ko&apos;rish</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainProjects
