"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Zap, ChevronRight, Check, AlertCircle, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import SiteFooter from "@/components/site-footer"
import { useToast } from "@/hooks/use-toast"

export default function SignupPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [step, setStep] = useState<number>(1)
  const [progress, setProgress] = useState<number>(33)
  const [formData, setFormData] = useState({
    termsAgreed: false,
    privacyAgreed: false,
    kepcoAgreed: false,
    companyName: "",
    managerName: "",
    phone: "",
    email: "",
    userId: "",
    password: "",
    confirmPassword: "",
    kepcoId: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [userIdAvailable, setUserIdAvailable] = useState<boolean | null>(null)

  // 전화번호 자동 포맷팅
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 3) {
      return numbers
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`
    }
  }

  // 입력 필드 변경 처리
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name === "phone") {
      setFormData({ ...formData, [name]: formatPhoneNumber(value) })
    } else if (name === "userId" && value.trim() !== "") {
      setFormData({ ...formData, [name]: value })
      setUserIdAvailable(null) // 사용자 ID 변경 시 중복 체크 상태 초기화
    } else {
      setFormData({ ...formData, [name]: value })
    }

    // 에러 메시지 제거
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  // 체크박스 변경 처리
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({ ...formData, [name]: checked })
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  // 사용자 ID 중복 체크
  const checkUserIdAvailability = () => {
    if (!formData.userId.trim()) {
      setErrors({ ...errors, userId: "사용자 ID를 입력해주세요." })
      return
    }

    // 실제 구현에서는 API 호출로 대체
    setTimeout(() => {
      // 예시: 'admin', 'test'는 이미 사용 중인 ID로 가정
      const isAvailable = !["admin", "test"].includes(formData.userId.toLowerCase())
      setUserIdAvailable(isAvailable)

      if (!isAvailable) {
        setErrors({ ...errors, userId: "이미 사용 중인 ID입니다." })
      } else {
        toast({
          title: "사용 가능한 ID입니다.",
          description: "입력하신 ID는 사용 가능합니다.",
          variant: "default",
        })
      }
    }, 500)
  }

  // 1단계 유효성 검사
  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.termsAgreed) {
      newErrors.termsAgreed = "이용약관에 동의해주세요."
    }

    if (!formData.privacyAgreed) {
      newErrors.privacyAgreed = "개인정보 처리방침에 동의해주세요."
    }

    if (!formData.kepcoAgreed) {
      newErrors.kepcoAgreed = "한전 데이터 제공 동의를 완료해주세요."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // 2단계 유효성 검사
  const validateStep2 = () => {
    const newErrors: Record<string, string> = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (!formData.companyName.trim()) {
      newErrors.companyName = "회사명을 입력해주세요."
    }

    if (!formData.managerName.trim()) {
      newErrors.managerName = "담당자 이름을 입력해주세요."
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "연락처를 입력해주세요."
    } else if (formData.phone.replace(/\D/g, "").length !== 11) {
      newErrors.phone = "올바른 연락처 형식이 아닙니다."
    }

    if (!formData.email.trim()) {
      newErrors.email = "이메일 주소를 입력해주세요."
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다."
    }

    if (!formData.userId.trim()) {
      newErrors.userId = "사용자 ID를 입력해주세요."
    } else if (userIdAvailable === null) {
      newErrors.userId = "ID 중복 확인을 해주세요."
    } else if (userIdAvailable === false) {
      newErrors.userId = "이미 사용 중인 ID입니다."
    }

    if (!formData.password.trim()) {
      newErrors.password = "비밀번호를 입력해주세요."
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = "비밀번호는 8자 이상, 대소문자, 숫자, 특수문자를 포함해야 합니다."
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "비밀번호 확인을 입력해주세요."
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다."
    }

    if (!formData.kepcoId.trim()) {
      newErrors.kepcoId = "KEPCO API 고유 식별자를 입력해주세요."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // 다음 단계로 이동
  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
      setProgress(66)
    } else if (step === 2 && validateStep2()) {
      setStep(3)
      setProgress(100)
      // 실제 구현에서는 여기서 API 호출하여 회원가입 처리
      // 예시: submitSignupForm(formData)
    }
  }

  // 이전 단계로 이동
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      setProgress(step === 3 ? 66 : 33)
    }
  }

  // 회원가입 완료 후 홈으로 이동
  const handleGoHome = () => {
    router.push("/")
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
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">회원가입</h1>
              <p className="mt-4 text-muted-foreground md:text-lg">TAB-E 서비스 이용을 위한 회원가입을 진행합니다.</p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">진행 상태</span>
                <span className="text-sm font-medium">{step}/3 단계</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between mt-2">
                <span className={`text-xs ${step >= 1 ? "text-primary font-medium" : "text-muted-foreground"}`}>
                  약관 동의
                </span>
                <span className={`text-xs ${step >= 2 ? "text-primary font-medium" : "text-muted-foreground"}`}>
                  정보 입력
                </span>
                <span className={`text-xs ${step >= 3 ? "text-primary font-medium" : "text-muted-foreground"}`}>
                  가입 완료
                </span>
              </div>
            </div>

            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>약관 및 동의</CardTitle>
                  <CardDescription>
                    서비스 이용을 위해 아래 약관에 동의해주세요. 모든 항목에 동의해야 다음 단계로 진행할 수 있습니다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border rounded-lg">
                      <Tabs defaultValue="terms">
                        <TabsList className="w-full grid grid-cols-2">
                          <TabsTrigger value="terms">이용약관</TabsTrigger>
                          <TabsTrigger value="privacy">개인정보 처리방침</TabsTrigger>
                        </TabsList>
                        <TabsContent value="terms" className="p-4">
                          <div className="h-64 overflow-y-auto text-sm">
                            <h3 className="font-bold mb-2">TAB-E 서비스 이용약관</h3>
                            <p className="mb-4">제 1장 총칙</p>
                            <p className="mb-2">제 1조 (목적)</p>
                            <p className="mb-4">
                              본 약관은 주식회사 DITAB(이하 "회사"라 합니다)이 제공하는 TAB-E 서비스(이하 "서비스"라
                              합니다)의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을
                              규정함을 목적으로 합니다.
                            </p>
                            <p className="mb-2">제 2조 (정의)</p>
                            <p className="mb-4">
                              1. "서비스"란 회사가 제공하는 에너지 관리 솔루션 및 관련 서비스를 의미합니다.
                              <br />
                              2. "이용자"란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 회원 및 비회원을 말합니다.
                              <br />
                              3. "회원"이란 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로
                              제공받으며 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
                            </p>
                            <p className="mb-2">제 3조 (약관의 효력 및 변경)</p>
                            <p className="mb-4">
                              1. 본 약관은 서비스를 이용하고자 하는 모든 이용자에게 적용됩니다.
                              <br />
                              2. 회사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항에
                              게시하거나 기타 방법으로 회원에게 공지함으로써 효력이 발생합니다.
                              <br />
                              3. 회원은 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 회원 탈퇴를 요청할 수
                              있으며, 변경된 약관의 효력 발생일 이후에도 서비스를 계속 이용할 경우 약관의 변경사항에
                              동의한 것으로 간주됩니다.
                            </p>
                            <p className="mb-2">제 4조 (서비스의 제공 및 변경)</p>
                            <p className="mb-4">
                              1. 회사는 다음과 같은 서비스를 제공합니다.
                              <br />- 에너지 사용량 모니터링 및 분석 서비스
                              <br />- 전력 피크 관리 서비스
                              <br />- 탄소배출량 계산 및 보고서 생성 서비스
                              <br />- 기타 회사가 추가 개발하거나 다른 회사와의 제휴를 통해 제공하는 일체의 서비스
                              <br />
                              2. 회사는 서비스의 내용, 이용방법, 이용시간에 대하여 변경이 있는 경우에는 변경사유, 변경될
                              서비스의 내용 및 제공일자 등을 그 변경 전에 해당 서비스 내 공지사항에 게시하여 통지합니다.
                            </p>
                          </div>
                        </TabsContent>
                        <TabsContent value="privacy" className="p-4">
                          <div className="h-64 overflow-y-auto text-sm">
                            <h3 className="font-bold mb-2">개인정보 처리방침</h3>
                            <p className="mb-4">
                              주식회사 DITAB(이하 '회사'라 함)은 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에
                              관한 법률 등 관련 법령에 따라 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고
                              원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.
                            </p>

                            <p className="mb-2">제 1조 (개인정보의 수집 및 이용 목적)</p>
                            <p className="mb-4">
                              회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적
                              이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에
                              따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                              <br />
                              1. 서비스 제공 및 계약의 이행
                              <br />
                              2. 회원 관리
                              <br />
                              3. 마케팅 및 광고에의 활용
                              <br />
                              4. 서비스 개선 및 개발
                            </p>

                            <p className="mb-2">제 2조 (수집하는 개인정보의 항목 및 수집방법)</p>
                            <p className="mb-4">
                              회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.
                              <br />
                              1. 필수항목: 회사명, 담당자 이름, 연락처, 이메일 주소, 사용자 ID, 비밀번호, KEPCO API 고유
                              식별자
                              <br />
                              2. 선택항목: 부서명, 직위
                              <br />
                              3. 서비스 이용 과정에서 생성되는 정보: IP 주소, 쿠키, 방문 일시, 서비스 이용 기록, 불량
                              이용 기록
                            </p>

                            <p className="mb-2">제 3조 (개인정보의 보유 및 이용기간)</p>
                            <p className="mb-4">
                              회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에
                              동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                              <br />
                              1. 회원 정보: 회원 탈퇴 시까지
                              <br />
                              2. 관련 법령에 의한 정보 보존 사유
                              <br />- 계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래 등에서의 소비자 보호에 관한
                              법률)
                              <br />- 대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래 등에서의 소비자 보호에
                              관한 법률)
                              <br />- 소비자 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래 등에서의 소비자 보호에 관한
                              법률)
                              <br />- 서비스 방문 기록: 3개월 (통신비밀보호법)
                            </p>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="termsAgreed"
                        checked={formData.termsAgreed}
                        onCheckedChange={(checked) => handleCheckboxChange("termsAgreed", checked as boolean)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="termsAgreed"
                          className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                            errors.termsAgreed ? "text-destructive" : ""
                          }`}
                        >
                          이용약관에 동의합니다. (필수)
                        </Label>
                        {errors.termsAgreed && <p className="text-xs text-destructive">{errors.termsAgreed}</p>}
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="privacyAgreed"
                        checked={formData.privacyAgreed}
                        onCheckedChange={(checked) => handleCheckboxChange("privacyAgreed", checked as boolean)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="privacyAgreed"
                          className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                            errors.privacyAgreed ? "text-destructive" : ""
                          }`}
                        >
                          개인정보 처리방침에 동의합니다. (필수)
                        </Label>
                        {errors.privacyAgreed && <p className="text-xs text-destructive">{errors.privacyAgreed}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 border-t pt-4">
                    <h3 className="text-lg font-medium">한국전력공사(KEPCO) 데이터 제공 동의</h3>
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>중요 안내</AlertTitle>
                      <AlertDescription>
                        TAB-E 서비스 이용을 위해서는 한국전력공사(KEPCO) 웹사이트에서 데이터 제공 동의가 필요합니다.
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-4 bg-muted p-4 rounded-lg">
                      <h4 className="font-medium">한전 데이터 제공 동의 절차</h4>
                      <ol className="space-y-2 list-decimal pl-5 text-sm">
                        <li>
                          <Link
                            href="https://www.kepco.co.kr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center"
                          >
                            한국전력공사 웹사이트 <ExternalLink className="h-3 w-3 ml-1" />
                          </Link>
                          에 접속하여 로그인합니다.
                        </li>
                        <li>마이페이지 &gt; 개인정보 관리 메뉴로 이동합니다.</li>
                        <li>
                          &apos;제3자 정보제공 동의&apos; 항목에서 &apos;TAB-E 서비스&apos;를 찾아 동의 체크박스를
                          선택합니다.
                        </li>
                        <li>
                          동의 완료 후 발급되는 &apos;API 고유 식별자&apos;를 복사하여 다음 단계에서 입력해주세요.
                        </li>
                      </ol>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() => window.open("https://www.kepco.co.kr", "_blank")}
                      >
                        한전 웹사이트로 이동 <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="kepcoAgreed"
                        checked={formData.kepcoAgreed}
                        onCheckedChange={(checked) => handleCheckboxChange("kepcoAgreed", checked as boolean)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="kepcoAgreed"
                          className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                            errors.kepcoAgreed ? "text-destructive" : ""
                          }`}
                        >
                          한전 데이터 제공 동의를 완료했습니다. (필수)
                        </Label>
                        {errors.kepcoAgreed && <p className="text-xs text-destructive">{errors.kepcoAgreed}</p>}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => router.push("/")}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> 취소
                  </Button>
                  <Button onClick={handleNextStep}>
                    다음 <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}

            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>사용자 정보 입력</CardTitle>
                  <CardDescription>
                    TAB-E 서비스 이용을 위한 정보를 입력해주세요. 모든 필드는 필수 입력사항입니다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName" className={errors.companyName ? "text-destructive" : ""}>
                        회사명
                      </Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="(주)홍길동"
                        className={errors.companyName ? "border-destructive" : ""}
                      />
                      {errors.companyName && <p className="text-xs text-destructive">{errors.companyName}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="managerName" className={errors.managerName ? "text-destructive" : ""}>
                        담당자 이름
                      </Label>
                      <Input
                        id="managerName"
                        name="managerName"
                        value={formData.managerName}
                        onChange={handleChange}
                        placeholder="홍길동"
                        className={errors.managerName ? "border-destructive" : ""}
                      />
                      {errors.managerName && <p className="text-xs text-destructive">{errors.managerName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className={errors.phone ? "text-destructive" : ""}>
                        연락처
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="010-1234-5678"
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className={errors.email ? "text-destructive" : ""}>
                        이메일 주소
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@company.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="userId" className={errors.userId ? "text-destructive" : ""}>
                      사용자 ID
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="userId"
                        name="userId"
                        value={formData.userId}
                        onChange={handleChange}
                        placeholder="영문, 숫자 조합 6-20자"
                        className={errors.userId ? "border-destructive" : ""}
                      />
                      <Button type="button" variant="outline" onClick={checkUserIdAvailability}>
                        중복 확인
                      </Button>
                    </div>
                    {userIdAvailable === true && (
                      <p className="text-xs text-green-600 flex items-center">
                        <Check className="h-3 w-3 mr-1" /> 사용 가능한 ID입니다.
                      </p>
                    )}
                    {errors.userId && <p className="text-xs text-destructive">{errors.userId}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password" className={errors.password ? "text-destructive" : ""}>
                        비밀번호
                      </Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className={errors.password ? "border-destructive" : ""}
                      />
                      {errors.password ? (
                        <p className="text-xs text-destructive">{errors.password}</p>
                      ) : (
                        <p className="text-xs text-muted-foreground">8자 이상, 대소문자, 숫자, 특수문자 포함</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className={errors.confirmPassword ? "text-destructive" : ""}>
                        비밀번호 확인
                      </Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className={errors.confirmPassword ? "border-destructive" : ""}
                      />
                      {errors.confirmPassword && <p className="text-xs text-destructive">{errors.confirmPassword}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="kepcoId" className={errors.kepcoId ? "text-destructive" : ""}>
                      KEPCO API 고유 식별자
                    </Label>
                    <Input
                      id="kepcoId"
                      name="kepcoId"
                      value={formData.kepcoId}
                      onChange={handleChange}
                      placeholder="한전 웹사이트에서 발급받은 API 고유 식별자"
                      className={errors.kepcoId ? "border-destructive" : ""}
                    />
                    {errors.kepcoId ? (
                      <p className="text-xs text-destructive">{errors.kepcoId}</p>
                    ) : (
                      <p className="text-xs text-muted-foreground">
                        한전 웹사이트에서 데이터 제공 동의 후 발급받은 API 고유 식별자를 입력해주세요.
                      </p>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handlePrevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> 이전
                  </Button>
                  <Button onClick={handleNextStep}>
                    다음 <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}

            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>회원가입 완료</CardTitle>
                  <CardDescription>TAB-E 서비스 회원가입이 성공적으로 완료되었습니다.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col items-center justify-center py-6">
                    <div className="rounded-full bg-primary/10 p-3 mb-4">
                      <Check className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">환영합니다!</h3>
                    <p className="text-center text-muted-foreground mb-4">
                      {formData.companyName}의 {formData.managerName}님, TAB-E 서비스 회원가입이 완료되었습니다.
                      <br />
                      입력하신 이메일({formData.email})로 가입 확인 메일이 발송되었습니다.
                    </p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">다음 단계</h4>
                    <ol className="space-y-2 list-decimal pl-5 text-sm">
                      <li>이메일에 포함된 링크를 클릭하여 계정을 활성화해주세요.</li>
                      <li>로그인 후 대시보드에서 TAB-E 서비스를 시작할 수 있습니다.</li>
                      <li>서비스 이용 중 문의사항이 있으시면 고객센터(052-123-4567)로 연락해주세요.</li>
                    </ol>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button onClick={handleGoHome}>
                    홈으로 이동 <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
