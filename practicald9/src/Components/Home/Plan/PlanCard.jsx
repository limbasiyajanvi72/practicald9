import React from "react";
import { useNavigate } from "react-router-dom";

function PlanCard({ heading, price, time, user,status }) {
	const navigate=useNavigate();

	return (
		<section className='flex flex-col gap-12 justify-center items-center w-[360px] h-[480px] shadow-[0px_6px_50px_5px_#060E1A0D] rounded-bl-[10px] rounded-br-[10px]'>
			<article className='text-center'>
				<div className='text-[22px] text-[#4f585b] font-medium'>
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
						fill='#051114'
						mask='url(#)'
					/>
				</svg>
				<div>
					<span className='text-[44px] font-semibold leading-[57.2px]'>
						{price}
					</span>
					<span className='text-[32px] font-medium leading-[44.8px]'>
						{status?"/year":"/mo"}
					</span>
				</div>
			</article>
			<article className='flex flex-col justify-center items-center gap-3 text-[#666d6f]'>
				<span>Easy Customizable</span>
				<span>Commercia license</span>
				<span>{user} user license</span>
				<span>Hotline support 24/7</span>
			</article>
			<button className='text-[#42B4EE] font-medium text-[16px] py-[15px] px-[30px] bg-[#42B4EE1A] rounded-[5px]' onClick={()=>navigate("/free-trial")}>
				TRY THIS PACKAGE
			</button>
		</section>
	);
}

export default PlanCard;
