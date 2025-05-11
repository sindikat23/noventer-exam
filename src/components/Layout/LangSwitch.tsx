'use client'
import React from 'react'
import { redirect, usePathname } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
// interface Iparam {
//     bubbles: boolean
//     cancelable: boolean
//     currentTarget:null
//     defaultPrevented:boolean
//     eventPhase:number
//     isDefaultPrevented:string
//     isPropagationStopped:string
//     isTrusted:boolean
//     nativeEvent:    
//     Event { isTrusted: true, type: 'change', target: select.outline - 0, currentTarget: null, eventPhase: 0, … }
// target
// :
// select.outline - 0
// timeStamp
// :
// 63855.800000000745
// type
// :
// "change"
// _reactName
// :
// "onChange"
// _targetInst
// :
// null
// }

const LangSwitch = () => {

    const locale = useLocale()

    const path = usePathname()

    const switchHandle = (param:any) => {
        console.log(param);

        console.log(param?.target?.value);
        redirect({ locale: param?.target?.value, href: path })
    }

    return (
        <div>
            <select className='outline-0' onChange={switchHandle} value={locale}>
                <option value="uz" className='text-secondary dark:bg-white '>UZB</option>
                <option value="en" className='text-secondary dark:bg-white '>ENG</option>
            </select>
        </div>
    )
}

export default LangSwitch