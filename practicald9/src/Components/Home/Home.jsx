import React from "react";
import HeroSection from "./HeroSection";
import Feature from "./Feature/Feature";
import Plan from "./Plan/Plan";
import Review from "./Review/Review";
import News from "./News";

function Home() {
	return (
		<div>
			<HeroSection />
			<Feature />
			<Plan />
			<Review/>
			<News/>
		</div>
	);
}

export default Home;
