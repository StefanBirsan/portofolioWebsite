import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const OldTV = (props) => {
    const { nodes, materials } = useGLTF('/models/old_tv.glb')
    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>
                <group position={[-15.084, 0, 5.021]} rotation={[0, -0.672, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.leg_MTL_02_0.geometry}
                        material={materials.MTL_02}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Dai_MTL_02_0.geometry}
                        material={materials.MTL_02}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.D_Botton_MTL_02_0.geometry}
                        material={materials.MTL_02}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.button_MTL_02_0.geometry}
                        material={materials.MTL_02}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TV_Sreen_01_0.geometry}
                        material={materials.Sreen_01}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TV_MTL_02_0.geometry}
                        material={materials.MTL_02}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.antenna_MTL_02_0.geometry}
                        material={materials.MTL_02}
                    />
                </group>
                <group position={[4.442, 0, 0.757]} rotation={[0, 0.451, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TV_02_MTL_02_0.geometry}
                        material={materials.MTL_02}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TV_02_screen_10_0.geometry}
                        material={materials.screen_10}
                    />
                </group>
                <group position={[-8.282, 0, -0.806]} rotation={[0, -0.407, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TV_04_MTL_01_0.geometry}
                        material={materials.MTL_01}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TV_04_screen_04_0.geometry}
                        material={materials.screen_04}
                    />
                </group>
                <group position={[-1.791, 0, -1.1]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TV_05_MTL_01_0.geometry}
                        material={materials.MTL_01}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TV_05_screen_05_0.geometry}
                        material={materials.screen_05}
                    />
                </group>
                <group position={[-9.387, 2.745, -3.914]} rotation={[0, -0.695, 0]} scale={0.644}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TV_06_MTL_01_0.geometry}
                        material={materials.MTL_01}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TV_06_screen_06_0.geometry}
                        material={materials.screen_06}
                    />
                </group>
                <group
                    position={[-24.326, 17.65, -8.206]}
                    rotation={[0, -0.312, -Math.PI / 2]}
                    scale={0.883}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TV_07_MTL_01_0.geometry}
                        material={materials.MTL_01}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TV_07_screen_07_0.geometry}
                        material={materials.screen_07}
                    />
                </group>
                <group position={[0.996, -0.128, -14.095]} rotation={[0, -0.296, 0]} scale={1.5}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TV_08_MTL_01_0.geometry}
                        material={materials.MTL_01}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TV_08_screen_08_0.geometry}
                        material={materials.screen_08}
                    />
                </group>
                <group position={[-5.281, 17.756, -7.719]} rotation={[0, -0.579, 0]} scale={0.535}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TV_09_MTL_01_0.geometry}
                        material={materials.MTL_01}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TV_09_screen_09_0.geometry}
                        material={materials.screen_09}
                    />
                </group>
                <group position={[-2.856, 0, -0.793]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.PC_01_MTL_01_0.geometry}
                        material={materials.MTL_01}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.PC_01_Sreen_02_0.geometry}
                        material={materials.Sreen_02}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.TV_03_MTL_01_0.geometry}
                    material={materials.MTL_01}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.TV_03_sreen_03_0.geometry}
                    material={materials.sreen_03}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/old_tv.glb')

export default OldTV;