import React from "react";
import HeroImage from "../../assets/home-image.png";
import BackgroundImage from "../../assets/backgroundCloud.png";

function HeroSection() {
	return (
		<section className='w-[100%] font-inter bg-[#fbfbfb]'>
			<img
				src={BackgroundImage}
				className='hidden xl:block absolute  z-0 w-[60%]'
			/>
			<section className='w-[90%] m-auto flex gap-10 justify-between items-center py-28 relative'>
				<img src={HeroImage} className='w-[50%] z-10 ' />

				<article className='w-[40%]'>
					<h2 className='leading-[57px] text-[44px] font-semibold text-[#051114] py-10 '>
						It’s helpful for operating system
					</h2>
					<div className='flex flex-col  gap-3 lg:w-[90%] xl:w-[80%]'>
						<div className='flex gap-4 items-center'>
							<svg
								width='24'
								height='22'
								viewBox='0 0 24 22'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M0 19.5645C0 15.7342 0.833077 12.6739 2.47558 10.462C4.45904 7.79147 7.59173 6.35071 11.7963 6.17255V0L24 10.7609L11.7963 21.5217V15.3851C9.24346 15.4562 7.31596 15.8382 5.78077 16.5711C4.12212 17.3633 2.91923 18.547 1.62231 20.0804L0 22V19.5645Z'
									fill='#EF821E'
								/>
							</svg>

							<span className='leading-[37.5px] font-medium text-[25px] text-[#051114]'>
								Ultra fast & Secure
							</span>
						</div>

						<span className='pl-[40px] text-[14px] font-normal pb-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. vitae velit proin justo, elementum siIn morbi{" "}
						</span>

						<div className='flex gap-4 items-center'>
							<svg
								width='24'
								height='22'
								viewBox='0 0 24 22'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M0 19.5645C0 15.7342 0.833077 12.6739 2.47558 10.462C4.45904 7.79147 7.59173 6.35071 11.7963 6.17255V0L24 10.7609L11.7963 21.5217V15.3851C9.24346 15.4562 7.31596 15.8382 5.78077 16.5711C4.12212 17.3633 2.91923 18.547 1.62231 20.0804L0 22V19.5645Z'
									fill='#5EBD14'
								/>
							</svg>
							<span className='leading-[37.5px] font-medium text-[25px] text-[#051114]'>
								Allows customization
							</span>
						</div>
						<span className='pl-[40px] text-[14px] font-normal pb-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. vitae velit proin justo, elementum siIn morbi{" "}
						</span>
						<div className='flex gap-4 items-center'>
							<svg
								width='24'
								height='22'
								viewBox='0 0 24 22'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M0 19.5645C0 15.7342 0.833077 12.6739 2.47558 10.462C4.45904 7.79147 7.59173 6.35071 11.7963 6.17255V0L24 10.7609L11.7963 21.5217V15.3851C9.24346 15.4562 7.31596 15.8382 5.78077 16.5711C4.12212 17.3633 2.91923 18.547 1.62231 20.0804L0 22V19.5645Z'
									fill='#3B87FA'
								/>
							</svg>
							<span className='leading-[37.5px] font-medium text-[25px] text-[#051114]'>
								Smart contract
							</span>
						</div>
						<span className='pl-[40px] text-[14px] font-normal pb-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. vitae velit proin justo, elementum siIn morbi
						</span>
					</div>
				</article>
			</section>
		</section>
	);
}

export default HeroSection;
