import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";

export default function Text3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Text
        color="orange"
        fontSize={1}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={"center"}
        font="/fonts/helvetiker_regular.typeface.json"
        position={[0, 0, 0]}
        // bevelEnabled
        bevelThickness={0.03}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        Hola 3D!
      </Text>
    </Canvas>
  );
}
