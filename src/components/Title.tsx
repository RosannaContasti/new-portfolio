"use client";

import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface TitleProps {
  section?: string | null;
  title?: string | undefined;
  className?: string;
}

const Title = ({ section, title, className }: TitleProps) => {
  console.log(section, title);
  const t = useTranslations(section);
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      const split = new SplitText(titleRef.current, { type: "chars" });

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 100,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        stagger: {
          amount: 0.6,
          from: "random",
        },
      });

      return () => {
        split.revert();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div ref={titleRef} className={`${className}`}>
      {t(title) || title}
    </div>
  );
};

export default Title;
