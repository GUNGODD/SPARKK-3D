import { RootState, useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const ThreeObject: React.FC = () => {
  return (
    <>
      <div className="MainContainer"></div>
    </>
  );
};

export default ThreeObject;

// Box for  the Fiber

function Box(props: any): void {
  const meshRef = useRef();

  // start and hoverd this.state.
  const [hoverd, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // subscribe this component to the  render-loop, reotate the mesh or stop the mesh everytime
  useFrame(
    (state: RootState, delta: number): any =>
      (meshRef.current.rotation.x += delta),
  );
}
