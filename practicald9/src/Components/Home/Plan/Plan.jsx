import React, { useState } from "react";
import { PLAN_DATA } from "./PlanData";
import PlanCard from "./PlanCard";
import PlanSelctedcard from "./PlanSelctedcard";

function Plan() {
	const [isToggled, setIsToggled] = useState(false);
	const [planSelected, setPlanSelected] = useState(0);

	const handleToggle = () => {
		setIsToggled(!isToggled);
	};

	console.log(isToggled);

	return (
		<section className='font-inter my-20 bg-[#fbfbfb]'>
			<article className='flex flex-col gap-6'>
				<h1 className='text-[#051114] text-[44px] leading-[57.2px] font-medium text-center'>
					Choose your best pricing plan
				</h1>
				<span className='text-[22px] font-medium text-center flex gap-3 justify-center'>
					<span>Added for Monthly</span>
					<button
						onClick={handleToggle}
						className={`relative  w-[83px] h-[33px] rounded-full p-1 transition-colors duration-300 bg-[#42B4EE33] border border-[#42B4EE]
       `}
					>
						<div
							className={`w-[36px] h-[23px] bg-[#42B4EE] rounded-full shadow-md transform transition-transform duration-300 
          ${isToggled ? "translate-x-9" : "translate-x-0"}`}
						/>
					</button>
					<span>Yearly</span>
				</span>
			</article>
			<article className='flex gap-8 justify-center my-20'>
				{PLAN_DATA.map((plan, index) => (
					<div onClick={() => setPlanSelected(index)}>
						{planSelected === index ? (
							<PlanSelctedcard
								heading={plan.HEADING}
								price={plan.PRICE}
								time={plan.TIME}
								user={plan.USER}
							/>
						) : (
							<PlanCard
								heading={plan.HEADING}
								price={plan.PRICE}
								time={plan.TIME}
								user={plan.USER}
							/>
						)}
					</div>
				))}
			</article>
		</section>
	);
}

export default Plan;
