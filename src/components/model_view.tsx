"use client"
import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import * as THREE from "three"
import {useState, useRef, Suspense} from "react"
import Lights from "./lights"

export default function ModelView({
	index,
	groupRef,
	gsapType,
	controlRef,
	setRotationSize,
	size,
	item
}) {
	return(
		<View
			index={index}
			id={gsapType}
			className={`border-white border w-full h-full ${index === 2 ? "right-[-100%]" : ""}`}
		>
			<ambientLight intensity={0.3} />
			<PerspectiveCamera makeDefault position={[0, 0, 4]} />
			<Lights />
			<Suspense fallback={<div>loading</div>}>
				
			</Suspense>
		</View>
	)
}
