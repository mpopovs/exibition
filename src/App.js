import { ARButton, XR} from '@react-three/xr'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './App.css'
import Exibition from './components/ExibitionStend'


function App() {

  const first =
  "https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/one_eyed_listeners.png?v=1653503087622";
  const second =
  "https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/one_eyed_listeners.png?v=1653503087622";
  const third =
  "https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/one_eyed_listeners.png?v=1653503087622";
  const forth =
  "https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/one_eyed_listeners.png?v=1653503087622";
  const fifth =
  "https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/one_eyed_listeners.png?v=1653503087622";
  const sixth =
  "https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/one_eyed_listeners.png?v=1653503087622";
  const seventh =
  "https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/one_eyed_listeners.png?v=1653503087622";
  const eigth =
  "https://cdn.glitch.global/89f42e75-f6d4-4696-9efe-aa8d1cdb61e8/one_eyed_listeners.png?v=1653503087622";
// 
  
  return (
    <>
      <ARButton />
      <Canvas camera={{ position: [0, 0, 10], fov: 30 }}>
      <ambientLight />
        <XR>
          <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />

          <Exibition url={first} pos={[0, 0, -5]} rotate={0}/>
          <Exibition url={second} pos={[5.5, 0, -2.5]} rotate={-0.8}/>
          <Exibition url={third} pos={[8, 0, 3]} rotate={-1.5}/>
          <Exibition url={forth} pos={[6, 0, 9]} rotate={4}/>
          <Exibition url={fifth} pos={[0, 0, 12]} rotate={3.2}/>
          <Exibition url={sixth} pos={[-6, 0, 10]} rotate={2.45}/>
          <Exibition url={seventh} pos={[-8.6, 0, 4.5]} rotate={-4.6}/>
          <Exibition url={eigth} pos={[-5.5, 0, -2.5]} rotate={0.8}/>
        </XR>
      </Canvas>
    </>
  )
}

export default App;
