import {Suspense, useState} from "react";
import { TypeAnimation } from "react-type-animation";
import { Canvas } from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import OldScreens from "../3Dmodels/OldScreens";
import CanvasLoader from "../Components/CanvasLoader";
import {Leva} from "leva";


const Hero = () => {
    const [textColor, setTextColor] = useState('');

    const words = [
        { text: "Student" },
        { text: "Developer" },
        { text: "Youtuber" }
    ];

    // @ts-ignore
    const sequence = words.flatMap((word, index) => [
        () => setTimeout(() => setTextColor(word.color), index * 3000), word.text, 3000
    ]);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi there, I'm Stefan <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">
                    I'm a <span className="divider"> </span>
                    <span style={{color: textColor}}>
                        <TypeAnimation
                            sequence={sequence}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ color: textColor }}
                            speed={170}
                        />
                    </span>
                </p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0 , 30]}/>
                        <OldScreens scale={3.05} position={[0, -10, 0]} wrotation={[0, -Math.PI/2 , 0]}/>
                        <ambientLight intensity={0.5}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.3}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Hero;
