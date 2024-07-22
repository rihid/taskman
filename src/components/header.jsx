import React from 'react';
import { useAuth } from '../auth/auth-provider';
import Button from './button';

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
          <div className="my-2">
            <Button
              type='button'
              label="Logout"
              color="primary"
              onClick={() => auth.logOut()}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;