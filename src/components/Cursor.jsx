import { useEffect, useRef, useState } from "react";

const CURSOR_SPEED = 0.08;

let mouseX = -10;
let mouseY = -10;
let outlineX = 0;
let outlineY = 0;

export const Cursor = () => {
    const cursorOutline = useRef(null);
    const [hoverButton, setHoverButton] = useState(false);

    const animate = () => {
        let distX = mouseX - outlineX;
        let distY = mouseY - outlineY;

        outlineX = outlineX + distX * CURSOR_SPEED;
        outlineY = outlineY + distY * CURSOR_SPEED;

        if (cursorOutline.current) {
            cursorOutline.current.style.left = `${outlineX}px`;
            cursorOutline.current.style.top = `${outlineY}px`;
        }
        requestAnimationFrame(animate);
    };

    useEffect(() => {
        const mouseMoveListener = (event) => {
            mouseX = event.pageX;
            mouseY = event.pageY;
        };

        document.addEventListener("mousemove", mouseMoveListener);
        const animationFrameId = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener("mousemove", mouseMoveListener);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    useEffect(() => {
        const mouseOverListener = (e) => {
            if (
                e.target.tagName.toLowerCase() === "button" ||
                e.target.parentElement.tagName.toLowerCase() === "button" ||
                e.target.tagName.toLowerCase() === "input" ||
                e.target.tagName.toLowerCase() === "textarea"
            ) {
                setHoverButton(true);
            } else {
                setHoverButton(false);
            }
        };

        document.addEventListener("mouseover", mouseOverListener);

        return () => {
            document.removeEventListener("mouseover", mouseOverListener);
        };
    }, []);

    return (
        <div
            className={`invisible md:visible z-50 fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform ${hoverButton
                ? "bg-transparent border-2 border-indigo-900 w-5 h-5"
                : "bg-indigo-500 w-3 h-2"
                }`}
            ref={cursorOutline}
        ></div>
    );
};