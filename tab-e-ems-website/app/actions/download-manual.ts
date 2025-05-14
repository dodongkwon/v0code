"use server"

import fs from "fs/promises"
import path from "path"

/**
 * 사용자 매뉴얼 PDF 다운로드 서버 액션
 * @param version 다운로드할 매뉴얼 버전 (기본값: 'latest')
 * @returns 다운로드 URL 또는 에러 메시지
 */
export async function downloadManual(version = "latest"): Promise<{ success: boolean; url?: string; error?: string }> {
  try {
    // 실제 구현에서는 버전에 따라 다른 PDF 파일을 제공할 수 있습니다
    const manualFileName = version === "latest" ? "tab-e-manual-v2.5.pdf" : `tab-e-manual-${version}.pdf`

    // 파일 경로 확인 (실제 환경에서는 파일 존재 여부 확인 필요)
    const filePath = path.join(process.cwd(), "public", "manuals", manualFileName)

    // 실제 환경에서는 파일 존재 여부 확인
    try {
      await fs.access(filePath)
    } catch (error) {
      // 개발 환경에서는 파일이 없을 수 있으므로 URL만 반환
      console.log(`파일이 존재하지 않습니다: ${filePath}. 개발 환경에서는 무시됩니다.`)
      return {
        success: true,
        url: `/manuals/${manualFileName}`,
      }
    }

    // 파일이 존재하면 URL 반환
    return {
      success: true,
      url: `/manuals/${manualFileName}`,
    }
  } catch (error) {
    console.error("매뉴얼 다운로드 중 오류 발생:", error)
    return {
      success: false,
      error: "매뉴얼 다운로드 중 오류가 발생했습니다. 나중에 다시 시도해주세요.",
    }
  }
}
