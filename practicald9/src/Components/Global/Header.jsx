import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home_Image from "../../assets/header-image.png";
import RightBig from "../../assets/rightBig.png";
import RightSmall from "../../assets/rightSmall.png";
import LeftBig from "../../assets/leftBig.png";
import LeftSmall from "../../assets/leftSmall.png";
import { FaHome } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { IoIosPricetags } from "react-icons/io";
import { MdRateReview } from "react-icons/md";
import { ImBlog } from "react-icons/im";



function Header() {
	const navigate = useNavigate();
	const[isToggle,setIsToggle]=useState(false);
	const closeMenu=()=>{
		if(isToggle){
			setIsToggle(false);
		}
	}
	return (
		<>
			<section
				className={`w-[100%] bg-[linear-gradient(251.29deg,#7F3CE0_0.57%,#461096_99.97%)] font-inter relative z-0 
					
				`}onClick={()=>closeMenu()}
			>
				<article className='w-[90%] m-auto flex justify-between py-5 items-center'>
					<div
						onClick={() => navigate("/")}
						className='z-10 cursor-pointer'
					>
						<svg
							width='152'
							height='51'
							viewBox='0 0 152 51'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M65.1164 21.8203C65.3295 16.7812 61.931 13.8835 56.7322 13.8835C51.1072 13.8835 46.1853 17.7933 45.0134 24.8139C43.8309 32.0582 47.5703 36.2983 53.5255 36.2983C59.0014 36.2983 62.8472 32.5589 64.0191 28.5426H59.3849C58.5646 30.8544 56.3913 32.218 53.7705 32.218C50.5958 32.218 48.8593 29.8956 49.6051 25.3679C50.3828 20.6804 53.1633 17.9638 56.6576 17.9638C59.0759 17.9638 60.5674 19.402 60.5141 21.8203H65.1164ZM73.7207 36.3196C78.6639 36.3196 82.2754 32.9531 83.0957 27.946C83.9267 22.8537 81.3912 19.4233 76.4054 19.4233C71.4516 19.4233 67.8401 22.7791 67.0304 27.8075C66.1888 32.8892 68.7243 36.3196 73.7207 36.3196ZM74.1788 32.804C71.9416 32.804 71.1426 30.7372 71.6007 27.9247C72.0695 25.0376 73.6462 22.8857 75.9473 22.8857C78.1845 22.8857 78.9729 24.9631 78.5254 27.7862C78.046 30.6733 76.4693 32.804 74.1788 32.804ZM91.0236 36.2663C93.655 36.2663 95.2743 34.7429 96.1372 33.3793H96.329L95.8922 36H100.367L103.989 14.1818H99.4504L98.0868 22.3849H97.9483C97.5754 21.0533 96.5314 19.4233 93.7935 19.4233C90.1926 19.4233 86.6983 22.2145 85.7715 27.8395C84.8659 33.3153 87.2736 36.2663 91.0236 36.2663ZM93.0158 32.6548C90.7786 32.6548 89.9369 30.6733 90.4163 27.8182C90.8744 24.9844 92.3553 23.0348 94.6031 23.0348C96.8084 23.0348 97.7672 24.8991 97.2878 27.8182C96.8084 30.7372 95.1997 32.6548 93.0158 32.6548ZM111.791 36.3196C115.861 36.3196 118.876 34.3487 120.037 31.3125L115.893 31.0355C115.222 32.282 113.943 32.9318 112.431 32.9318C110.108 32.9318 108.947 31.6747 109.362 29.0966L109.384 28.9794H120.527L120.73 27.733C121.657 22.1719 118.759 19.4233 114.423 19.4233C109.608 19.4233 105.921 22.843 105.08 27.8928C104.206 33.081 106.752 36.3196 111.791 36.3196ZM109.895 26.1669C110.279 24.3665 112.015 22.8111 113.965 22.8111C115.925 22.8111 117.022 24.2173 116.703 26.1669H109.895ZM128.892 19.6364H124.204L127.528 27.8182L121.307 36H125.994L130.106 30.343L132.397 36H137.031L133.526 27.8182L139.631 19.6364H134.975L130.937 25.3572L128.892 19.6364ZM151.33 19.6364H148.24L148.89 15.7159H144.352L143.702 19.6364H141.475L140.9 23.0455H143.137L141.731 31.5682C141.156 34.7642 143.073 36.3516 146.408 36.2237C147.58 36.1918 148.443 35.9574 148.954 35.7976L148.783 32.4205C148.549 32.4631 148.059 32.5696 147.633 32.5696C146.727 32.5696 146.141 32.2287 146.355 30.9716L147.676 23.0455H150.765L151.33 19.6364Z'
								fill='#42B4EE'
							/>
							<path
								d='M44.8275 8.03191L21.8275 21.5319C11.8271 18.0317 2.82793 13.5317 7.82746 7.03169C12.8273 2.03203 22.8275 9.53214 23.8275 8.53214C23.8275 8.53214 25.3279 5.53201 29.3275 0.0319087C36.3279 -0.468217 41.9941 5.03191 44.8275 8.03191Z'
								fill='#42B4EE'
							/>
							<path
								d='M0.402934 20.5C7.90293 22.8333 22.1029 29.3 18.9029 36.5C11.9033 44 -2.59659 37.5 0.402934 20.5Z'
								fill='#42B4EE'
							/>
							<path
								d='M29.4033 35C27.0033 42.6 16.0699 45.5 10.9033 46C23.7033 56.0001 37.9033 48.1667 43.4033 43C39.7366 37.1667 37.4033 40 29.4033 35Z'
								fill='#42B4EE'
							/>
						</svg>
					</div>
					<div className='hidden lg:flex gap-10   items-center font-light z-10'>
						<div
							className=' text-white opacity-80 cursor-pointer'
							onClick={() => navigate("/")}
						>
							Home
						</div>
						<div
							className=' text-white opacity-80 cursor-pointer'
							onClick={() => navigate("/services")}
						>
							Services
						</div>
						<div
							className=' text-white opacity-80 cursor-pointer'
							onClick={() => navigate("/pricing")}
						>
							Pricing
						</div>
						<div
							className=' text-white opacity-80 cursor-pointer'
							onClick={() => navigate("/testimonials")}
						>
							Testimonials
						</div>
						<div
							className=' text-white opacity-80 cursor-pointer'
							onClick={() => navigate("/blog")}
						>
							Blog
						</div>
						<button className='bg-[#36b5eb] text-white py-4 px-5 rounded-md text-base font-medium hover:bg-[#36a4d3]' onClick={()=>navigate("/free-trial")}>
							FREE TRIAL
						</button>
					</div>
					<div onClick={()=>setIsToggle(!isToggle)}  className="block lg:hidden cursor-pointer">
					<svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="30"
  height="30"
  viewBox="0 0 256 256"
  fill="none"
  stroke="none"
  strokeWidth="1"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="10"
  fontFamily="none"
  fontWeight="none"
  fontSize="none"
  textAnchor="none"
  style={{ mixBlendMode: "normal" }}
 
>
  <g transform="scale(5.12,5.12)">
    <path
      d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"
      fill="#ffffff"
      fillRule="nonzero"
    />
  </g>
</svg>
</div>

<div
        className={`fixed top-0 right-0 h-full bg-white text-[#5A1FAF] font-noraml
			 text-[18px] w-52 transform ${
          isToggle ? "-translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-10`}
      >
        <div className="flex flex-col gap-4 p-3">
         <div className={`flex gap-2 p-2  rounded-md cursor-pointer ${window.location.pathname==="/"?"bg-[#e0d1f7]":""}`} onClick={()=>navigate("/")}><FaHome className="h-6 w-6"/>Home</div>
		 <div className={`flex gap-2 p-2  rounded-md cursor-pointer ${window.location.pathname.includes("/services")?"bg-[#e0d1f7]":""}`} onClick={()=>navigate("/services")}><MdOutlineMiscellaneousServices className="h-7 w-7"/>Services</div>
		 <div className={`flex gap-2 p-2  rounded-md cursor-pointer ${window.location.pathname.includes("/pricing")?"bg-[#e0d1f7]":""}`} onClick={()=>navigate("/pricing")}><IoIosPricetags className="h-6 w-6"/>Pricing</div>
		 <div className={`flex gap-2 p-2  rounded-md cursor-pointer ${window.location.pathname.includes("/testimonials")?"bg-[#e0d1f7]":""}`} onClick={()=>navigate("/testimonials")}><MdRateReview/>Testimonials</div>
		 <div className={`flex gap-2 p-2  rounded-md cursor-pointer ${window.location.pathname.includes("/blog")?"bg-[#e0d1f7]":""}`} onClick={()=>navigate("/blog")}><ImBlog/>Blog</div>
		 <button className="bg-[#42B4EE] text-white p-2 rounded-[5px] hover:bg-[#36a4d3]" onClick={()=>navigate("/free-trial")}>Free trial</button>

        </div>
      </div>


					<img
						src={RightBig}
						className='hidden xl:block absolute top-0 right-36 z-0'
					/>
					<img
						src={RightSmall}
						className=' hidden xl:block absolute top-0 right-0 overflow-hidden w-auto z-0'
					/>
					<img
						src={LeftBig}
						className=' hidden xl:block absolute bottom-0 left-[8rem] z-0'
					/>
					<img
						src={LeftSmall}
						className=' hidden xl:block absolute bottom-0 left-0 z-0'
					/>
				</article>
				{window.location.pathname === "/" ? (
					<article className='w-[90%] m-auto flex flex-col gap-5  lg:flex-row  lg:justify-between py-20 items-center'>
						<div className='lg:w-[38%]  flex flex-col gap-4'>
							<h1 className='font-medium text-white text-6xl leading-[70px]'>
								Codext one of the best system in SAAS.
							</h1>
							<p className='text-white opacity-80 font-light leading-[30px] text-base'>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Odio labore eveniet explicabo
								deleniti placeat obcaecati dolor hic delectus!{" "}
							</p>
							<button className='bg-[#36b5eb] text-white p-4 rounded-md w-[190px] text-lg font-normal hover:bg-[#36a4d3]' onClick={()=>navigate("/free-trial")}>
								Try A Live Demo
							</button>
						</div>
						<img
							src={Home_Image}
							alt='home-image'
							className='lg:w-[50%]'
						/>
					</article>
				) : (
					""
				)}
			</section>
		</>
	);
}

export default Header;
