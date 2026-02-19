import React from 'react'
import Form from './components/Form'

const page = () => {
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
         <Form/> 
      </main>
    </section>
  )
}

export default page
