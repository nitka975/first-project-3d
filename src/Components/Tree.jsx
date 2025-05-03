// import Cube from "./Cube";


export default function Boy({ position = [0, 0, 0] }) {
    return (
        <group position={position}>

            {/* <Cube position={[0, 1.5, 0]} size={[0.9, 0.9, 0.9]} color="peachpuff" outline={false} /> */}
            <mesh position={position}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshPhongMaterial color="green"/>
            </mesh>
        </group>
    );
}