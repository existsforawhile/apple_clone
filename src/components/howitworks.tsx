"use client"
import Image from "next/image";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {useRef} from "react" 

export default function HowItWork() {
	const videoRef = useRef()
	useGSAP(() => {
		gsap.from("#chip", { 
			scrollTrigger: {
				trigger: "#chip",
				start: "20% bottom"
			},
			opacity: 0,
			scale: 2,
			duration: 2,
			ease: "power2.inOut"	
		})
	}, [])


	return(
		<section className="common-padding">
			<div className="screen-max-width">
				<div id="chip" className="flex-center w-full my-20">
					<Image alt="chip" width="180" height="180" src="/assets/images/chip.jpeg" />
				</div>
				
				<div className="flex flex-col items-center">	
				<h2 className="hiw-title">
					A17 Pro chip. <br /> A monster for gaming.
				</h2>
						<p className="hiw-subtitle">It's here. The biggest redesign in the history of Apple GPUs.</p>
				</div>

				<div className="mt-10 md:mt-20a mb-14">
					<div className="relative h-full flex-center">
					<div className="overflow-hidden">
					<img src="/assets/images/frame.png" className="z-10 relative bg-transparent" alt="frame" />
						
					
					</div>
<div className="hiw-video">
						<video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
							<source type="video/mp4" src="/assets/videos/frame.mp4" />
						</video>
					</div>
					</div>
					<p className="text-gray font-semibold text-center mt-3">
						Honkai: Star Rail
					</p>
				</div>
			</div>
		</section>
	)
}
