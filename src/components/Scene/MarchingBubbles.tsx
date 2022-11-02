import { Color, CylinderGeometry, MathUtils } from 'three'
import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Instances, Instance, Environment, ContactShadows, MarchingCubes, MarchingCube } from '@react-three/drei'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { useControls } from 'leva'
import useSpline from '@splinetool/r3f-spline'

const particles = Array.from({ length: 20 }, () => ({
	factor: MathUtils.randInt(20, 100),
	speed: MathUtils.randFloat(0.01, 1),
	xFactor: MathUtils.randFloatSpread(80),
	yFactor: MathUtils.randFloatSpread(40),
	zFactor: MathUtils.randFloatSpread(40),
}))
const params = {
	color: 0xffffff,
	transmission: 1,
	opacity: 1,
	metalness: 0,
	roughness: 0,
	ior: 1.5,
	thickness: 0.01,
	specularIntensity: 1,
	specularColor: new Color('#ffffff'),
	envMapIntensity: 1,
	lightIntensity: 100,
	exposure: 1,
	depthWrite: false,
}
const cylinderGeo = new CylinderGeometry(5, 5, 10, 64, 64)

export default function MarchingBubbles() {
	return (
		<>
			{/* <color attach='background' args={['#f0f0f0']} /> */}
			{/* <fog attach='fog' args={['white', 60, 110]} /> */}
			{/* <pointLight position={[100, 10, -50]} intensity={20} castShadow />
			<pointLight position={[-100, -100, -100]} intensity={10} color='red' /> */}
			<Bubbles />
			{/* <meshPhysicalMaterial
					metalness={params.metalness}
					ior={params.ior}
					roughness={params.roughness}
					thickness={params.thickness}
					transmission={params.transmission}
					specularIntensity={params.specularIntensity}
					opacity={params.opacity}
					depthWrite={params.depthWrite}
				/> */}

			{/* <ContactShadows position={[0, -30, 0]} opacity={0.6} scale={130} blur={1} far={40} />
			<EffectComposer multisampling={0}>
				<SSAO samples={31} radius={0.1} intensity={30} luminanceInfluence={0.1} color='red' />
			</EffectComposer>
			<Suspense fallback={null}>
				<Environment preset='city' />
			</Suspense> */}
		</>
	)
}

function Bubbles() {
	const ref = useRef<any>(null!)
	const { nodes, materials } = useSpline('https://prod.spline.design/IFI1Wnyxyp8FakmV/scene.splinecode')

	useFrame((state, delta) => {
		if (ref.current) {
			ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, (-state.mouse.x * Math.PI) / 6, 2.75, delta)
			ref.current.rotation.x = MathUtils.damp(ref.current.rotation.x, (-state.mouse.y * Math.PI) / 6, 2.75, delta)
		}
	})
	const {
		transmission,
		attenuationColor,
		clearcoat,
		clearcoatRoughness,
		ior,
		reflectivity,
		sheen,
		sheenRoughness,
		specularIntensity,
		specularColor,
		thickness,
		metalness,
		roughness,
		depthWrite,
	} = useControls('bubbles', {
		transmission: {
			value: 1.08,
			min: 0,
			max: 2,
			step: 0.01,
		},
		metalness: {
			value: 0.1,
			min: 0,
			max: 1,
			step: 0.1,
		},
		roughness: {
			value: 0.4,
			min: 0,
			max: 1,
			step: 0.1,
		},
		attenuationColor: {
			value: '#ffffff',
		},
		clearcoat: {
			value: 0,
			min: 0,
			max: 1,
			step: 0.1,
		},
		clearcoatRoughness: {
			value: 0,
			min: 0,
			max: 1,
			step: 0.1,
		},
		ior: {
			value: 1.5,
			min: 0,
			max: 2.4,
			step: 0.1,
		},
		reflectivity: {
			value: 0.5,
			min: 0,
			max: 1,
			step: 0.1,
		},
		sheen: {
			value: 0,
			min: 0,
			max: 1,
			step: 0.1,
		},
		sheenRoughness: {
			value: 1,
			min: 0,
			max: 1,
			step: 0.1,
		},
		sheenColor: {
			value: '#ffffff',
		},
		specularIntensity: {
			value: 0,
			min: 0,
			max: 1,
			step: 0.1,
		},
		specularColor: {
			value: '#ffffff',
		},
		thickness: {
			value: 4,
			min: 0,
			max: 20,
			step: 0.1,
		},
		depthWrite: {
			value: false,
		},
	})
	return (
		<Instances limit={particles.length} ref={ref} position={[0, 10, 0]}>
			{/* <cylinderGeometry args={[0.5, 0.5, 0.4, 64, 64]}></cylinderGeometry> */}
			<sphereGeometry></sphereGeometry>
			<meshPhysicalMaterial
				transmission={transmission}
				clearcoat={clearcoat}
				clearcoatRoughness={clearcoatRoughness}
				ior={ior}
				reflectivity={reflectivity}
				sheen={sheen}
				sheenRoughness={sheenRoughness}
				specularIntensity={specularIntensity}
				specularColor={specularColor}
				thickness={thickness}
				metalness={metalness}
				roughness={roughness}
				attenuationColor={attenuationColor}
				depthWrite={depthWrite}
			/>
			{/* <meshPhysicalMaterial depthWrite={false} transmission={1} thickness={10} roughness={0.65} /> */}
			{particles.map((data, i) => (
				<Bubble key={i} {...data} />
			))}
		</Instances>
	)
}
interface Parameters {
	factor: number
	speed: number
	xFactor: number
	yFactor: number
	zFactor: number
}
function Bubble({ factor, speed, xFactor, yFactor, zFactor }: Parameters) {
	const ref = useRef<any>(null!)
	useFrame((state) => {
		const t = factor + state.clock.elapsedTime * (speed / 12)
		ref.current.scale.setScalar(Math.max(1.5, Math.cos(t) * 5))
		ref.current.position.set(
			Math.cos(t) + Math.sin(t * 1) / 10 + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
			Math.sin(t) + Math.cos(t * 2) / 10 + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
			Math.sin(t) + Math.cos(t * 2) / 10 + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
		)
	})
	return <Instance ref={ref} />
}
