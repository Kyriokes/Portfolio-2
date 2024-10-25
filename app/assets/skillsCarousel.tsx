import React, { useState, useEffect, useRef } from "react";

interface CarouselProps {
    children: React.ReactNode[];
    speed?: number; // Speed in pixels per second
}

const Carousel: React.FC<CarouselProps> = ({
    children,
    speed = 50, // Default speed in pixels per second
}) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [itemWidth, setItemWidth] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    // Calculate the item width
    useEffect(() => {
        const updateItemWidth = () => {
            if (carouselRef.current && children.length > 0) {
                const totalWidth = carouselRef.current.scrollWidth;
                setItemWidth(totalWidth / children.length);
            }
        };

        updateItemWidth();
        window.addEventListener("resize", updateItemWidth);
        return () => window.removeEventListener("resize", updateItemWidth);
    }, [children]);

    // Handle the continuous movement
    useEffect(() => {
        let animationFrameId: number;
        let lastTime: number;

        const animate = (time: number) => {
            if (lastTime === undefined) {
                lastTime = time;
            }
            const deltaTime = time - lastTime;
            lastTime = time;

            if (!isPaused) {
                setScrollPosition((prevPosition) => {
                    const newPosition =
                        (prevPosition + (speed * deltaTime) / 1000) %
                        (itemWidth * children.length);
                    return newPosition;
                });
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused, speed, itemWidth, children.length]);

    // Handle user interaction for manual scrolling
    const handleMouseDown = (event: React.MouseEvent) => {
        setIsPaused(true);
        const startX = event.clientX;
        const scrollStart = scrollPosition;

        const handleMouseMove = (moveEvent: MouseEvent) => {
            const deltaX = moveEvent.clientX - startX;
            setScrollPosition(
                (scrollStart - deltaX + itemWidth * children.length) %
                    (itemWidth * children.length)
            );
        };

        const handleMouseUp = () => {
            setIsPaused(false);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    const handleTouchStart = (event: React.TouchEvent) => {
        setIsPaused(true);
        const startX = event.touches[0].clientX;
        const scrollStart = scrollPosition;

        const handleTouchMove = (moveEvent: TouchEvent) => {
            const deltaX = moveEvent.touches[0].clientX - startX;
            setScrollPosition(
                (scrollStart - deltaX + itemWidth * children.length) %
                    (itemWidth * children.length)
            );
        };

        const handleTouchEnd = () => {
            setIsPaused(false);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
        };

        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", handleTouchEnd);
    };

    const renderItems = () => {
        const items = React.Children.toArray(children);
        const repeatedItems = [...items, ...items, ...items]; // Repeat items three times
        return repeatedItems.map((child, index) => (
            <div
                key={index}
                className="flex-shrink-0"
                style={{ width: `${itemWidth}px` }}
            >
                {child}
            </div>
        ));
    };

    return (
        <div
            className="relative overflow-hidden"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            ref={carouselRef}
        >
            <div
                className="flex transition-transform duration-100 ease-linear"
                style={{
                    transform: `translateX(-${scrollPosition}px)`,
                    width: `${itemWidth * children.length * 3}px`, // Triple the width for seamless looping
                }}
            >
                {renderItems()}
            </div>
        </div>
    );
};

export default Carousel;
