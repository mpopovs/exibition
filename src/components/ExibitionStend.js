import { useMemo } from "react";
import * as THREE from "three";



const Texture = ({ texture, pos, rotate }) => {
    return (
      <mesh  position={pos} rotation-y={rotate} >
        <planeBufferGeometry   attach="geometry" args={[5, 5]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    );
  };
  const Exibition = ({ url, pos, rotate }) => {
    const texture = useMemo(() => new THREE.TextureLoader().load(url), [url]);
    return <Texture pos={pos} texture={texture} rotate={rotate} />;
  };

  export default Exibition;