import { useEffect, useRef, useState } from "react";

export default function Reveal({ as: Tag = "div", className = "", children }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) { setShown(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return <Tag ref={ref} className={`rv ${className}${shown ? " in" : ""}`}>{children}</Tag>;
}
