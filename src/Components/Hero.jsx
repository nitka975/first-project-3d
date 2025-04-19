import React from "react";

export default function Hero({ colors }){
    return (
        <group>
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
            <mesh position={[0.75, 1.25, 0]}>
                <boxGeometry args={[0.5, 1.5, 0.5]}/>
                <meshPhongMaterial color={colors.hand}/>
            </mesh>
            {/* {hand Left} */}
            <mesh position={[-0.75, 1.25, 0]}>
                <boxGeometry args={[0.5, 1.5, 0.5]}/>
                <meshPhongMaterial color= {colors.hand}/>
            </mesh>
            {/* {Leg left} */}
            <mesh position={[-0.25, 0, 0]}>
                <boxGeometry args={[0.5, 1.25, 0.5]}/>
                <meshPhongMaterial color={colors.leg}/>
            </mesh>
            {/* {leg right} */}
            <mesh position={[0.25, 0, 0]}>
                <boxGeometry args={[0.5, 1.25, 0.5]}/>
                <meshPhongMaterial color={colors.leg}/>
            </mesh>

        </group>
    ); 
}