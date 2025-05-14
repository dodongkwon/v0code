import Link from "next/link"
import { ChevronRight, Zap, FileText, ExternalLink, MessageSquare, Users, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ManualDownloadButton from "@/components/manual-download-button"
import SiteFooter from "@/components/site-footer"

// Sample FAQ data
const faqs = [
  {
    id: 1,
    question: "TAB-E 설치 후 데이터가 표시되지 않습니다.",
    category: "기술지원",
    date: "2025-04-12",
  },
  {
    id: 2,
    question: "전력 사용량 데이터를 엑셀로 내보내는 방법이 궁금합니다.",
    category: "사용방법",
    date: "2025-04-10",
  },
  {
    id: 3,
    question: "알림 설정은 어디서 변경할 수 있나요?",
    category: "사용방법",
    date: "2025-04-08",
  },
  {
    id: 4,
    question: "요금제 변경은 어떻게 하나요?",
    category: "결제/요금",
    date: "2025-04-05",
  },
  {
    id: 5,
    question: "계정 정보 변경 방법을 알려주세요.",
    category: "계정관리",
    date: "2025-04-03",
  },
]

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <Link href="/" className="text-xl font-bold">
              TAB-E
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#overview" className="text-sm font-medium hover:text-primary">
              개요
            </Link>
            <Link href="/#features" className="text-sm font-medium hover:text-primary">
              기능
            </Link>
            <Link href="/#benefits" className="text-sm font-medium hover:text-primary">
              혜택
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium hover:text-primary">
              고객 사례
            </Link>
            <Link href="/#pricing" className="text-sm font-medium hover:text-primary">
              요금제
            </Link>
            <Link href="/#community" className="text-sm font-medium hover:text-primary">
              커뮤니티
            </Link>
            <Link href="/#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
            <Link href="/support" className="text-sm font-medium text-primary">
              고객지원
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden md:inline-flex">
              <Link href="/#contact">로그인</Link>
            </Button>
            <Button asChild>
              <Link href="/#contact">문의하기</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">고객지원 센터</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  TAB-E 사용 중 궁금한 점이나 문제가 있으신가요? 사용자 매뉴얼과 자주 묻는 질문을 확인하세요.
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-16">
              {/* User Manual Section */}
              <div>
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-6">
                  <h2 className="text-2xl font-bold tracking-tighter">사용자 매뉴얼</h2>
                </div>

                <Card className="overflow-hidden border-primary">
                  <CardHeader className="bg-primary/5 border-b border-primary/20 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-4 p-3 rounded-full bg-primary/10">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">TAB-E 사용자 매뉴얼</CardTitle>
                          <CardDescription className="mt-1">
                            TAB-E 시스템의 모든 기능과 사용법을 상세히 설명한 종합 가이드입니다.
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        최신 버전 v2.5
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-2/3">
                        <h3 className="text-lg font-medium mb-2">매뉴얼 주요 내용</h3>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>시스템 설치 및 초기 설정 가이드</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>전력 모니터링 및 피크 관리 기능 사용법</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>리포트 생성 및 데이터 분석 방법</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>탄소배출량 계산 및 ESG 보고서 작성 가이드</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>시스템 관리 및 문제 해결 방법</span>
                          </li>
                        </ul>
                      </div>
                      <div className="md:w-1/3 flex flex-col items-center text-center">
                        <div className="p-4 bg-muted rounded-lg mb-6 w-full">
                          <p className="text-sm text-muted-foreground mb-2">
                            PDF 형식의 사용자 매뉴얼을 다운로드하여 언제든지 참고하실 수 있습니다.
                          </p>
                          <p className="text-xs text-muted-foreground">최종 업데이트: 2025년 4월 15일</p>
                        </div>
                        <ManualDownloadButton className="mt-4" version="latest" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Naver Cafe Section integrated into FAQ */}
              <div className="relative mb-12">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#03C75A]/30 to-[#03C75A]/10 rounded-xl blur opacity-30"></div>
                <Card className="relative overflow-hidden border-[#03C75A]/20">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#03C75A]"></div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#03C75A] flex items-center justify-center text-white mr-3">
                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                        </svg>
                      </div>
                      <div>
                        <CardTitle className="text-xl">TAB-E 공식 네이버 카페</CardTitle>
                        <CardDescription className="mt-1">
                          사용자 커뮤니티에서 다른 사용자들과 정보를 공유하고, 질문하고, 최신 소식을 확인하세요.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-3">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
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
                        </div>
                        <div className="mt-4 text-center">
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="text-[#03C75A] hover:text-[#03C75A]/90 hover:bg-[#03C75A]/10"
                          >
                            <Link href="https://cafe.naver.com" target="_blank" rel="noopener noreferrer">
                              더 많은 게시글 보기
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ Section */}
              <div>
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-6">
                  <h2 className="text-2xl font-bold tracking-tighter">자주 묻는 질문</h2>
                </div>

                <div className="space-y-4 mb-12">
                  {faqs.map((faq) => (
                    <Card key={faq.id} className="overflow-hidden">
                      <CardHeader className="p-6 pb-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl">
                              <Link href={`/support/faq/${faq.id}`} className="hover:text-primary">
                                {faq.question}
                              </Link>
                            </CardTitle>
                            <CardDescription className="mt-1 flex items-center gap-2">
                              <Badge variant="outline">{faq.category}</Badge>
                              <span className="text-xs text-muted-foreground">{faq.date}</span>
                            </CardDescription>
                          </div>
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </CardHeader>
                      <CardFooter className="border-t bg-muted/50 px-6 py-3">
                        <Button variant="ghost" size="sm" asChild className="ml-auto">
                          <Link href={`/support/faq/${faq.id}`}>
                            자세히 보기
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center mt-8"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
