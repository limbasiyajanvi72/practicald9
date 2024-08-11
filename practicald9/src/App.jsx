import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home/Home";
import Services from "./Components/Services";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import Blog from "./Components/Blog";
import FreeTrial from "./Components/FreeTrial"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/services' element={<Services />} />
					<Route path='/pricing' element={<Pricing />} />
					<Route path='/testimonials' element={<Testimonials />} />
					<Route path='/blog' element={<Blog />} />
					<Route path="/free-trial" element={<FreeTrial/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
