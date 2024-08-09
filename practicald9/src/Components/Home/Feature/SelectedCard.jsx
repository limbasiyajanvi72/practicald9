import React from "react";

function SelectedCard({ icon, data, color }) {
	return (
		<div className='bg-gradient-to-t from-[#692BC3] to-[#FFFFFF] p-[1px] rounded-[10px]  '>
			<div className='w-[260px]  flex flex-col gap-12 justify-center items-center  rounded-[10px]  bg-white'>
				<div
					className={`bg-[${color}] rounded-[50%] p-5 h-[150px] w-[150px] flex justify-center items-center mt-6 z-10`}
				>
					{icon}
				</div>

				<div className='relative flex flex-col gap-4 justify-center items-center text-center py-4  rounded-b-[8px] border-[#692BC3] bg-[#651db7]'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 1440 320'
						className='transform scale-x-[-1] absolute bottom-[110px]'
						width='auto'
						height='150px'
					>
						<path
							fill='#651db7'
							fillOpacity='1'
							d='M0,96L60,117.3C120,139,240,181,360,181.3C480,181,600,139,720,106.7C840,75,960,53,1080,53.3C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
						/>
					</svg>

					<h4 className='font-medium text-[25px] text-white z-10'>
						{data}
					</h4>
					<p className='text-[14px] text-white'>
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
							stroke='#FFFFFF'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M16.0004 20.0001L20.0004 16.0001L16.0004 12.0001'
							stroke='#FFFFFF'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M12.0004 16L20.0004 16'
							stroke='#FFFFFF'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default SelectedCard;
