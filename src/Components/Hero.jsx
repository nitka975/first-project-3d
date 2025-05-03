// import React from "react";


export default function Hero({ colors, position = [0, 0, 0] }){
    return (
        <group position={position}>
            {/* {head} */}
            <mesh position={[0, 2.5, 0]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshPhongMaterial color={colors.head}/>
            </mesh>
            {/* {body} */}
            <mesh position={[0, 1.25, 0]}>
                <boxGeometry args={[1, 1.5, 0.5]}/>
                <meshPhongMaterial color={colors.body}/>
            </mesh>
            {/* {hand Right} */}
            <mesh position={[0.30, 0.2, 0.30]}>
                <boxGeometry args={[0.5, 0.7, 0.5]}/>
                <meshPhongMaterial color={colors.hand}/>
            </mesh>
            {/* {hand Left} */}
            <mesh position={[-0.30, 0.2, 0.30]}>
                <boxGeometry args={[0.5, 0.7, 0.5]}/>
                <meshPhongMaterial color= {colors.hand}/>
            </mesh>
            {/* {Leg left} */}
            <mesh position={[-0.30, 0.2, -0.30]}>
                <boxGeometry args={[0.5, 0.7, 0.5]}/>
                <meshPhongMaterial color={colors.leg}/>
            </mesh>
            {/* {leg right} */}
            <mesh position={[0.30, 0.2, -0.30]}>
                <boxGeometry args={[0.5, 0.7, 0.50]}/>
                <meshPhongMaterial color={colors.leg}/>
            </mesh>

        </group>
    ); 
}