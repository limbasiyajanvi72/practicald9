import React from "react";
import { useNavigate } from "react-router-dom";

function PlanSelctedcard({ heading, price, time, user,status }) {
	const navigate=useNavigate();
	return (
		
		<section className='flex flex-col gap-12  w-[360px] bg-white  rounded-bl-[10px] rounded-br-[10px]  shadow-[0px_6px_50px_5px_#060E1A0D]'>
			<article className='text-center bg-[#6a1fbb] flex flex-col justify-center items-center pt-[50px] relative z-10'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1440 320'
					className='absolute z-0 top-[130px]'
				>
					<path
						fill='#6a1fbb'
						fill-opacity='1'
						d='M0,224L80,208C160,192,320,160,480,165.3C640,171,800,213,960,208C1120,203,1280,149,1360,122.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
					></path>
				</svg>

				<div className='text-[22px] text-white font-medium z-10'>
					{heading}
				</div>
				<svg
					width='178'
					height='7'
					viewBox='0 0 178 7'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<mask
						maskUnits='userSpaceOnUse'
						x='0'
						y='0'
						width='0'
						height='0'
						fill='black'
					>
						<rect fill='white' width='0' height='0' />
					</mask>
					<path
						d='M0 3.5L5 6.38675V0.613249L0 3.5ZM178 3.5L173 0.613249V6.38675L178 3.5ZM4.5 4H173.5V3H4.5V4Z'
						fill='#FFFFFF'
						mask='url(#)'
					/>
				</svg>
				<div className='z-10'>
					<span className='text-[44px] font-semibold leading-[57.2px] text-white '>
						{price}
					</span>
					<span className='text-[32px] font-medium leading-[44.8px] text-white '>
					{status?"/year":"/mo"}
					</span>
				</div>
			</article>
			<article className="bg-gradient-to-t from-[#692BC3] to-[#FFFFFF] p-[1px] rounded-br-[10px] rounded-bl-[10px] ">
				<article className="bg-white flex flex-col gap-11 justify-center items-center rounded-br-[10px] rounded-bl-[10px]">
			<article className='flex flex-col justify-center items-center gap-3 text-[#666d6f]'>
				<span>Easy Customizable</span>
				<span>Commercia license</span>
				<span>{user} user license</span>
				<span>Hotline support 24/7</span>
			</article>
			<button className='text-[#42B4EE] font-medium text-[16px] py-[15px] px-[30px] bg-[#42B4EE1A] rounded-[5px] w-[223px] mb-[54px] ' onClick={()=>navigate("/free-trial")}>
				TRY THIS PACKAGE
			</button>
			</article>
			</article>
			
		</section>
	)
}

export default PlanSelctedcard;
