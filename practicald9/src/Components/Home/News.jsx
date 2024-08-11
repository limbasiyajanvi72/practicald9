import React from 'react'
import news1 from "../../assets/news1.png"
import news2 from "../../assets/news2.png"
import { useNavigate } from 'react-router-dom'

function News() {
    const navigate=useNavigate();
  return (
    <section className='flex flex-col gap-12 justify-center items-center py-12 font-inter'>
        <h1 className='text-[#051114] text-[44px] font-medium'>Lastest insights news</h1>
       
        <article className='flex gap-5 flex-wrap justify-center justify-center '>
            <div className=' max-w-[555px] '>
                <img src={news1} className='object-cover lg:object-fit h-[358px]'/>
                <div className='flex flex-col gap-4 p-6 border-0 sm:border-[2px] border-b-[#e6e8e8] border-l-[#e6e8e8] border-r-[#e6e8e8] rounded-br-[10px] rounded-bl-[10px] max-w-[555px]'>
                    <div className='flex  flex-col lg:flex-row lg:gap-10  text-[#051114] text-[16px] '>
                    <span>Our Creative Team</span>
                    <span>17 June,2021</span><span>
                    by Stive Smithi
                    </span>
                    </div>
                    <div className='text-[#051114] font-medium text-[22px]'>Running remote offsites and onbordings</div>
                    <div className='font-normal text-[#051114] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat fermentum, enim vel adipiscing non. Lacus, nunc, at et vel </div>
                    <button className='bg-[#42B4EE] w-[106px] py-2 rounded-[5px] text-white'>Continue</button>
                </div>
            </div>
            <div className=' max-w-[555px] '>
                <img src={news2} className='object-cover lg:object-fit h-[358px]'/>
                <div className='flex flex-col gap-4 p-6 border-0 sm:border-[2px] border-b-[#e6e8e8] border-l-[#e6e8e8] border-r-[#e6e8e8] rounded-br-[10px] rounded-bl-[10px] max-w-[555px]'>
                    <div  className='flex  flex-col lg:flex-row lg:gap-10  text-[#051114] text-[16px] '>
                    
                    <span>Create presentations</span>
                    <span>17 June,2021</span><span>
                    by Thomas lews
                    </span>
                    </div>
                    <div className='text-[#051114] font-medium text-[22px]'>A new look & new ways to collaborate</div>
                    <div className='font-normal text-[#051114] text-[14px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat fermentum, enim vel adipiscing non. Lacus, nunc, at et vel 
                    </div>
                    <button className='bg-[#42B4EE] w-[106px] py-2 rounded-[5px] text-white'>Continue</button>
                </div>
            </div>
        </article>
    </section>
  )
}

export default News
