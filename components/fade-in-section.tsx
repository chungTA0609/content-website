"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface FadeInSectionProps {
    children: ReactNode
    className?: string
    delay?: number // delay in ms
    threshold?: number // visibility threshold (0-1)
    animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" // animation type
}

export function FadeInSection({
    children,
    className = "",
    delay = 0,
    threshold = 0.1,
    animation = "fade-up",
}: FadeInSectionProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const isMobile = useMobile()

    // Adjust animation duration and delay for mobile
    const duration = isMobile ? 800 : 1000
    const actualDelay = isMobile ? Math.min(delay, 300) : delay // Reduce delay on mobile

    useEffect(() => {
        // Check if IntersectionObserver is available (for older browsers)
        if (!("IntersectionObserver" in window)) {
            setIsVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                // When the element is visible
                if (entry.isIntersecting) {
                    // Add a small delay if specified
                    if (actualDelay) {
                        setTimeout(() => {
                            setIsVisible(true)
                        }, actualDelay)
                    } else {
                        setIsVisible(true)
                    }
                    // Once it's visible, we don't need to observe anymore
                    if (ref.current) {
                        observer.unobserve(ref.current)
                    }
                }
            },
            {
                threshold, // Trigger when at least 10% of the element is visible by default
                rootMargin: "0px", // No margin
            },
        )

        const currentRef = ref.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [actualDelay, threshold])

    // Determine animation styles based on the animation type
    const getAnimationStyles = () => {
        if (!isVisible) {
            switch (animation) {
                case "fade-up":
                    return "opacity-0 translate-y-10"
                case "fade-in":
                    return "opacity-0"
                case "fade-left":
                    return "opacity-0 -translate-x-10"
                case "fade-right":
                    return "opacity-0 translate-x-10"
                default:
                    return "opacity-0 translate-y-10"
            }
        }
        return "opacity-100 translate-y-0 translate-x-0"
    }

    return (
        <div
            ref={ref}
            className={cn(`transition-all ease-out`, `duration-${duration}`, getAnimationStyles(), className)}
            style={{
                transitionDuration: `${duration}ms`,
                willChange: "opacity, transform",
            }}
        >
            {children}
        </div>
    )
}

