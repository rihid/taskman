import React from 'react';

function Button({className, type, color, size, onClick, disabled, label, children}) {
  return (
    <button
      type={type || 'button'}
      className={`${className} w-full whitespace-nowrap font-medium text-sm lg:text-base
      ${size === 'icon' ? 'p-2 rounded-full' : 'px-6 py-2 rounded-xl'}

      ${color === 'primary' ? 'bg-green-500 hover:bg-green-600 border text-background' : ''}
      ${color === 'secondary' ? 'bg-slate-200 hover:bg-slate-300 text-foreground' : ''}
      ${color === 'danger' ? 'bg-red-500 hover:bg-red-600 border-red-500 rounded-full text-white': ''}
    `}
    onClick={onClick}
    disabled={disabled}
    >
      {label ? label : children}
    </button>
  )
}

export default Button;