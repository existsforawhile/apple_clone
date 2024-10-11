"use client"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import VideoCarousel from "./video_carousel";

export default function Highlights() {
	useGSAP(() => {
		gsap.to("#title", {opacity: 1, y:0})
		gsap.to(".link", {opacity: 1, y: 0, duration: 1, stagger: 0.250})
	}, [])

	return(
		<section className="overflow-hidden w-screen h-full common-padding bg-zinc" id="#highlights">
			<div className="sceen-max-width">
				<div className="mb-12 w-full md:flex items-end justify-between">
					<h1 className="section-heading" id="title">Get the highlights.</h1>
					<div className="flex flex-wrap items-end gap-5">

					<p className="link">Watch the film <img src="/assets/images/watch.svg" alt="watch" className="ml-2"/></p>
		<p className="link">Watch the event <img src="/assets/images/right.svg" alt="right" className="ml-2"/></p>

					</div>
				</div>
			</div>
			
			<VideoCarousel />
		</section>
	)
}	
