import React from 'react';
import Button from '../components/button';

function LoginPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full max-w-sm bg-background p-4 rounded-lg border border-foreground/30">
        <h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-foreground capitalize my-4">Login into your account</h3>
        <form
          action=""
          className="flex flex-col gap-4 mb-4"
        >
          <div>
            <label htmlFor="title" className="block text-sm mb-2">Username</label>
            <input
              type="text"
              name="name"
              // value=""
              className="px-6 py-2 rounded-md bg-slate-50 border border-slate-200 w-full h-8"
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-sm mb-2">Username</label>
            <input
              type="text"
              name="name"
              // value=""
              className="px-6 py-2 rounded-md bg-slate-50 border border-slate-200 w-full h-8"
            />
          </div>
          <div className="mt-2">
            <Button 
              type="submit" 
              color="primary"
              className="rounded-lg"
            >
              Login
            </Button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default LoginPage