import Image from 'next/image'
import { Button } from 'antd'

import decor_comp from '@/assets/decor/decor-comp.svg'
import icon1 from '@/assets/icon/v1.svg'
import icon2 from '@/assets/icon/v2.svg'
import icon3 from '@/assets/icon/v3.svg'
import icon4 from '@/assets/icon/v4.svg'

const MainHeader = () => {
    return (
        <div className="container mx-auto pt-4 text-white overflow-hidden">
            <div className="relative  text-white pt-20">
                <div>
                    <div className="absolute inset-0 flex justify-center items-center -z-10">
                        <div className="w-[400px] h-[400px] bg-[#723dc011] blur-3xl rounded-full absolute top-[10%] left-[10%]"></div>
                        <div className="w-[300px] h-[300px] bg-[#7137c9ec] blur-[120px] rounded-full absolute top-[40%] right-[15%]"></div>
                    </div>

                    <div className="container mx-auto px-6 lg:px-2 flex flex-col lg:flex-row items-center">
                        <div className="lg:w-3/7 text-center lg:text-left lg:pb-30">
                            <div className=''>
                                <h2 className="text-4xl lg:text-[42px] font-bold leading-tight inter">
                                    Yuqori sifatdagi <br />
                                    <span className="font-light">aniqlikka asoslanib</span> <br />
                                    <span className="text-[#5A00DB]">istalgan turdagi</span> <br />
                                    dasturlarni tayyorlaymiz
                                </h2>
                                <Button type='primary' size='large' className='mt-4'>Xizmatlar haqida</Button>
                            </div>
                        </div>

                        <div className="lg:w-4/7 mt-10 lg:mt-0 flex lg:justify-end relative">
                            <Image className="relative drop-shadow-[0_10px_40px_rgba(90,0,219,0.6)]"
                                src={decor_comp}
                                alt="Laptop" />

                        </div>
                    </div>
                    <div className="lg:absolute bottom-4 lg:left-1/2 transform lg:-translate-x-1/2 w-full flex flex-wrap lg:flex-nowrap lg:justify-evenly justify-center py-4 gap-8">
                        <div className="bg-[#b6a7c536]  p-6 rounded-lg shadow-lg hover:bg-[#b7a8c552]">
                            <div className='flex flex-col-2 items-center gap-2 cursor-pointer'>
                                <div>
                                    <Image src={icon1} alt="statistika" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">7+ yillik</p>
                                    <p className="text-gray-300">Umumiy tajriba</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#b6a7c536] p-6 rounded-lg shadow-lg hover:bg-[#b7a8c552]">
                            <div className='flex flex-col-2 items-center gap-2 cursor-pointer'>
                                <div>
                                    <Image src={icon2} alt="statistika" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">5+</p>
                                    <p className="text-gray-300">Yirik loyihalar</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#b6a7c536] p-6 rounded-lg shadow-lg hover:bg-[#b7a8c552]">
                            <div className='flex flex-col-2 items-center gap-2 cursor-pointer'>
                                <div>
                                    <Image src={icon3} alt="statistika" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">8+</p>
                                    <p className="text-gray-300">Xizmat turlari</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#b6a7c536] px-10 py-6 rounded-lg shadow-lg hover:bg-[#b7a8c552]">
                            <div className='flex flex-col-2 items-center gap-2 cursor-pointer'>
                                <div>
                                    <Image src={icon4} alt="statistika" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">100%</p>
                                    <p className="text-gray-300">Xavfsizlik</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader