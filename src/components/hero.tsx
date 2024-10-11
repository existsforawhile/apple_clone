"use client"
import { useState, useEffect } from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
	  const [videoSrc, setVideoSrc] = useState("/assets/videos/hero.mp4");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 760) {
        setVideoSrc("/assets/videos/smallHero.mp4");
      } else {
        setVideoSrc("/assets/videos/hero.mp4");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useGSAP(() => {
		gsap.to("#hero", { opacity: 1, delay: 1.5, })
		gsap.to("#cta", { y: -50, opacity: 1, delay: 2, })
	}, [])

	return(
		<section className="w-full nav-height bg-black relative">
		<div className="h-5/6 w-full flex-col flex-center">
			<p id="hero" className="hero-title">iPhone 15</p>
			<div className="md:w-10/12 w-9/12">
				<video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
					<source src={videoSrc} type="video/mp4"/>
				</video>
			</div>
		</div>
			
		<div className="flex flex-col items-center opacity-0 translate-y-20" id="cta">
			<a href="#highlights" className="btn">Buy</a>
			<p className="font-normal text-xl">From 199$/month or 999$</p>
		</div>
		</section>
	)
}	
