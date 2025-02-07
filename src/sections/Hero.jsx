import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import HackerRoom from "../Components/HackerRoom";
import CanvasLoader from "../Components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import HeroCamera from "../Components/HeroCamera";
import Button from "../Components/Button";

const Hero = () => {
  const ismall = useMediaQuery({ maxWidth: 440 });
  const ismobile = useMediaQuery({ maxWidth: 768 });
  const istablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(ismall, ismobile, istablet);

  return (
    <section id="home" className="min-h-screen flex w-full flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center  font-generalsans">
          Hi, I am Bhuvan<span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Full stack Web Developer</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 17]} />

            <HeroCamera>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>

            <ambientLight intensity={1} />
            <directionalLight intensity={1} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 flex justify-center">
        <Button
          name="Let's work together"
          isBeam
          containerClass="sm:w-fit w-full sm:min-w-96"
          scrollToId="about"
        />
      </div>
    </section>
  );
};

export default Hero;
