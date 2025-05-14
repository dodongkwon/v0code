import Link from "next/link"
import { Zap } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="w-full border-t py-6 md:py-0 bg-muted">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">TAB-E</span>
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
          <Link
            href="https://cafe.naver.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-[#03C75A]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 mr-1 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
            </svg>
            네이버 카페
          </Link>
        </nav>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2025 TAB-E. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
