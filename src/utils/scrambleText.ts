import gsap from "gsap";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

export function scrambleText(el: HTMLElement, duration = 0.6) {
  const original = el.dataset.text || el.innerText;
  el.dataset.text = original;

  let progress = 0;

  gsap.to(
    {},
    {
      duration,
      ease: "none",
      onUpdate: () => {
        progress += 1 / (duration * 60);

        el.innerText = original
          .split("")
          .map((char, i) =>
            i < progress * original.length
              ? char
              : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join("");
      },
      onComplete: () => {
        el.innerText = original;
      },
    }
  );
}