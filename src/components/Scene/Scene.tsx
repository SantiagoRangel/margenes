import React, { FC, useEffect, useRef } from 'react'
import { Environment, OrbitControls, useGLTF, useScroll } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { RGBELoader } from 'three-stdlib/loaders/RGBELoader'
import { BackSide, Color, DoubleSide, MathUtils, Mesh, Vector3 } from 'three'
import StatsWidget from './StatsWidget'
import Face from './Face'
import Blob from './Blob'
import MarchingBubbles from './MarchingBubbles'
import { LayerMaterial, Depth } from 'lamina'
import { useControls } from 'leva'
import useCheckMobileScreen from '../hooks/useCheckMobileScreen'

interface Props {}

const params = {
	color: 0xffffff,
	// transmission: 1.19,
	transmission: 1.17,
	opacity: 1,
	metalness: 0.1,
	roughness: 0.2,
	ior: 3,
	thickness: 0.9,
	specularIntensity: 0.4,
	specularColor: new Color('#ffffff'),
	depthWrite: true,
}

const Scene: FC<Props> = () => {
	const mobile = useCheckMobileScreen()

	const data = useScroll()

	const { far, near, bgColor1, bgColor2 } = useControls({
		far: {
			value: 640,
			min: 0,
			max: 1000,
			step: 1,
		},
		near: {
			value: 1000,
			min: 0,
			max: 1000,
			step: 1,
		},
		bgColor1: {
			value: '#fe7ff6',
		},
		bgColor2: {
			value: '#00ffff',
		},
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
	} = useControls('Logo, Face', {
		transmission: {
			value: 1.23,
			min: 0,
			max: 5,
			step: 0.01,
		},
		metalness: {
			value: 0.1,
			min: 0,
			max: 1,
			step: 0.1,
		},
		roughness: {
			value: 0.2,
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
			value: 3,
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
			value: 0.4,
			min: 0,
			max: 1,
			step: 0.1,
		},
		specularColor: {
			value: '#ffffff',
		},
		thickness: {
			value: 0.9,
			min: 0,
			max: 20,
			step: 0.1,
		},
		envMapIntensity: {
			value: 1,
			min: 0,
			max: 20,
			step: 0.1,
		},
		depthWrite: {
			value: true,
		},
	})
	useThree(({ camera }) => {
		camera.position.set(0, 0.5, 10)
	})

	const model = useGLTF('/assets/models/mgl3.glb', true) as any
	const map: any = useLoader(RGBELoader as any, '/assets/hdr1.hdr')

	const ref1 = useRef<Mesh>(null!)
	const mglRef = useRef<Mesh>(null!)

	useFrame((state, delta) => {
		// ref1.current.rotation.x = ref1.current.rotation.y = ref1.current.rotation.z += delta
		const offset = data.range(1 / 3, 1 / 3)
		// if (offset === 0) {
		mglRef.current.rotation.y = MathUtils.lerp(
			mglRef.current.rotation.y,
			state.mouse.x * 0.4 + offset * -1.4,
			0.05
		)
		mglRef.current.rotation.x = -MathUtils.lerp(mglRef.current.rotation.x, state.mouse.y * 1, 0.5)
		// } else {
		// mglRef.current.rotation.y = offset * -0.2 * state.mouse.x * 0.4
		// }
	})

	return (
		<>
			{/* <StatsWidget /> */}
			{/* <OrbitControls position={[1, 1, 1]} enableZoom={true} enablePan={true} enableRotate={true} /> */}
			<Environment files='/assets/hdr1.hdr' />
			{/* <directionalLight position={[5, 5, 5]} castShadow></directionalLight> */}
			<ambientLight intensity={0} />
			<pointLight position={[10, 10, 5]} />
			<pointLight position={[-10, -10, -5]} color={'#00ffff'} />
			<mesh ref={ref1} scale={1}>
				<sphereGeometry args={[800, 32, 32]} />
				<LayerMaterial alpha={0} attach='material' side={BackSide}>
					<Depth
						colorA={bgColor1}
						colorB={bgColor2}
						alpha={1}
						mode='normal'
						near={near}
						far={far}
						origin={[100, 100, 100]}
					/>
				</LayerMaterial>
			</mesh>
			<mesh
				ref={mglRef}
				scale={1}
				position={[-0.2, 0, 4]}
				rotation={[0, 0, 0]}
				visible={true}
				geometry={model.nodes.CURVO001.geometry}
			>
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
			</mesh>

			<MarchingBubbles />
			<Face
				map={map}
				material={{
					transmission,
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
					attenuationColor,
					depthWrite,
				}}
			></Face>
			<Blob />
		</>
	)
}
export default Scene
