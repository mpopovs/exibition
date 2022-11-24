import { useState, useEffect } from 'react'
import { ARButton, XR} from '@react-three/xr'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './App.css'
import Exibition from './components/ExibitionStend'
import { Widget } from "@uploadcare/react-widget"


function App() {
//image planes
  const first =`https://ucarecdn.com/fb8ddf0e-85ad-4c49-b82c-b4818810aec0/`
  const [second, setSecond] = useState(`https://ucarecdn.com/fb8ddf0e-85ad-4c49-b82c-b4818810aec0/`)
  const [third, setThird] = useState(`https://ucarecdn.com/fb8ddf0e-85ad-4c49-b82c-b4818810aec0/`)
  const [forth, setForth] = useState(`https://ucarecdn.com/fb8ddf0e-85ad-4c49-b82c-b4818810aec0/`)
  const [fifth, setFifth] = useState(`https://ucarecdn.com/fb8ddf0e-85ad-4c49-b82c-b4818810aec0/`)
  const [sixth, setSixth] = useState(`https://ucarecdn.com/fb8ddf0e-85ad-4c49-b82c-b4818810aec0/`)
  const [seventh, setSeventh] = useState(`https://ucarecdn.com/fb8ddf0e-85ad-4c49-b82c-b4818810aec0/`)
  const [eigth, setEight] = useState(`https://ucarecdn.com/fb8ddf0e-85ad-4c49-b82c-b4818810aec0/`)
  
  return (
    <>
    {/* image upload */}
     <Widget publicKey='7bf913439f3f9aac4a9b' 
    id='file'
  name='file'
  tabs='file'
 
  previewStep='true'
    multiple
    multipleMax = {7}
    multipleMin = {7}
    imagesOnly = {true}
    crop = {'1:1'}
    imageShrink = {'600x600 95%'}
  
    onFileSelect={async (group) => {
      const files = await Promise.all(group.files());
     const urls = files.map((file) => file.cdnUrl);
           setSecond(urls[0])
           setThird(urls[1])
           setForth(urls[2])
           setFifth(urls[3])
           setSixth(urls[4])
           setSeventh(urls[5])
           setEight(urls[6])
        }} 
   />
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
