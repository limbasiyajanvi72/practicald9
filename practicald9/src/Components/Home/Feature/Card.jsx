import React from "react";

function Card({ icon, data, color }) {
	return (
		<div className='w-[260px]  flex flex-col gap-6 justify-center items-center rounded-[10px] shadow-[0px_6px_50px_5px_rgba(6,14,26,0.05)]'>
			<div
				className={` rounded-[50%] p-5 h-[150px] w-[150px] flex justify-center items-center mt-7`}
				style={{ backgroundColor: color }}
			>
				{icon}
			</div>

			<div className='flex flex-col gap-4 justify-center items-center text-center py-7'>
				<h4 className='font-medium text-[25px]'>{data}</h4>
				<p className='text-[14px] text-[#51565E]'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
				<svg
					width='32'
					height='32'
					viewBox='0 0 32 32'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M1 16C1 24.2843 7.71573 31 16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 0.999999C7.71573 0.999999 1 7.71573 1 16Z'
						stroke='#42B4EE'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M16.0004 20.0001L20.0004 16.0001L16.0004 12.0001'
						stroke='#42B4EE'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M12.0004 16L20.0004 16'
						stroke='#42B4EE'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			</div>
		</div>
	);
}

export default Card;
