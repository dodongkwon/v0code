"use client"

import { useEffect, useState, useRef } from "react"

interface CountUpProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  staticText?: string
}

export default function CountUp({ end, duration = 2000, prefix = "", suffix = "", staticText }: CountUpProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<number>(0)
  const startTimeRef = useRef<number | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (staticText) return // 정적 텍스트가 제공되면 애니메이션을 실행하지 않음

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const progress = timestamp - startTimeRef.current
      const percentage = Math.min(progress / duration, 1)

      // Easing function for smoother animation
      const easeOutQuad = (t: number) => t * (2 - t)
      const easedProgress = easeOutQuad(percentage)

      countRef.current = Math.floor(easedProgress * end)
      setCount(countRef.current)

      if (percentage < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [end, duration, staticText])

  if (staticText) {
    return <span className="whitespace-nowrap">{staticText}</span>
  }

  return (
    <span className="whitespace-nowrap">
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
