import React from 'react';

function Button({className, type, color, size, onClick, disabled, label, children}) {
  return (
    <button
      type={type || 'button'}
      className={`${className} w-full rounded-full whitespace-nowrap
      ${size === 'icon' ? 'p-1' : 'px-6 py-2 '}

      ${color === 'primary' ? 'bg-green-500 hover:bg-green-600 border rounded-xl text-background' : ''}
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