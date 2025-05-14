import Link from "next/link"
import { ExternalLink, MessageSquare, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface NaverCafeSectionProps {
  className?: string
}

export default function NaverCafeSection({ className = "" }: NaverCafeSectionProps) {
  // Sample recent posts - in a real implementation, these would come from an API
  const recentPosts = [
    {
      id: 1,
      title: "TAB-E v2.5 업데이트 안내 및 주요 기능 소개",
      author: "관리자",
      date: "2025-04-15",
      comments: 24,
      category: "공지사항",
    },
    {
      id: 2,
      title: "전력 피크 관리 기능 활용 팁 공유합니다",
      author: "전력관리전문가",
      date: "2025-04-12",
      comments: 18,
      category: "팁과 노하우",
    },
    {
      id: 3,
      title: "TAB-E로 월 전기요금 38만원 절약한 사례",
      author: "절약고수",
      date: "2025-04-10",
      comments: 32,
      category: "사용자 후기",
    },
  ]

  return (
    <section id="community" className={`w-full py-12 md:py-24 lg:py-32 ${className}`}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="bg-[#03C75A]/10 hover:bg-[#03C75A]/20 text-[#03C75A] border-[#03C75A]/20"
            >
              커뮤니티
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">TAB-E 공식 네이버 카페</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              TAB-E 사용자들과 함께 정보를 공유하고, 질문하고, 소통하세요.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
          <div className="md:col-span-1 flex flex-col">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <div className="w-16 h-16 rounded-full bg-[#03C75A] flex items-center justify-center text-white">
                <Users className="h-8 w-8" />
              </div>
              <div className="ml-4 text-left">
                <h3 className="text-xl font-bold">네이버 카페</h3>
                <p className="text-sm text-muted-foreground">TAB-E 공식 커뮤니티</p>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h4 className="font-medium mb-2">카페에서 만나보세요</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="bg-[#03C75A]/20 text-[#03C75A] p-1 rounded-full flex-shrink-0">
                    <Users className="h-4 w-4" />
                  </span>
                  <span>5,000명 이상의 TAB-E 사용자</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-[#03C75A]/20 text-[#03C75A] p-1 rounded-full flex-shrink-0">
                    <MessageSquare className="h-4 w-4" />
                  </span>
                  <span>전문가의 빠른 질문 답변</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-[#03C75A]/20 text-[#03C75A] p-1 rounded-full flex-shrink-0">
                    <Calendar className="h-4 w-4" />
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

          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#03C75A]/30 to-[#03C75A]/10 rounded-xl blur opacity-30"></div>
              <Card className="relative overflow-hidden border-[#03C75A]/20">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#03C75A]"></div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-[#03C75A]" />
                    최근 인기 게시글
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="border-b pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-medium hover:text-[#03C75A] transition-colors">
                            <Link href="#" className="flex items-center">
                              {post.title}
                            </Link>
                          </h4>
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>{post.author}</span>
                          <span className="mx-2">•</span>
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span className="flex items-center">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            {post.comments}
                          </span>
                        </div>
                      </div>
                    ))}
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
