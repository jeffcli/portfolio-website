
import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (threshold = 0.01, rootMargin = "0px 0px -30% 0px") => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLElement | null>(null);
    const snappedRef = useRef(false);

    useEffect(() => {
        const el = elementRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                setIsVisible(true);

                if (!snappedRef.current) {
                    snappedRef.current = true;
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return { isVisible, elementRef };
};