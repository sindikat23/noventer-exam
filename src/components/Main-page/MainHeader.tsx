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
            <div className="relative text-white pt-20 px-4 sm:px-6">
                <div className="absolute inset-0 flex justify-center items-center -z-10">
                    <div className="w-[300px] h-[300px] bg-[#723dc011] blur-3xl rounded-full absolute top-[10%] left-[5%]"></div>
                    <div className="w-[200px] h-[200px] bg-[#7137c9ec] blur-[100px] rounded-full absolute top-[50%] right-[5%]"></div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-10">
                    <div className="w-full lg:w-3/5 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-snug">
                            Yuqori sifatdagi <br />
                            <span className="font-light">aniqlikka asoslanib</span> <br />
                            <span className="text-[#5A00DB]">istalgan turdagi</span> <br />
                            dasturlarni tayyorlaymiz
                        </h2>
                        <Button type="primary" size="large" className="mt-6">
                            Xizmatlar haqida
                        </Button>
                    </div>

                    <div className="w-full lg:w-2/5 flex justify-center relative">
                        <Image
                            className="relative w-[80%] max-w-xs drop-shadow-[0_10px_40px_rgba(90,0,219,0.6)]"
                            src={decor_comp}
                            alt="Laptop"
                        />
                    </div>
                </div>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-evenly justify-center py-10 gap-6">
                    {[icon1, icon2, icon3, icon4].map((icon, index) => {
                        const data = [
                            ["7+ yillik", "Umumiy tajriba"],
                            ["5+", "Yirik loyihalar"],
                            ["8+", "Xizmat turlari"],
                            ["100%", "Xavfsizlik"],
                        ][index];

                        return (
                            <div
                                key={index}
                                className="bg-[#b6a7c536] p-6 rounded-lg shadow-lg hover:bg-[#b7a8c552] transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <Image src={icon} alt="statistika" className="w-10 h-10" />
                                    <div>
                                        <p className="text-2xl font-bold">{data[0]}</p>
                                        <p className="text-gray-300 text-sm">{data[1]}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    )
}

export default MainHeader