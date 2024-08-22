import React from 'react'
import { footerData } from '../lib/data'
import { Button } from '../ui/button'

const Footer = () => {
  return <div className='h-[350px] bg-slate-[#F7F7F7] border-2 border-slate-300'>
            <div className='container flex flex-col gap-8 flex-wrap h-[300px] text-left pt-20'>
                {
                    footerData.map((data)=>(
                        <>
                          <div className='text-sm'>
                              <h4 className='font-bold pb-2'>{data.head}</h4>
                              <ul className='space-y-2'>
                              {
                                data.link.map((subdata)=>(
                                    <>
                                      <li><Button variant='link' className='px-0 py-0 text-slate-400 h-0 text-sm'><a href={subdata.url}>{subdata.name}</a></Button></li>              
                                    </>
                                ))
                              }
                              </ul>  
                          </div> 
                        </>
                    ))
                }
            </div>
        </div>
      
}

export default Footer