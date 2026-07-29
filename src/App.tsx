import AnimatedBackground from "./components/background/AnimatedBackground";

import Navbar from "./components/layout/Navbar";

import Home from "../src/components/pages/Home";

export default function App() {
  return (
    <>
      <AnimatedBackground />

      <Navbar />

      <Home />
    </>
  );
}