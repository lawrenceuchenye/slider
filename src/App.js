import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { images } from "./image_urls";

import "./App.css"

function App() {
	return (
		<div className="App">
			<motion.h1 animate={{ x: 50 }}>Hello world!</motion.h1>
			<motion.div className="carousel">
				<motion.div className="inner-carousel">
					{images.map((image_url) => {
						return(
							<motion.div className="item">
							   <img src={image_url} alt=""/>
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</div>
	);
}

export default App;
