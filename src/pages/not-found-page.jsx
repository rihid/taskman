import React from 'react';
import Button from '../components/button';

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center py-20">
      <div className="w-96 h-auto">
        <img src="/not-found.svg"
          alt="not-found"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="max-w-md mx-auto w-full mt-12">
        <h4 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Page not found</h4>
        <p
          className="text-foreground text-base font-normal mb-10"
        >
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
      </div>
      <div className="max-w-[300px] mx-auto w-full">
        <a href="/">
          <Button
            label="Go To Homepage"
            color="primary"
          />
        </a>
      </div>
    </div>
  )
}

export default NotFoundPage;