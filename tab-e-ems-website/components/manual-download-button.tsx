"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { downloadManual } from "@/app/actions/download-manual"
import { useToast } from "@/hooks/use-toast"

interface ManualDownloadButtonProps {
  version?: string
  className?: string
}

export default function ManualDownloadButton({ version = "latest", className = "" }: ManualDownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleDownload = async () => {
    setIsLoading(true)

    try {
      const result = await downloadManual(version)

      if (result.success && result.url) {
        // 다운로드 링크 생성 및 클릭
        const link = document.createElement("a")
        link.href = result.url
        link.setAttribute("download", result.url.split("/").pop() || "tab-e-manual.pdf")
        link.setAttribute("target", "_blank")
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        toast({
          title: "다운로드가 시작되었습니다",
          description: "매뉴얼이 다운로드 폴더에 저장됩니다.",
          variant: "default",
        })
      } else {
        toast({
          title: "다운로드 오류",
          description: result.error || "매뉴얼 다운로드 중 오류가 발생했습니다.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("다운로드 처리 중 오류:", error)
      toast({
        title: "다운로드 오류",
        description: "매뉴얼 다운로드 중 오류가 발생했습니다. 나중에 다시 시도해주세요.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      className={`w-full bg-primary hover:bg-primary/90 ${className}`}
      onClick={handleDownload}
      disabled={isLoading}
    >
      {isLoading ? (
        "다운로드 중..."
      ) : (
        <>
          사용자 매뉴얼 다운로드 <Download className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  )
}
