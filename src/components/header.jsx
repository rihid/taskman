import React from 'react';
import { useAuth } from '../auth/auth-provider';
import Button from './button';
import ppostman from "../../public/postman-icon.svg"
import { RocketLaunchIcon } from '@heroicons/react/24/solid';


function Header() {
  const auth = useAuth();
  return (
    <nav className="top-0 w-full bg-background">
      <div className="max-w-full px-4 md:max-w-5xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-start gap-2">
            <a 
              href="#"
              className="flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-lime-500 to-green-500"
            >
              <RocketLaunchIcon className="w-5 h-5 text-background font-medium" />
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