"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Zap, Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SiteFooter from "@/components/site-footer"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({
    userId: "",
    password: "",
    rememberMe: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData({ ...loginData, [name]: value })

    // 에러 메시지 제거
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setLoginData({ ...loginData, rememberMe: checked })
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!loginData.userId.trim()) {
      newErrors.userId = "사용자 ID를 입력해주세요."
    }

    if (!loginData.password.trim()) {
      newErrors.password = "비밀번호를 입력해주세요."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // 실제 구현에서는 여기서 API 호출하여 로그인 처리
      // 예시: loginUser(loginData)

      // 로그인 성공 시 대시보드로 이동
      toast({
        title: "로그인 성공",
        description: "TAB-E 대시보드로 이동합니다.",
        variant: "default",
      })

      // 대시보드 페이지가 구현되면 해당 경로로 변경
      router.push("/")
    }
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

      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-md">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">로그인</h1>
              <p className="mt-4 text-muted-foreground">TAB-E 서비스를 이용하기 위해 로그인해주세요.</p>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">로그인</TabsTrigger>
                <TabsTrigger value="signup" onClick={() => router.push("/signup")}>
                  회원가입
                </TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <Card>
                  <form onSubmit={handleLogin}>
                    <CardHeader>
                      <CardTitle>로그인</CardTitle>
                      <CardDescription>TAB-E 서비스 이용을 위한 계정 정보를 입력해주세요.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="userId" className={errors.userId ? "text-destructive" : ""}>
                          사용자 ID
                        </Label>
                        <Input
                          id="userId"
                          name="userId"
                          value={loginData.userId}
                          onChange={handleChange}
                          placeholder="사용자 ID 입력"
                          className={errors.userId ? "border-destructive" : ""}
                        />
                        {errors.userId && <p className="text-xs text-destructive">{errors.userId}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password" className={errors.password ? "text-destructive" : ""}>
                          비밀번호
                        </Label>
                        <div className="relative">
                          <Input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={loginData.password}
                            onChange={handleChange}
                            placeholder="비밀번호 입력"
                            className={errors.password ? "border-destructive pr-10" : "pr-10"}
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            <span className="sr-only">{showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}</span>
                          </button>
                        </div>
                        {errors.password && <p className="text-xs text-destructive">{errors.password}</p>}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="rememberMe"
                            checked={loginData.rememberMe}
                            onCheckedChange={handleCheckboxChange}
                          />
                          <Label htmlFor="rememberMe" className="text-sm">
                            로그인 상태 유지
                          </Label>
                        </div>
                        <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                          비밀번호 찾기
                        </Link>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-4">
                      <Button type="submit" className="w-full">
                        로그인
                      </Button>
                      <div className="text-center text-sm">
                        계정이 없으신가요?{" "}
                        <Link href="/signup" className="text-primary hover:underline">
                          회원가입
                        </Link>
                      </div>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
              <TabsContent value="signup">{/* 이 탭은 실제로 사용되지 않지만, 탭 UI를 위해 필요합니다 */}</TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
