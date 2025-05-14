import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  BarChart2,
  Shield,
  Zap,
  LineChart,
  Bell,
  Download,
  BarChart,
  PieChart,
  Clock,
  Lightbulb,
  ChevronRight,
  ExternalLink,
  MessageSquare,
  Users,
  Calendar,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import CountUp from "@/components/count-up"
import DashboardPreview from "@/components/dashboard-preview"
import TestimonialSlider from "@/components/testimonial-slider"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">TAB-E</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#overview" className="text-sm font-medium hover:text-primary">
              개요
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              기능
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-primary">
              혜택
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              고객 사례
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              요금제
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
            <Link href="/support" className="text-sm font-medium hover:text-primary">
              고객지원
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden md:inline-flex">
              <Link href="/login">로그인</Link>
            </Button>
            <Button asChild>
              <Link href="/#contact">문의하기</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-background z-0"></div>
          <div className="absolute inset-0 bg-[url('/abstract-energy-grid.png')] bg-cover bg-center opacity-10 z-0"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <Badge className="w-fit" variant="outline">
                  신제품 출시
                </Badge>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <span className="text-primary">TAB-E</span>
                  </h1>
                  <p className="text-xl text-muted-foreground">중소기업용 無시공형 에너지 관리 솔루션</p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    별도 하드웨어 설치 없이 <span className="font-bold text-primary">평균 10%의 에너지 비용 절감</span>
                    과 탄소중립 규제 대응을 지원합니다.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="#contact">
                      무료 체험 신청 <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#demo">데모 보기</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  <div className="flex flex-col items-center bg-background/80 backdrop-blur-sm p-4 rounded-lg border">
                    <div className="text-3xl font-bold text-primary mb-1">
                      <CountUp end={10} suffix="%" />
                    </div>
                    <p className="text-sm text-center">평균 비용 절감</p>
                  </div>
                  <div className="flex flex-col items-center bg-background/80 backdrop-blur-sm p-4 rounded-lg border">
                    <div className="text-3xl font-bold text-primary mb-1">
                      <CountUp end={0} prefix="₩" suffix="원" />
                    </div>
                    <p className="text-sm text-center">초기 설치 비용</p>
                  </div>
                  <div className="flex flex-col items-center bg-background/80 backdrop-blur-sm p-4 rounded-lg border">
                    <div className="text-3xl font-bold text-primary mb-1">
                      <CountUp end={6} suffix="개월" staticText="2개월 무료" />
                    </div>
                    <p className="text-sm text-center">연간 계약 혜택</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-xl blur opacity-30"></div>
                <div className="relative bg-background rounded-xl overflow-hidden border">
                  <DashboardPreview />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">
                  솔루션 개요
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  중소기업을 위한 맞춤형 에너지 관리 솔루션
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  TAB-E는 연간 전력 비용 5천만원 미만의 중소 제조기업을 위해 특별히 설계되었습니다.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="overflow-hidden">
                <div className="h-2 bg-primary"></div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">문제점</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>날로 상승하는 에너지 비용</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>2025년부터 강화되는 탄소중립 규제</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>기존 EMS의 고가 비용과 복잡한 구조</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-2 bg-primary"></div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">해결책</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>별도 하드웨어 설치 없는 소프트웨어 솔루션</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>직관적인 사용자 인터페이스</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>초기설치비용 0원의 합리적 가격</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-2 bg-primary"></div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">효과</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>평균 10%의 에너지 비용 절감</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>탄소배출량 자동 계산 및 보고서 생성</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>6개월 이내 투자 비용 회수</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 bg-background rounded-xl p-6 md:p-8 border">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                <div className="rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32 flex-shrink-0 border-4 border-primary/20">
                  <Image
                    src="/asian-ceo-portrait.png"
                    alt="도현우 CEO"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg md:text-xl italic mb-4">
                    "우리는 중소 제조기업도 전력 데이터 분석과 탄소 관리의 혜택을 누릴 수 있어야 한다고 생각합니다.
                    TAB-E는 별도의 하드웨어 설치 없이 기존 PC에서 바로 사용할 수 있으며, 평균 10%의 에너지 비용 절감
                    효과를 제공합니다."
                  </p>
                  <div>
                    <p className="font-bold">도현우</p>
                    <p className="text-sm text-muted-foreground">DITAB CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">
                  주요 기능
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  중소 제조기업을 위한 맞춤형 에너지 관리
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  TAB-E는 중소 제조기업의 에너지 비용 절감과 탄소중립 대응을 위한 핵심 기능을 제공합니다.
                </p>
              </div>
            </div>

            <Tabs defaultValue="all" className="mt-12">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="all">전체 기능</TabsTrigger>
                  <TabsTrigger value="monitoring">모니터링</TabsTrigger>
                  <TabsTrigger value="management">관리</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="overflow-hidden">
                    <div className="h-1 bg-primary"></div>
                    <CardContent className="p-6">
                      <Download className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">간편한 소프트웨어 솔루션</h3>
                      <p className="text-muted-foreground">별도 하드웨어 설치 없이 기존 PC에서 즉시 사용 가능</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="h-1 bg-primary"></div>
                    <CardContent className="p-6">
                      <Shield className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">안정적인 데이터 관리</h3>
                      <p className="text-muted-foreground">사용자 데이터의 안전한 관리와 백업 시스템 구축</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="h-1 bg-primary"></div>
                    <CardContent className="p-6">
                      <BarChart2 className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">피크 관리 최적화</h3>
                      <p className="text-muted-foreground">전력 피크 발생 패턴 분석 및 알림으로 전력요금 절감 관리</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="h-1 bg-primary"></div>
                    <CardContent className="p-6">
                      <LineChart className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">사용자 친화적 인터페이스</h3>
                      <p className="text-muted-foreground">전문가가 아니어도 쉽게 사용 가능한 대시보드</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="h-1 bg-primary"></div>
                    <CardContent className="p-6">
                      <Zap className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">탄소배출 관리</h3>
                      <p className="text-muted-foreground">전력사용량 기반 탄소배출량 자동 계산 및 보고서 생성</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="h-1 bg-primary"></div>
                    <CardContent className="p-6">
                      <Bell className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">알림선 기능</h3>
                      <p className="text-muted-foreground">
                        사용자가 설정한 전력량 기준에 도달 시 화면 점멸로 시각적 경고
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="h-1 bg-primary"></div>
                    <CardContent className="p-6">
                      <Clock className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">요금 관리</h3>
                      <p className="text-muted-foreground">
                        요일 및 시간대별로 전력 요금 추이를 파악해 요금절감 방안 제시
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="h-1 bg-primary"></div>
                    <CardContent className="p-6">
                      <PieChart className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">리포트 관리</h3>
                      <p className="text-muted-foreground">
                        초보자도 이해할 수 있는 리포트로 전력 및 탄소배출 관리 최적화
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="monitoring" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="overflow-hidden">
                    <div className="h-1 bg-primary"></div>
                    <CardContent className="p-6">
                      <BarChart2 className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">피크 관리 최적화</h3>
                      <p className="text-muted-foreground">전력 피크 발생 패턴 분석 및 알림으로 전력요금 절감 관리</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="h-1 bg-primary"></div>
                    <CardContent className="p-6">
                      <Bell className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">알림선 기능</h3>
                      <p className="text-muted-foreground">
                        사용자가 설정한 전력량 기준에 도달 시 화면 점멸로 시각적 경고
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="h-1 bg-primary"></div>
                    <CardContent className="p-6">
                      <LineChart className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">15분 단위 전력 사용 패턴</h3>
                      <p className="text-muted-foreground">상세한 시간대별 전력 사용량 모니터링으로 낭비 요소 파악</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="management" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="overflow-hidden">
                    <div className="h-1 bg-primary"></div>
                    <CardContent className="p-6">
                      <Zap className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">탄소배출 관리</h3>
                      <p className="text-muted-foreground">전력사용량 기반 탄소배출량 자동 계산 및 보고서 생성</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="h-1 bg-primary"></div>
                    <CardContent className="p-6">
                      <Clock className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">요금 관리</h3>
                      <p className="text-muted-foreground">
                        요일 및 시간대별로 전력 요금 추이를 파악해 요금절감 방안 제시
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="h-1 bg-primary"></div>
                    <CardContent className="p-6">
                      <PieChart className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">리포트 관리</h3>
                      <p className="text-muted-foreground">
                        초보자도 이해할 수 있는 리포트로 전력 및 탄소배출 관리 최적화
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="demo" className="w-full py-12 md:py-24 lg:py-32 bg-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/abstract-grid-pattern.png')] bg-cover bg-center opacity-5"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">
                  데모
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">TAB-E 대시보드 미리보기</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  직관적인 인터페이스로 전문가가 아니어도 쉽게 에너지 사용 현황을 파악할 수 있습니다.
                </p>
              </div>
            </div>

            <div className="relative mx-auto max-w-5xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-xl blur opacity-30"></div>
              <div className="relative bg-background rounded-xl overflow-hidden border shadow-xl">
                <div className="aspect-video w-full">
                  <Image
                    src="/placeholder.svg?key=b5gs8"
                    alt="TAB-E 대시보드"
                    width={1920}
                    height={1080}
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-24"></div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <Button className="bg-primary hover:bg-primary/90">
                    데모 체험하기 <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <BarChart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">실시간 모니터링</h3>
                  </div>
                  <p className="text-muted-foreground">
                    15분 단위로 전력 사용량을 모니터링하여 실시간으로 에너지 사용 현황을 파악할 수 있습니다.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Bell className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">알림 시스템</h3>
                  </div>
                  <p className="text-muted-foreground">
                    설정한 전력량 기준에 도달하면 화면 점멸로 시각적 경고를 제공하여 즉각적인 대응이 가능합니다.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <PieChart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">리포트 생성</h3>
                  </div>
                  <p className="text-muted-foreground">
                    초보자도 이해할 수 있는 직관적인 리포트를 자동으로 생성하여 에너지 사용 패턴을 쉽게 파악할 수
                    있습니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src="/placeholder.svg?key=xuq7h"
                width={1200}
                height={800}
                alt="TAB-E 사용 모습"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center shadow-lg"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">
                    도입 효과
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    평균 10%의 에너지 비용 절감 효과
                  </h2>
                  <p className="text-muted-foreground md:text-lg/relaxed">
                    TAB-E 도입 기업은 평균적으로 연간 8-10%의 에너지 비용을 절감하고 있습니다.
                  </p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-lg">피크 전력 관리를 통한 기본요금 절감: 4-6%</p>
                      <p className="text-muted-foreground">
                        전력 피크 발생 패턴을 분석하고 알림을 제공하여 기본요금을 효과적으로 절감합니다.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-lg">에너지 낭비 패턴 식별 및 개선: 2-4%</p>
                      <p className="text-muted-foreground">
                        15분 단위 전력 사용 패턴 분석을 통해 불필요한 에너지 낭비 요소를 식별하고 개선합니다.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-lg">운영 최적화: 2-3%</p>
                      <p className="text-muted-foreground">
                        요일 및 시간대별 전력 요금 추이를 파악하여 운영 일정을 최적화합니다.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="bg-muted p-6 rounded-lg mt-4">
                  <p className="font-medium">투자 대비 수익률</p>
                  <p className="text-muted-foreground">
                    월 전기요금 300~400만원 기준으로 월 30~40만원 절감 효과가 일반적이며, 이는 구독료의 4~5배에 해당하는
                    투자수익률을 제공합니다. 대부분의 고객이 6개월 이내에 투자 비용을 회수할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">
                  고객 사례
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">실제 고객들의 성공 사례</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  TAB-E를 도입한 기업들의 실제 경험과 성과를 확인하세요.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <TestimonialSlider />
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">
                  요금제
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  중소기업에 적합한 합리적인 가격
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  TAB-E는 중소 제조기업에 적합한 3가지 요금제를 제공합니다.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
              <Card className="overflow-hidden border-border">
                <div className="p-6">
                  <h3 className="text-2xl font-bold">베이직</h3>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    7<span className="text-2xl">만원</span>
                    <span className="ml-1 text-sm font-normal text-muted-foreground">/월</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">또는 연 70만원 (17% 할인)</p>
                </div>
                <div className="bg-muted p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"                        height="24"

                        viewBox="0 0 24 24"

                        fill="none"

                        stroke="currentColor"

                        strokeWidth="2"

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        className="h-4 w-4 text-primary mr-2"

                      >

                        <polyline points="20 6 9 17 4 12"></polyline>

                      </svg>

                      기본 모니터링

                    </li>

                    <li className="flex items-center">

                      <svg

                        xmlns="http://www.w3.org/2000/svg"

                        width="24"

                        height="24"

                        viewBox="0 0 24 24"

                        fill="none"

                        stroke="currentColor"

                        strokeWidth="2"

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        className="h-4 w-4 text-primary mr-2"

                      >

                        <polyline points="20 6 9 17 4 12"></polyline>

                      </svg>

                      월간 리포트

                    </li>

                    <li className="flex items-center">

                      <svg

                        xmlns="http://www.w3.org/2000/svg"

                        width="24"

                        height="24"

                        viewBox="0 0 24 24"

                        fill="none"

                        stroke="currentColor"

                        strokeWidth="2"

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        className="h-4 w-4 text-primary mr-2"

                      >

                        <polyline points="20 6 9 17 4 12"></polyline>

                      </svg>

                      기본 알림

                    </li>

                    <li className="flex items-center">

                      <svg

                        xmlns="http://www.w3.org/2000/svg"

                        width="24"

                        height="24"

                        viewBox="0 0 24 24"

                        fill="none"

                        stroke="currentColor"

                        strokeWidth="2"

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        className="h-4 w-4 text-primary mr-2"

                      >

                        <polyline points="20 6 9 17 4 12"></polyline>

                      </svg>

                      이메일 지원

                    </li>

                  </ul>

                  <Button className="mt-6 w-full bg-primary hover:bg-primary/90">무료 체험 신청</Button>

                </div>

              </Card>

              <Card className="overflow-hidden border-primary relative">

                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">

                  인기

                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-bold">프로</h3>

                  <div className="mt-4 flex items-baseline text-5xl font-bold">

                    15<span className="text-2xl">만원</span>

                    <span className="ml-1 text-sm font-normal text-muted-foreground">/월</span>

                  </div>

                  <p className="mt-1 text-sm text-muted-foreground">또는 연 150만원 (17% 할인)</p>

                </div>

                <div className="bg-muted p-6">

                  <ul className="space-y-3">

                    <li className="flex items-center">

                      <svg

                        xmlns="http://www.w3.org/2000/svg"

                        width="24"

                        height="24"

                        viewBox="0 0 24 24"

                        fill="none"

                        stroke="currentColor"

                        strokeWidth="2"

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        className="h-4 w-4 text-primary mr-2"

                      >

                        <polyline points="20 6 9 17 4 12"></polyline>

                      </svg>

                      고급 분석

                    </li>

                    <li className="flex items-center">

                      <svg

                        xmlns="http://www.w3.org/2000/svg"

                        width="24"

                        height="24"

                        viewBox="0 0 24 24"

                        fill="none"

                        stroke="currentColor"

                        strokeWidth="2"

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        className="h-4 w-4 text-primary mr-2"

                      >

                        <polyline points="20 6 9 17 4 12"></polyline>

                      </svg>

                      주간 리포트

                    </li>

                    <li className="flex items-center">

                      <svg

                        xmlns="http://www.w3.org/2000/svg"

                        width="24"

                        height="24"

                        viewBox="0 0 24 24"

                        fill="none"

                        stroke="currentColor"

                        strokeWidth="2"

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        className="h-4 w-4 text-primary mr-2"

                      >

                        <polyline points="20 6 9 17 4 12"></polyline>

                      </svg>

                      피크 관리

                    </li>

                    <li className="flex items-center">

                      <svg

                        xmlns="http://www.w3.org/2000/svg"

                        width="24"

                        height="24"

                        viewBox="0 0 24 24"

                        fill="none"

                        stroke="currentColor"

                        strokeWidth="2"

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        className="h-4 w-4 text-primary mr-2"

                      >

                        <polyline points="20 6 9 17 4 12"></polyline>

                      </svg>

                      기간별 전력 분석 보고

                    </li>

                    <li className="flex items-center">

                      <svg

                        xmlns="http://www.w3.org/2000/svg"

                        width="24"

                        height="24"

                        viewBox="0 0 24 24"

                        fill="none"

                        stroke="currentColor"

                        strokeWidth="2"

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        className="h-4 w-4 text-primary mr-2"

                      >

                        <polyline points="20 6 9 17 4 12"></polyline>

                      </svg>

                      전화 및 이메일 지원

                    </li>

                  </ul>

                  <Button className="mt-6 w-full bg-primary hover:bg-primary/90">무료 체험 신청</Button>

                </div>

              </Card>

              <Card className="overflow-hidden border-border">

                <div className="p-6">

                  <h3 className="text-2xl font-bold">프리미엄</h3>

                  <div className="mt-4 flex items-baseline text-5xl font-bold">

                    25<span className="text-2xl">만원</span>

                    <span className="ml-1 text-sm font-normal text-muted-foreground">/월</span>

                  </div>

                  <p className="mt-1 text-sm text-muted-foreground">또는 연 250만원 (17% 할인)</p>

                </div>

                <div className="bg-muted p-6">

                  <ul className="space-y-3">

                    <li className="flex items-center">

                      <svg

                        xmlns="http://www.w3.org/2000/svg"

                        width="24"

                        height="24"

                        viewBox="0 0 24 24"

                        fill="none"

                        stroke="currentColor"

                        strokeWidth="2"

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        className="h-4 w-4 text-primary mr-2"

                      >

                        <polyline points="20 6 9 17 4 12"></polyline>

                      </svg>

                      맞춤형 ESG 보고서

                    </li>

                    <li className="flex items-center">

                      <svg

                        xmlns="http://www.w3.org/2000/svg"

                        width="24"

                        height="24"

                        viewBox="0 0 24 24"

                        fill="none"

                        stroke="currentColor"

                        strokeWidth="2"

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        className="h-4 w-4 text-primary mr-2"

                      >

                        <polyline points="20 6 9 17 4 12"></polyline>

                      </svg>

                      전문가 상담 지원

                    </li>

                    <li className="flex items-center">

                      <svg

                        xmlns="http://www.w3.org/2000/svg"

                        width="24"

                        height="24"

                        viewBox="0 0 24 24"

                        fill="none"

                        stroke="currentColor"

                        strokeWidth="2"

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        className="h-4 w-4 text-primary mr-2"

                      >

                        <polyline points="20 6 9 17 4 12"></polyline>

                      </svg>

                      심층 분석

                    </li>

                    <li className="flex items-center">

                      <svg

                        xmlns="http://www.w3.org/2000/svg"

                        width="24"

                        height="24"

                        viewBox="0 0 24 24"

                        fill="none"

                        stroke="currentColor"

                        strokeWidth="2"

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        className="h-4 w-4 text-primary mr-2"

                      >

                        <polyline points="20 6 9 17 4 12"></polyline>

                      </svg>

                      프로 기능 모두 포함

                    </li>

                    <li className="flex items-center">

                      <svg

                        xmlns="http://www.w3.org/2000/svg"

                        width="24"

                        height="24"

                        viewBox="0 0 24 24"

                        fill="none"

                        stroke="currentColor"

                        strokeWidth="2"

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        className="h-4 w-4 text-primary mr-2"

                      >

                        <polyline points="20 6 9 17 4 12"></polyline>

                      </svg>

                      우선 지원

                    </li>

                  </ul>

                  <Button className="mt-6 w-full bg-primary hover:bg-primary/90">무료 체험 신청</Button>

                </div>

              </Card>

            </div>

            <div className="mt-12 bg-muted p-6 rounded-lg text-center">

              <p className="text-lg font-medium mb-2">모든 요금제는 다음을 포함합니다</p>

              <div className="flex flex-wrap justify-center gap-4 mt-4">

                <Badge variant="outline" className="text-sm py-1.5">

                  초기 설치비 0원

                </Badge>

                <Badge variant="outline" className="text-sm py-1.5">

                  1개월 무료 체험

                </Badge>

                <Badge variant="outline" className="text-sm py-1.5">

                  설치 지원 서비스

                </Badge>

                <Badge variant="outline" className="text-sm py-1.5">

                  연간 계약 시 2개월 무료

                </Badge>

              </div>

            </div>

          </div>

        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">

          <div className="container px-4 md:px-6">

            <div className="flex flex-col items-center justify-center space-y-4 text-center">

              <div className="space-y-2">

                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">

                  자주 묻는 질문

                </Badge>

                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">궁금한 점이 있으신가요?</h2>

                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">

                  TAB-E에 대한 자주 묻는 질문과 답변입니다.

                </p>

              </div>

            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">

              <Card>

                <CardContent className="p-6">

                  <h3 className="text-xl font-bold mb-3">TAB-E는 어떻게 설치하나요?</h3>

                  <p className="text-muted-foreground mb-4">

                    웹사이트에서 회원가입 후 문의/견적을 요청하시면 영업 담당자가 전화 상담을 진행합니다. 계약 완료 후

                    회원 계정에 설치 파일 다운로드 권한이 부여되며, 사업장 내 PC에 약 10분 정도의 설치 과정을 거쳐 즉시

                    사용이 가능합니다. 필요시 원격 지원을 통한 설치 가이드를 제공합니다.

                  </p>

                </CardContent>

              </Card>

              <Card>

                <CardContent className="p-6">

                  <h3 className="text-xl font-bold mb-3">어떤 종류의 데이터를 수집하고 분석하나요?</h3>

                  <p className="text-muted-foreground mb-4">

                    한국전력 계정을 통한 전력 사용량 데이터, 15분 단위 전력 사용 패턴, 피크 발생 시점 및 패턴, 일일 전력

                    사용량 조회를 통한 낭비 구간 확인, 전력 사용량 기반 탄소배출량 등을 수집하고 분석합니다. 모든

                    데이터는 안전하게 관리됩니다.

                  </p>

                </CardContent>

              </Card>

              <Card>

                <CardContent className="p-6">

                  <h3 className="text-xl font-bold mb-3">실제로 얼마나 에너지를 절감할 수 있나요?</h3>

                  <p className="text-muted-foreground mb-4">

                    TAB-E 도입 기업은 평균적으로 연간 8-10%의 에너지 비용을 절감하고 있습니다. 피크 전력 관리를 통한

                    기본요금 절감(4-6%), 에너지 낭비 패턴 식별 및 개선(2-4%), 운영 최적화(2-3%)를 통해 월 전기요금

                    300~400만원 기준으로 월 30~40만원의 절감 효과가 일반적입니다.

                  </p>

                </CardContent>

              </Card>

              <Card>

                <CardContent className="p-6">

                  <h3 className="text-xl font-bold mb-3">2025년 탄소중립 정책에 어떻게 대응할 수 있나요?</h3>

                  <p className="text-muted-foreground mb-4">

                    TAB-E는 전력 사용량 기반 탄소배출량 자동 계산, 월간/연간 탄소배출 보고서 생성, 소규모 기업 대상

                    간소화된 ESG 보고서 템플릿, 탄소중립 대응 가이드라인 제공, 에너지 절감을 통한 탄소배출 감축 방안

                    등을 제공하여 2025년부터 강화되는 탄소중립 정책에 대응할 수 있도록 지원합니다.

                  </p>

                </CardContent>

              </Card>

            </div>

            {/* Naver Cafe Section integrated into FAQ */}

            <div className="mt-16 max-w-5xl mx-auto">

              <div className="relative">

                <div className="absolute -inset-1 bg-gradient-to-r from-[#03C75A]/30 to-[#03C75A]/10 rounded-xl blur opacity-30"></div>

                <Card className="relative overflow-hidden border-[#03C75A]/20">

                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#03C75A]"></div>

                  <CardContent className="p-6">

                    <div className="flex flex-col md:flex-row gap-8">

                      <div className="md:w-1/3">

                        <div className="flex items-center mb-6">

                          <div className="w-12 h-12 rounded-full bg-[#03C75A] flex items-center justify-center text-white">

                            <svg

                              viewBox="0 0 24 24"

                              className="h-6 w-6 fill-current"

                              xmlns="http://www.w3.org/2000/svg"

                            >

                              <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />

                            </svg>

                          </div>

                          <div className="ml-4">

                            <h3 className="text-xl font-bold">TAB-E 공식 네이버 카페</h3>

                            <p className="text-sm text-muted-foreground">사용자 커뮤니티</p>

                          </div>

                        </div>

                        <div className="bg-muted p-4 rounded-lg mb-6">

                          <h4 className="font-medium mb-2">카페에서 만나보세요</h4>

                          <ul className="space-y-2 text-sm">

                            <li className="flex items-start gap-2">

                              <span className="bg-[#03C75A]/20 text-[#03C75A] p-1 rounded-full flex-shrink-0">

                                <Users className="h-3 w-3" />

                              </span>

                              <span>5,000명 이상의 TAB-E 사용자</span>

                            </li>

                            <li className="flex items-start gap-2">

                              <span className="bg-[#03C75A]/20 text-[#03C75A] p-1 rounded-full flex-shrink-0">

                                <MessageSquare className="h-3 w-3" />

                              </span>

                              <span>전문가의 빠른 질문 답변</span>

                            </li>

                            <li className="flex items-start gap-2">

                              <span className="bg-[#03C75A]/20 text-[#03C75A] p-1 rounded-full flex-shrink-0">

                                <Calendar className="h-3 w-3" />

                              </span>

                              <span>정기적인 온라인 세미나 및 이벤트</span>

                            </li>

                          </ul>

                        </div>

                        <Button asChild className="w-full bg-[#03C75A] hover:bg-[#03C75A]/90 text-white">

                          <Link href="https://cafe.naver.com" target="_blank" rel="noopener noreferrer">

                            네이버 카페 방문하기

                            <ExternalLink className="ml-2 h-4 w-4" />

                          </Link>

                        </Button>

                      </div>

                      <div className="md:w-2/3">

                        <h3 className="text-lg font-medium mb-4 flex items-center">

                          <MessageSquare className="mr-2 h-5 w-5 text-[#03C75A]" />

                          최근 인기 게시글

                        </h3>

                        <div className="space-y-4">

                          <div className="border-b pb-4">

                            <div className="flex justify-between items-start mb-1">

                              <h4 className="font-medium hover:text-[#03C75A] transition-colors">

                                <Link href="#" className="flex items-center">

                                  TAB-E v2.5 업데이트 안내 및 주요 기능 소개

                                </Link>

                              </h4>

                              <Badge variant="outline" className="text-xs">

                                공지사항

                              </Badge>

                            </div>

                            <div className="flex items-center text-xs text-muted-foreground">

                              <span>관리자</span>

                              <span className="mx-2">•</span>

                              <span>2025-04-15</span>

                              <span className="mx-2">•</span>

                              <span className="flex items-center">

                                <MessageSquare className="h-3 w-3 mr-1" />

                                24

                              </span>

                            </div>

                          </div>

                          <div className="border-b pb-4">

                            <div className="flex justify-between items-start mb-1">

                              <h4 className="font-medium hover:text-[#03C75A] transition-colors">

                                <Link href="#" className="flex items-center">

                                  전력 피크 관리 기능 활용 팁 공유합니다

                                </Link>

                              </h4>

                              <Badge variant="outline" className="text-xs">

                                팁과 노하우

                              </Badge>

                            </div>

                            <div className="flex items-center text-xs text-muted-foreground">

                              <span>전력관리전문가</span>

                              <span className="mx-2">•</span>

                              <span>2025-04-12</span>

                              <span className="mx-2">•</span>

                              <span className="flex items-center">

                                <MessageSquare className="h-3 w-3 mr-1" />

                                18

                              </span>

                            </div>

                          </div>

                          <div className="pb-4">

                            <div className="flex justify-between items-start mb-1">

                              <h4 className="font-medium hover:text-[#03C75A] transition-colors">

                                <Link href="#" className="flex items-center">

                                  TAB-E로 월 전기요금 38만원 절약한 사례

                                </Link>

                              </h4>

                              <Badge variant="outline" className="text-xs">

                                사용자 후기

                              </Badge>

                            </div>

                            <div className="flex items-center text-xs text-muted-foreground">

                              <span>절약고수</span>

                              <span className="mx-2">•</span>

                              <span>2025-04-10</span>

                              <span className="mx-2">•</span>

                              <span className="flex items-center">

                                <MessageSquare className="h-3 w-3 mr-1" />

                                32

                              </span>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </CardContent>

                </Card>

              </div>

            </div>

            <div className="flex justify-center mt-8">

              <Button variant="outline" className="mx-1">

                더 많은 FAQ 보기

              </Button>

            </div>

          </div>

        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">

          <div className="container px-4 md:px-6">

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">

              <div className="flex flex-col justify-center space-y-4">

                <div className="space-y-2">

                  <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">

                    문의하기

                  </Badge>

                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">

                    TAB-E에 대해 더 알고 싶으신가요?

                  </h2>

                  <p className="text-muted-foreground md:text-lg/relaxed">

                    무료 체험 신청 또는 문의사항이 있으시면 연락주세요. 전문 상담원이 빠르게 답변드립니다.

                  </p>

                </div>

                <div className="space-y-4 mt-6">

                  <div className="flex items-center gap-4">

                    <div className="p-2 rounded-full bg-primary/10">

                      <svg

                        xmlns="http://www.w3.org/2000/svg"

                        width="24"

                        height="24"

                        viewBox="0 0 24 24"

                        fill="none"

                        stroke="currentColor"

                        strokeWidth="2"

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        className="h-5 w-5 text-primary"

                      >

                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>

                      </svg>

                    </div>

                    <div>

                      <p className="font-medium">전화 문의</p>

                      <p className="text-muted-foreground">052-123-4567</p>

                    </div>

                  </div>

                  <div className="flex items-center gap-4">

                    <div className="p-2 rounded-full bg-primary/10">

                      <svg

                        xmlns="http://www.w3.org/2000/svg"

                        width="24"

                        height="24"

                        viewBox="0 0 24 24"

                        fill="none"

                        stroke="currentColor"

                        strokeWidth="2"

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        className="h-5 w-5 text-primary"

                      >

                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>

                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>

                      </svg>

                    </div>

                    <div>

                      <p className="font-medium">이메일 문의</p>

                      <p className="text-muted-foreground">info@ditab.co.kr</p>

                    </div>

                  </div>

                  <div className="flex items-center gap-4">

                    <div className="p-2 rounded-full bg-primary/10">

                      <svg

                        xmlns="http://www.w3.org/2000/svg"

                        width="24"

                        height="24"

                        viewBox="0 0 24 24"

                        fill="none"

                        stroke="currentColor"

                        strokeWidth="2"

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        className="h-5 w-5 text-primary"

                      >

                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>

                        <circle cx="12" cy="10" r="3"></circle>

                      </svg>

                    </div>

                    <div>

                      <p className="font-medium">주소</p>

                      <p className="text-muted-foreground">울산광역시 남구 테헤란로 123</p>

                    </div>

                  </div>

                </div>

                <div className="mt-8 bg-muted p-6 rounded-lg">

                  <h3 className="text-lg font-bold mb-2">설치 과정</h3>

                  <ol className="space-y-2 list-decimal pl-5">

                    <li>웹사이트에서 회원가입</li>

                    <li>회원가입 후 문의/견적 요청</li>

                    <li>영업 담당자 전화 상담 진행</li>

                    <li>계약 진행(온라인 또는 오프라인)</li>

                    <li>한국전력 계정 정보 연동 설정</li>

                    <li>설치 파일 다운로드 및 설치</li>

                    <li>사용자 맞춤 설정</li>

                    <li>즉시 데이터 수집 및 분석 시작</li>

                  </ol>

                </div>

              </div>

              <div className="flex flex-col gap-4 rounded-lg border bg-muted/50 p-6">

                <div className="grid gap-4">

                  <div className="grid grid-cols-2 gap-4">

                    <div className="space-y-2">

                      <label

                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"

                        htmlFor="name"

                      >

                        이름

                      </label>

                      <input

                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"

                        id="name"

                        placeholder="홍길동"

                      />

                    </div>

                    <div className="space-y-2">

                      <label

                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"

                        htmlFor="company"

                      >

                        회사명

                      </label>

                      <input

                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"

                        id="company"

                        placeholder="(주)홍길동"

                      />

                    </div>

                  </div>

                  <div className="space-y-2">

                    <label

                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"

                      htmlFor="email"

                    >

                      이메일

                    </label>

                    <input

                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"

                      id="email"

                      placeholder="hong@example.com"

                      type="email"

                    />

                  </div>

                  <div className="space-y-2">

                    <label

                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"

                      htmlFor="phone"

                    >

                      연락처

                    </label>

                    <input

                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="phone"
                      placeholder="010-1234-5678"
                      type="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="interest"
                    >
                      관심 요금제
                    </label>
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="interest"
                    >
                      <option value="">선택해주세요</option>
                      <option value="basic">베이직 (7만원/월)</option>
                      <option value="pro">프로 (15만원/월)</option>
                      <option value="premium">프리미엄 (25만원/월)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      문의내용
                    </label>
                    <textarea
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="message"
                      placeholder="문의하실 내용을 입력해주세요."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    문의하기
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    제출 시{" "}
                    <Link href="#" className="underline text-primary">
                      개인정보 처리방침
                    </Link>
                    에 동의하게 됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
