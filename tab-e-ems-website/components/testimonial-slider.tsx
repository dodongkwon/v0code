"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "김영호",
    company: "울산 금속가공",
    position: "공장장",
    image: "/placeholder.svg?height=200&width=200&query=asian%20male%20factory%20manager%20portrait",
    quote:
      "TAB-E 도입 후 월 전기요금이 약 35만원 절감되었습니다. 특히 피크 관리 기능이 매우 유용했습니다. 초기 투자 비용이 없어 부담 없이 시작할 수 있었고, 4개월 만에 투자 비용을 회수했습니다.",
    stars: 5,
  },
  {
    id: 2,
    name: "박지연",
    company: "시화 플라스틱",
    position: "대표",
    image: "/placeholder.svg?height=200&width=200&query=asian%20female%20CEO%20portrait",
    quote:
      "중소기업에 맞는 에너지 관리 솔루션을 찾고 있었는데, TAB-E가 딱 맞았습니다. 별도 하드웨어 설치 없이 바로 사용할 수 있어 좋았고, 직관적인 인터페이스로 전문가가 아니어도 쉽게 사용할 수 있었습니다.",
    stars: 4,
  },
  {
    id: 3,
    name: "이상철",
    company: "창원 기계부품",
    position: "시설관리자",
    image: "/placeholder.svg?height=200&width=200&query=asian%20male%20facility%20manager%20portrait",
    quote:
      "2025년부터 강화되는 탄소중립 규제에 대비하기 위해 TAB-E를 도입했습니다. 탄소배출량 자동 계산 및 보고서 생성 기능이 매우 유용했고, ESG 보고서 템플릿도 큰 도움이 되었습니다.",
    stars: 5,
  },
]

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-muted p-6 flex flex-col items-center justify-center">
                      <div className="rounded-full overflow-hidden w-24 h-24 mb-4 border-4 border-background">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={200}
                          height={200}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-sm font-medium">{testimonial.company}</p>
                      <div className="flex items-center mt-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < testimonial.stars ? "text-primary fill-primary" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6 flex items-center">
                      <blockquote className="italic text-lg">"{testimonial.quote}"</blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">이전</span>
        </Button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`h-2 w-2 rounded-full ${i === activeIndex ? "bg-primary" : "bg-muted-foreground/30"}`}
              onClick={() => setActiveIndex(i)}
            >
              <span className="sr-only">{i + 1}번 슬라이드</span>
            </button>
          ))}
        </div>

        <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">다음</span>
        </Button>
      </div>
    </div>
  )
}
