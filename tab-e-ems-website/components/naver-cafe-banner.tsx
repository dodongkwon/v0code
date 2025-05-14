import Link from "next/link"
import { ExternalLink, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NaverCafeBannerProps {
  className?: string
}

export default function NaverCafeBanner({ className = "" }: NaverCafeBannerProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
      {/* Green accent line at top - Naver brand color */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#03C75A]"></div>

      <div className="flex flex-col md:flex-row items-center gap-6 p-6">
        {/* Naver Cafe Icon/Logo */}
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#03C75A]/10 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#03C75A] flex items-center justify-center text-white">
            <Users className="h-6 w-6" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold mb-1">TAB-E 공식 네이버 카페</h3>
          <p className="text-muted-foreground mb-4">
            사용자 커뮤니티에서 다른 사용자들과 정보를 공유하고, 질문하고, 최신 소식을 확인하세요. TAB-E 전문가와 다른
            사용자들의 도움을 받을 수 있습니다.
          </p>
          <Button asChild className="bg-[#03C75A] hover:bg-[#03C75A]/90 text-white">
            <Link href="https://cafe.naver.com" target="_blank" rel="noopener noreferrer">
              네이버 카페 방문하기
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
