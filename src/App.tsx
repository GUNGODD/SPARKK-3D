import { BiLogo500Px } from "react-icons/bi";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

export default function App() {
  return (
    <>
      <div
        className=" w-full   "
        style={{
          backgroundColor: "#002700",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Header />
        <Hero />
      </div>
    </>
  );
}
