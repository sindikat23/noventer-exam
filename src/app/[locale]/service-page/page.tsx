import ServiceCatalog from '@/components/Services-page/ServiceCatalog'
import ServiceCRM from '@/components/Services-page/ServiceCRM'
import ServiceEcom from '@/components/Services-page/ServiceEcom'
import ServiceERP from '@/components/Services-page/ServiceERP'
import ServiceHeader from '@/components/Services-page/ServiceHeader'
import ServiceLanding from '@/components/Services-page/ServiceLanding'
import React from 'react'

const ServicePage = () => {
  return (
    <div className='bg-[#0E041D]'>
      <ServiceHeader/>
      <ServiceLanding/>
      <ServiceCatalog/>
      <ServiceEcom/>
      <ServiceCRM/>
      <ServiceERP/>
      <ServiceLanding/>
      <ServiceLanding/>
    </div>
  )
}

export default ServicePage