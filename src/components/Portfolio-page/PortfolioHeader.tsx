import Image from "next/image"
import p1 from '@/assets/images/Portfolio-page-image/p1.svg'
import p2 from '@/assets/images/Portfolio-page-image/p2.svg'
import p3 from '@/assets/images/Portfolio-page-image/p3.svg'
import { useTranslations } from "next-intl"

const PortfolioHeader = () => {
            const t = useTranslations('Portfolio-page')
    return (
        <div className="">
            <div className="container mx-auto text-white py-10 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-[40vh] relative">
                <div className="max-w-xl text-center md:text-left z-10">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight inter">
                        {t('portfolio-title1')} <br />
                        <span className="font-light">{t('portfolio-title2')}</span> <br />
                        <span className="text-purple-500">{t('portfolio-title3')}</span> <br />
                        {t('portfolio-title4')}
                    </h1>
                </div>

                <div className="relative w-[300px] h-[400px] mt-10 md:mt-0">
                    <div className="absolute top-0 left-20 w-20 h-24 md:top-52 bg-white/10 backdrop-blur-md rounded-xl z-0 shadow-box" />
                    <div className="absolute top-24 left-10 w-50 h-50 md:-top-6 bg-white/10 backdrop-blur-md rounded-xl z-0 shadow-box" />
                    <div className="absolute top-40 left-28 w-40 h-40 md:top-40 md:-left-32 bg-white/10 backdrop-blur-md rounded-xl z-0 shadow-box" />

                    <Image
                        src={p1}
                        alt="sh1"
                        width={80}
                        height={80}
                        className="absolute top-0 md:-left-24 md:top-10 object-cover rounded-xl z-10"
                    />

                    <Image
                        src={p2}
                        alt="sh2"
                        width={200}
                        height={160}
                        className="absolute top-24 left-12 md:-top-1 object-cover rounded-xl z-10"
                    />

                    <Image
                        src={p3}
                        alt="sh3"
                        width={128}
                        height={128}
                        className="absolute md:top-44 md:-left-28 object-cover rounded-xl z-10"
                    />
                </div>
            </div>
        </div>
    )
}

export default PortfolioHeader