import React, { useState } from "react";
import { CARD_DATA } from "./Card_data";
import Card from "./Card";
import SelectedCard from "./SelectedCard";

function Feature() {
	const [cardSelected, setCardSelected] = useState(0);
	return (
		<section className='font-inter w-[90%] m-auto'>
			<h2 className='text-[#051114] text-[44px] text-center font-semibold lg:w-[45%] m-auto'>
				We Provides best Feature for customer
			</h2>
			<article className='flex flex-wrap gap-10 justify-center my-8'>
				{CARD_DATA.map((card, index) => (
					<div key={index} onClick={() => setCardSelected(index)}>
						{cardSelected === index ? (
							<SelectedCard
								icon={card.ICON}
								data={card.DATA}
								color={card.COLOR}
							/>
						) : (
							<Card
								icon={card.ICON}
								data={card.DATA}
								color={card.COLOR}
							/>
						)}
					</div>
				))}
			</article>
		</section>
	);
}

export default Feature;
