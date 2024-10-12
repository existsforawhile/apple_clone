"use client"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Features() {
	useGSAP(() => {
		gsap.to("#features_title", { opacity: 1, delay: 1.5, })
	}, [])


	return(
		<section className="relative overflow-hidden h-full common-padding bg-zinc">
			<div className="screen-max-width">
				<div className="mb-12 w-full">
					<h1 className="section-heading" id="features_title">Explore the full story.</h1>
				</div>
			</div>
		</section>
	)
}
