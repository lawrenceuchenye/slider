
import { motion } from "framer-motion"
import { useRef,useEffect,useState } from "react"

function App() {
  return (
    <div className="App">
	     <motion.h1 animate={{ x:50 }}>Hello world!</motion.h1>
        </div>
  );
}

export default App;
