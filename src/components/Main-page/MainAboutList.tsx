
import Image from 'next/image'
import a1 from '@/assets/images/A1.png'
import a2 from '@/assets/images/A2.png'
import a3 from '@/assets/images/A3.png'

const MainAboutList = () => {
    return (
        <div className='container mx-auto px-4 pt-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8'>
                
                <div className='rounded-2xl bg-[#e2daee10] hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_20px] hover:shadow-blue-900 cursor-pointer'>
                    <Image className='w-full h-auto rounded-t-2xl object-cover' src={a1} alt="team" />
                    <div className='px-4 py-6 text-white'>
                        <h1 className='py-2 text-2xl md:text-3xl font-semibold'>Boshlanishi</h1>
                        <p className='text-base md:text-xl'>
                            Biz --- dan ish boshladik va <br />
                            ---- larni oldimizga maqsad qilib <br />
                            qo&apos;ydik
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='rounded-2xl bg-[#e2daee10] hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_20px] hover:shadow-blue-900 cursor-pointer'>
                    <Image className='w-full h-auto rounded-t-2xl object-cover' src={a3} alt="team" />
                    <div className='px-4 py-6 text-white'>
                        <h1 className='py-2 text-2xl md:text-3xl font-semibold'>Uzoq muddatli loyihalar</h1>
                        <p className='text-base md:text-xl'>
                            Tajribamiz davomida umumiy <br />
                            hisobda - - loyiha uchun <br />
                            -- - muddatda ishlab topshirdik
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className='rounded-2xl bg-[#e2daee10] hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_20px] hover:shadow-blue-900 cursor-pointer'>
                    <Image className='w-full h-auto rounded-t-2xl object-cover' src={a2} alt="team" />
                    <div className='px-4 py-6 text-white'>
                        <h1 className='py-2 text-2xl md:text-3xl font-semibold'>Jamoamiz kengaymoqda</h1>
                        <p className='text-base md:text-xl'>
                            Jamoamiz safi esa tobora <br />
                            kengaymoqda. Boshida - kishidan <br />
                            boshlangan faoliyatimiz hozirda <br />
                            -- kishi bilan davom etmoqda
                        </p>
                    </div>
                </div>
            </div>

            <div className='text-base md:text-lg text-white inter py-6 px-2'>
                <p>
                    Bu yerda esa yana ko&apos;proq ma&apos;lumotlar berilishi kerak. <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                    Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s...
                </p>
            </div>
        </div>
    )
}

export default MainAboutList
