// src/hooks/useSwipe.tsx
import { useRef, useState, useEffect } from "react";
import type { TouchEvent } from "react";

interface SwipeProps {
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
}
export function useSwipe({ onSwipeLeft, onSwipeRight }: SwipeProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [startX, setStartX] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);
    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        setStartX(e.touches[0].clientX);
        setIsSwiping(true);
    };
    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        if (!isSwiping) return;
        const currentX = e.touches[0].clientX;
        const diff = startX - currentX;

        if (diff > 50) {
            onSwipeLeft?.();
            setIsSwiping(false);
        } else if (diff < -50) {
            onSwipeRight?.();
            setIsSwiping(false);
        }
    };
    const handleTouchEnd = () => {
        setIsSwiping(false);
    };
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        el.addEventListener("touchstart", handleTouchStart as any, { passive: true });
        el.addEventListener("touchmove", handleTouchMove as any, { passive: true });
        el.addEventListener("touchend", handleTouchEnd as any);
        return () => {
            el.removeEventListener("touchstart", handleTouchStart as any);
            el.removeEventListener("touchmove", handleTouchMove as any);
            el.removeEventListener("touchend", handleTouchEnd as any);
        };
    }, [startX, isSwiping]);
    return ref;
}
