import React, {useState} from 'react';
import Button from '../components/button';
import { useAuth } from '../auth/auth-provider';

function LoginPage() {
  const [loginData, setLoginData] = useState({username: 'emilys', password: 'emilyspass'});
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    })
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    if( loginData.username !== '' && loginData.password !== '') {
      setIsLoading(true)
      await auth.fetchLogin(loginData);
      setIsLoading(false)
      return;
    }
    alert("Username atau Password salah!");
  }
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full max-w-sm bg-background p-4 rounded-lg border border-foreground/30">
        <h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-foreground capitalize my-4">Login into your account</h3>
        <form
          action=""
          className="flex flex-col gap-4 mb-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="username" className="block text-sm mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleChange}
              className="px-6 py-2 rounded-md bg-slate-50 border border-slate-200 w-full h-8"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="px-6 py-2 rounded-md bg-slate-50 border border-slate-200 w-full h-8"
            />
          </div>
          <div className="mt-2">
            <Button 
              type="submit" 
              color="primary"
              className="rounded-lg"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Login'}
            </Button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default LoginPage