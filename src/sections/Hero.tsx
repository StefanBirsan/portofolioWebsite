import { Suspense, useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import OldScreens from "../3Dmodels/OldScreens";
import CanvasLoader from "../Components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { useDrag } from "@use-gesture/react";
import { Euler } from "three";

const Hero = () => {
    const [textColor, setTextColor] = useState('');
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [rotation, setRotation] = useState(new Euler(0, 0, 0));

    const words = [
        { text: "Student" },
        { text: "Developer" },
        { text: "Youtuber" }
    ];

    const sequence = words.flatMap((word, index) => [
        () => setTimeout(() => setTextColor(word.color), index * 3000),
        word.text,
        3000
    ]);

    // handle drag rotation
    const bind = useDrag(({ offset: [x] }) => {
        setRotation(new Euler(0, x / 100, 0));
    });

    //handle the horizontal rotation
    useEffect(() => {
        if (isMobile && window.DeviceOrientationEvent) {
            const handleOrientation = (event) => {
                const alpha = event.alpha ? THREE.MathUtils.degToRad(event.alpha) : 0; // Rotation around y-axis
                setRotation(new Euler(0, alpha, 0));
            };

            window.addEventListener("deviceorientation", handleOrientation);
            return () => {
                window.removeEventListener("deviceorientation", handleOrientation);
            };
        }
    }, [isMobile]);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10">
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

            <div className="w-full h-full absolute inset-0 z-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        {/* Lights */}
                        <color attach="background" args={['black']} />
                        <hemisphereLight intensity={0.35} groundColor="black" position={[0, 50, 0]} />
                        <spotLight position={[10, 20, 10]} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[-10, 10, 5]} intensity={0.5} castShadow />

                        {isMobile ? (
                            <group {...bind()} rotation={rotation}>
                                <OldScreens
                                    scale={2.7}
                                    position={[0, -10, 3]}
                                />
                            </group>
                        ) : (
                            <group rotation={rotation}>
                                <OldScreens
                                    scale={3.05}
                                    position={[0, -10, 3]}
                                    wrotation={[0, -Math.PI / 2, 0]}
                                />
                            </group>
                        )}
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Hero;
