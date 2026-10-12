import LoginForm from '@/components/admin/LoginForm'
import LoginBackground from '@/components/admin/LoginBackground'

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden p-4">
      <LoginBackground />
      <div className="relative z-10 w-full flex justify-center">
        <LoginForm />
      </div>
    </div>
  )
}