import React, { useState } from 'react'
import { REVIEW_DATA } from './ReviewData'
import ReviewCard from './ReviewCard'
import SelectedCard from '../Feature/SelectedCard';
import ReviewSelectedCard from './ReviewSelectedCard';

function Review() {
  const[reviewCard,setReviewCard]=useState(0);

  return (
    <section className='w-[100%]'>
   <section className='font-inter flex flex-col gap-8 justify-center items-center py-8 w-[90%] m-auto'>
    <article className='flex flex-col gap-5 justify-center items-center'>
    <h1 className='text-[#051114] text-[44px] font-medium'>
    Let’s see our User’s Review
    </h1>
    <p className='w-[60%] m-auto text-center text-[#051114] text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque tellus interdum venenatis auctor et nibh. Rhoncus a, sed lobortis nisi.</p>
    </article>
    
    <article className='flex gap-5 flex-wrap justify-center items-center'>
       {REVIEW_DATA.map((review,index)=>
       <div onClick={()=>setReviewCard(index)}>{
        index===reviewCard ?(
          <ReviewSelectedCard
          review={review.REVIEW}
          name={review.NAME}
          post={review.POST}
          img={review.IMAGE}/>
        ):( <ReviewCard
          review={review.REVIEW}
          name={review.NAME}
          post={review.POST}
          img={review.IMAGE}/>)
       }   
       
       </div>)}
    </article>
    <article className='hidden xl:flex gap-2 '>
    {Array.from({ length: 3 }, (_, i) => (
        <button key={i + 1}className={` h-[10px] rounded-[10px] ${i===reviewCard?"bg-[#42B4EE] w-[30px]":"bg-[#b3e1f8] w-[15px]"}`} onClick={()=>setReviewCard(i)}></button>
      ))}
    </article>

   </section>
   </section>
  )
}

export default Review
