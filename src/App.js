import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { images } from "./image_urls";

import "./App.css";

function App() {
	const carousel = useRef();
	const [width, setWidth] = useState(0);

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<div className="App">
			<motion.h1 animate={{ x: 50 }}>Hello world!</motion.h1>
			<motion.div ref={carousel} className="carousel">
				<motion.div
					drag="x"
					dragConstraints={{ right: 0, left: -width }}
					className="inner-carousel"
				>
					{images.map((image_url) => {
						return (
							<motion.div className="item" key={image_url}>
								<img src={image_url} alt="" key={image_url} />
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</div>
	);
}

export default App;
