import MainProjects from '@/components/Main-page/MainProjects'
import PortfolioHeader from '@/components/Portfolio-page/PortfolioHeader'
import React from 'react'

const PortfolioPage = () => {
  return (
    <div className='bg-[#0E041D]'>
      <PortfolioHeader/>
      <MainProjects/>
    </div>
  )
}

export default PortfolioPage