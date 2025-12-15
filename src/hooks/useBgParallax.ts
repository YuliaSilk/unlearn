import { useEffect } from "react";
import gsap from "gsap";

export function useBgParallax() {
  useEffect(() => {
    const layers = gsap.utils.toArray<SVGGElement>(
      "[data-layer]"
    );

    layers.forEach((layer, i) => {
      gsap.to(layer, {
        x: gsap.utils.random(-40, 40),
        y: gsap.utils.random(-30, 30),
        duration: gsap.utils.random(8, 14),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.4,
      });
    });

    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 60;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      gsap.to(layers, {
        x: (i) => x * (0.15 + i * 0.05),
        y: (i) => y * (0.15 + i * 0.05),
        duration: 2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () =>
      window.removeEventListener("mousemove", onMouseMove);
  }, []);
}