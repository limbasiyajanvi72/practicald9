import React from 'react'

function ReviewSelectedCard({review, name,img,post}) {
  return (
    <section className='flex flex-col gap-8 w-[360px] h-[280px]  shadow-[0px_2px_4px_0px_#5B1FB0] rounded-[10px] p-10'> 
    <article className=''>
    <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.2" d="M7.29762 8.62965C6.73604 8.46797 6.17446 8.38593 5.62819 8.38593C4.78462 8.38593 4.08073 8.57871 3.53493 8.81477C4.06111 6.88846 5.32515 3.56466 7.84318 3.19035C8.07638 3.15567 8.26748 2.98705 8.3311 2.76007L8.88144 0.791668C8.92784 0.625202 8.90033 0.447017 8.80538 0.302556C8.71043 0.158094 8.55783 0.061707 8.38682 0.0382679C8.20098 0.0129154 8.01156 0 7.82381 0C4.80136 0 1.80809 3.15471 0.545011 7.67176C-0.196429 10.3218 -0.413839 14.306 1.4125 16.8137C2.43449 18.217 3.9255 18.9663 5.84416 19.0412C5.85205 19.0414 5.85971 19.0416 5.8676 19.0416C8.23495 19.0416 10.3342 17.4473 10.9728 15.1649C11.3543 13.8004 11.1818 12.3694 10.4868 11.1345C9.79915 9.91354 8.66666 9.02357 7.29762 8.62965Z" fill="url(#paint0_linear_53_1502)"/>
<path opacity="0.2" d="M22.1164 11.1348C21.4288 9.91354 20.2963 9.02357 18.9273 8.62965C18.3657 8.46797 17.8041 8.38593 17.2581 8.38593C16.4145 8.38593 15.7104 8.57871 15.1646 8.81477C15.6908 6.88846 16.9548 3.56466 19.4731 3.19035C19.7063 3.15567 19.8971 2.98705 19.961 2.76007L20.5113 0.791668C20.5577 0.625202 20.5302 0.447017 20.4353 0.302556C20.3406 0.158094 20.188 0.061707 20.0167 0.0382679C19.8311 0.0129154 19.6417 0 19.4537 0C16.4313 0 13.438 3.15471 12.1747 7.67176C11.4335 10.3218 11.2161 14.306 13.0426 16.8142C14.0644 18.2172 15.5556 18.9668 17.4741 19.0414C17.482 19.0416 17.4896 19.0419 17.4977 19.0419C19.8649 19.0419 21.9643 17.4475 22.6029 15.1651C22.9839 13.8006 22.8112 12.3694 22.1164 11.1348Z" fill="url(#paint1_linear_53_1502)"/>
<defs>
<linearGradient id="paint0_linear_53_1502" x1="15.0655" y1="-1.80555e-06" x2="-8.45588" y2="1.94211" gradientUnits="userSpaceOnUse">
<stop stop-color="#5319A6"/>
<stop offset="1" stop-color="#7635D4"/>
</linearGradient>
<linearGradient id="paint1_linear_53_1502" x1="26.6952" y1="-1.80557e-06" x2="3.1741" y2="1.94204" gradientUnits="userSpaceOnUse">
<stop stop-color="#5319A6"/>
<stop offset="1" stop-color="#7635D4"/>
</linearGradient>
</defs>
</svg>

<div className='text-[#051114B2] italic text-[12px] ml-6'>{review}</div>
    </article>
    <article className='flex gap-4'>
        <img src={img} className='w-[80px] h-[80px] rounded-[50%] border-[1px] border-[#5319A6]'/>
        <div className='text-[051114]'>
            <span className='text-[16px] leading-[32px] block'>{name}</span>
            <span className='text-[10px] leading-[16px] block'>{post}</span>
        </div>
    </article>
   </section>
  )
}

export default ReviewSelectedCard
