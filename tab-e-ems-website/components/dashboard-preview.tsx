"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="bg-muted p-2 flex space-x-1 rounded-t-lg border-b">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <div className="ml-2 text-xs text-muted-foreground">TAB-E 대시보드</div>
      </div>

      <div className="flex border-b">
        <button
          className={`px-4 py-2 text-sm font-medium ${activeTab === 0 ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}
          onClick={() => setActiveTab(0)}
        >
          실시간 모니터링
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${activeTab === 1 ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}
          onClick={() => setActiveTab(1)}
        >
          피크 관리
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${activeTab === 2 ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}
          onClick={() => setActiveTab(2)}
        >
          리포트
        </button>
      </div>

      <div className="relative aspect-video">
        {activeTab === 0 && (
          <Image src="/energy-dashboard-realtime.png" alt="실시간 모니터링 대시보드" fill className="object-cover" />
        )}
        {activeTab === 1 && (
          <Image src="/power-peak-dashboard.png" alt="피크 관리 대시보드" fill className="object-cover" />
        )}
        {activeTab === 2 && (
          <Image
            src="/placeholder.svg?height=720&width=1280&query=energy%20usage%20reports%20and%20analytics%20dashboard"
            alt="리포트 대시보드"
            fill
            className="object-cover"
          />
        )}
      </div>
    </div>
  )
}
