import React, { FC, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { Mesh } from 'three'
import gsap from 'gsap'
import ScrollTrigger from 'gsap'
interface Props {
	map: any
	material: any
}
gsap.registerPlugin(ScrollTrigger)
const Face: FC<Props> = ({ map, material }) => {
	const model = useGLTF('/assets/models/faceAnimated.glb', true) as any
	const faceRef = useRef<Mesh>(null!)
	const data = useScroll()
	const { camera } = useThree()

	useFrame((state, delta) => {
		let a = data.range(1 / 3, 1 / 3)
		camera.rotation.y = (Math.PI / 4) * a
		let b = data.range(2 / 3, 1 / 3)
		camera.position.x = b * -16 + 0
		camera.position.y = b * 0 + 0.5
		camera.position.z = b * 0 + 10
	})

	return (
		<>
			<mesh ref={faceRef} geometry={model.nodes.Main_Fluid.geometry} position={[-20, 0, 0]} scale={[4, 4, 4]}>
				<meshPhysicalMaterial
					transmission={material.transmission}
					clearcoat={material.clearcoat}
					clearcoatRoughness={material.clearcoatRoughness}
					ior={material.ior}
					reflectivity={material.reflectivity}
					sheen={material.sheen}
					sheenRoughness={material.sheenRoughness}
					specularIntensity={material.specularIntensity}
					specularColor={material.specularColor}
					thickness={material.thickness}
					metalness={material.metalness}
					roughness={material.roughness}
					attenuationColor={material.attenuationColor}
					depthWrite={material.depthWrite}
				/>
			</mesh>
		</>
	)
}
export default Face
