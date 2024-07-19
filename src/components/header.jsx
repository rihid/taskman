import React from 'react';
import { useAuth } from '../auth/auth-provider';

function Header() {
  const auth = useAuth();
  return (
    <nav className="top-0 w-full bg-background">
      <div className="max-w-full md:max-w-5xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-start gap-2">
            <a href="#">
              <img src="" alt="" />
            </a>
            <a href="#" className="font-bold text-lg text-foreground leading-7">
              <span>TaskMan</span>
            </a>
          </div>
          <div
            onClick={() => auth.logOut()}
            className="bg-green-500 hover:bg-green-600 font-bold text-background my-2 px-10 py-2 flex items-center cursor-pointer rounded-3xl"
          >
            <span>Keluar</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;