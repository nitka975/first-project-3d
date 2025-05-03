import { Canvas,  } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

import Boy from "./Boy";
import Hero from "./Hero"
import Tree from "./Tree"



export default function Scene(){
    const colorsScena = useControls("Hero colors Scena", {
        head: "#f00",
        body: "#0f0",
        hand: "#00f",
        leg: "#0ff"
    });
    return(
        <Canvas camera ={{position: [0, 5, 10], fov: 50}}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1}/>
            <OrbitControls/>
            <gridHelper args={[20, 20]}/>

            <Boy position={[0, 0, 0]}/>
            {/* <Hero position= {[-3, 0, 0 ]}/> */}
            <Hero colors= {colorsScena} position={[-3, 0, 0]}/>
            <Tree position={[3, 0, 0]}/>
            
        </Canvas>
    );
}