import Link from "next/link"
import { ChevronLeft, Zap, Calendar, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Sample announcement data
const announcements = [
  {
    id: 1,
    title: "시스템 업데이트 안내",
    category: "공지사항",
    date: "2025-04-15",
    content: `
      <h2>TAB-E 시스템 버전 2.5 업데이트 안내</h2>
      
      <p>안녕하세요, TEA-E 고객님.</p>
      
      <p>TAB-E 시스템의 버전 2.5 업데이트가 2025년 4월 20일에 진행될 예정입니다. 이번 업데이트에는 다음과 같은 새로운 기능과 개선 사항이 포함되어 있습니다.</p>
      
      <h3>주요 업데이트 내용</h3>
      
      <ul>
        <li>실시간 전력 사용량 모니터링 기능 개선</li>
        <li>전력 피크 예측 알고리즘 정확도 향상</li>
        <li>탄소배출량 계산 방식 업데이트</li>
        <li>사용자 인터페이스 개선</li>
        <li>모바일 앱과의 연동 기능 강화</li>
      </ul>
      
      <h3>업데이트 일정</h3>
      
      <p>업데이트는 2025년 4월 20일 오전 2시부터 6시까지 진행될 예정이며, 해당 시간 동안에는 시스템 접속이 제한될 수 있습니다. 업데이트 완료 후에는 별도의 조치 없이 정상적으로 서비스를 이용하실 수 있습니다.</p>
      
      <h3>주의사항</h3>
      
      <p>업데이트 전에 현재 작업 중인 내용을 저장해 주시기 바랍니다. 업데이트 후에는 브라우저 캐시를 삭제하고 재접속하시면 원활한 서비스 이용이 가능합니다.</p>
      
      <p>더 자세한 내용은 <a href="#">업데이트 상세 가이드</a>를 참고해 주세요.</p>
      
      <p>감사합니다.</p>
      <p>TEA-E 기술지원팀</p>
    `,
    isNew: true,
    isImportant: true,
    attachments: [
      { name: "업데이트_가이드.pdf", size: "2.5MB" },
      { name: "신규기능_소개.pptx", size: "4.1MB" },
    ],
  },
]

export default function AnnouncementDetailPage({ params }: { params: { id: string } }) {
  const announcementId = Number.parseInt(params.id)
  const announcement = announcements.find((a) => a.id === announcementId)

  if (!announcement) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">존재하지 않는 공지사항입니다.</h1>
        <Button asChild className="mt-4">
          <Link href="/support">고객지원 센터로 돌아가기</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <Link href="/" className="text-xl font-bold">
              TEA-E
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
            <div className="mx-auto max-w-4xl">
              <Button variant="ghost" size="sm" asChild className="mb-6">
                <Link href="/support">
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  고객지원 센터로 돌아가기
                </Link>
              </Button>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex flex-col space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{announcement.category}</Badge>
                      <span className="text-sm text-muted-foreground">{announcement.date}</span>
                      {announcement.isNew && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          NEW
                        </Badge>
                      )}
                      {announcement.isImportant && <Badge variant="destructive">중요</Badge>}
                    </div>
                    <CardTitle className="text-2xl">{announcement.title}</CardTitle>
                  </div>
                </CardHeader>
                <Separator />
                <CardContent className="pt-6">
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: announcement.content }} />

                  {announcement.attachments && announcement.attachments.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-lg font-medium mb-3">첨부파일</h3>
                      <div className="space-y-2">
                        {announcement.attachments.map((attachment, index) => (
                          <div key={index} className="flex items-center gap-2 p-3 rounded-md border">
                            <FileText className="h-5 w-5 text-primary" />
                            <span className="flex-1">{attachment.name}</span>
                            <span className="text-sm text-muted-foreground">{attachment.size}</span>
                            <Button variant="outline" size="sm">
                              다운로드
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="mt-8 flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/support">
                    <ChevronLeft className="mr-1 h-4 w-4" />
                    목록으로
                  </Link>
                </Button>
                <div className="space-x-2">
                  <Button variant="outline">이전 글</Button>
                  <Button variant="outline">다음 글</Button>
                </div>
              </div>

              <div className="mt-12">
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-primary" />
                      관련 문의가 있으신가요?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      이 공지사항에 대해 추가 문의사항이 있으시면 고객센터로 연락해 주세요.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button>1:1 문의하기</Button>
                      <Button variant="outline">전화 문의: 052-123-4567</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0 bg-muted">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">TEA-E</span>
          </div>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary">
              이용약관
            </Link>
            <Link href="#" className="hover:text-primary">
              개인정보처리방침
            </Link>
            <Link href="#" className="hover:text-primary">
              회사소개
            </Link>
          </nav>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 TEA-E. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
