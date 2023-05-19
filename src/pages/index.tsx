import AOS from "aos";
import { useEffect } from "react";
import Home from "../templates/Home";

export default function Index() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <>
      <Home />
    </>
  );
}
