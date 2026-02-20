'use client'
import { LoginForm } from "./component/login-form"

export default function Page() {
  return (
    <section className='relative min-h-screen flex items-center '>
    {/* Background */}
     
    {/* Fixed Background Image */}
    <div
      className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1620200423727-8127f75d7f53?w=1600')",
      }}
    />

    {/* Dark Overlay */}
    <div className="fixed inset-0 bg-black/60 -z-10" />
      {/* content */}
    <main className='w-full max-w-md mx-auto p-6'>
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
    </main>
  </section>
    
  )
}
