import Link from "next/link"
import { ChevronLeft, Zap, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import SiteFooter from "@/components/site-footer"

// Sample FAQ data
const faqs = [
  {
    id: 1,
    question: "TAB-E 설치 후 데이터가 표시되지 않습니다.",
    category: "기술지원",
    date: "2025-04-12",
    answer: `
      <h3>문제 원인</h3>
      <p>TAB-E 설치 후 데이터가 표시되지 않는 문제는 주로 다음과 같은 원인으로 발생할 수 있습니다:</p>
      
      <ul>
        <li>한국전력 계정 연동이 올바르게 설정되지 않은 경우</li>
        <li>네트워크 연결 문제</li>
        <li>방화벽 설정으로 인한 데이터 수집 제한</li>
        <li>시스템 요구사항을 충족하지 못하는 경우</li>
      </ul>
      
      <h3>해결 방법</h3>
      
      <h4>1. 한국전력 계정 연동 확인</h4>
      <p>설정 메뉴에서 한국전력 계정 정보가 올바르게 입력되었는지 확인하세요. 계정 정보가 변경된 경우 업데이트가 필요할 수 있습니다.</p>
      
      <h4>2. 네트워크 연결 확인</h4>
      <p>TAB-E가 인터넷에 연결되어 있는지 확인하세요. 방화벽 설정에서 TAB-E 애플리케이션이 네트워크 액세스 권한을 가지고 있는지 확인하세요.</p>
      
      <h4>3. 시스템 요구사항 확인</h4>
      <p>TAB-E를 실행하는 컴퓨터가 최소 시스템 요구사항을 충족하는지 확인하세요. 메모리 부족이나 CPU 성능 문제로 데이터 처리가 지연될 수 있습니다.</p>
      
      <h4>4. 애플리케이션 재시작</h4>
      <p>TAB-E 애플리케이션을 완전히 종료한 후 다시 시작해보세요. 일시적인 오류가 해결될 수 있습니다.</p>
      
      <h3>추가 지원</h3>
      <p>위의 방법으로 문제가 해결되지 않는 경우, 고객지원팀에 문의하세요. 원격 지원을 통해 문제를 해결해 드립니다.</p>
    `,
  },
  {
    id: 2,
    question: "전력 사용량 데이터를 엑셀로 내보내는 방법이 궁금합니다.",
    category: "사용방법",
    date: "2025-04-10",
    answer: `
      <h3>데이터 내보내기 방법</h3>
      <p>TAB-E에서는 다양한 형식으로 전력 사용량 데이터를 내보낼 수 있습니다. 엑셀 형식으로 내보내는 방법은 다음과 같습니다:</p>
      
      <h4>1. 대시보드에서 내보내기</h4>
      <ol>
        <li>TAB-E 대시보드에 로그인합니다.</li>
        <li>상단 메뉴에서 '리포트' 탭을 선택합니다.</li>
        <li>원하는 데이터 범위(일별, 주별, 월별)를 선택합니다.</li>
        <li>화면 우측 상단의 '내보내기' 버튼을 클릭합니다.</li>
        <li>드롭다운 메뉴에서 'Excel (.xlsx)' 옵션을 선택합니다.</li>
        <li>파일이 자동으로 다운로드됩니다.</li>
      </ol>
      
      <h4>2. 예약 보고서 설정</h4>
      <p>정기적으로 데이터를 엑셀로 받고 싶은 경우, 예약 보고서를 설정할 수 있습니다:</p>
      <ol>
        <li>'설정' 메뉴로 이동합니다.</li>
        <li>'보고서 예약' 탭을 선택합니다.</li>
        <li>'새 예약 추가' 버튼을 클릭합니다.</li>
        <li>보고서 유형, 주기(일별, 주별, 월별), 형식(Excel)을 선택합니다.</li>
        <li>이메일 주소를 입력하고 '저장' 버튼을 클릭합니다.</li>
      </ol>
      
      <h3>사용자 지정 데이터 내보내기</h3>
      <p>특정 기간이나 특정 데이터만 내보내고 싶은 경우:</p>
      <ol>
        <li>'고급 분석' 메뉴로 이동합니다.</li>
        <li>'사용자 지정 보고서' 옵션을 선택합니다.</li>
        <li>원하는 데이터 필드와 기간을 선택합니다.</li>
        <li>'내보내기' 버튼을 클릭하고 Excel 형식을 선택합니다.</li>
      </ol>
      
      <h3>참고사항</h3>
      <p>내보낸 Excel 파일에는 다음 정보가 포함됩니다:</p>
      <ul>
        <li>시간대별 전력 사용량</li>
        <li>피크 전력 발생 시점</li>
        <li>기본 요금 및 사용 요금 분석</li>
        <li>이전 기간과의 비교 데이터</li>
        <li>탄소배출량 정보</li>
      </ul>
    `,
  },
]

export default function FaqDetailPage({ params }: { params: { id: string } }) {
  const faqId = Number.parseInt(params.id)
  const faq = faqs.find((f) => f.id === faqId)

  if (!faq) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">존재하지 않는 FAQ입니다.</h1>
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
                      <Badge variant="outline">{faq.category}</Badge>
                      <span className="text-sm text-muted-foreground">{faq.date}</span>
                    </div>
                    <CardTitle className="text-2xl">{faq.question}</CardTitle>
                  </div>
                </CardHeader>
                <Separator />
                <CardContent className="pt-6">
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </CardContent>
              </Card>

              <div className="mt-8">
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-primary" />이 답변이 도움이 되셨나요?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">추가 문의사항이 있으시면 고객센터로 연락해 주세요.</p>
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

      <SiteFooter />
    </div>
  )
}
