import React from 'react';

function Header() {
  return (
    <nav className="top-0 w-full bg-[#FFFFFF]">
      <div className="max-w-full md:max-w-5xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-start gap-[7px]">
            <a href="#">
              <img src="" alt="" />
            </a>
            <a href="#" className="font-bold text-lg text-black leading-7">
              <span>TaskMan</span>
            </a>
          </div>
          <div
            className="bg-[#68E874] border border-[#5ADD66] hover:bg-green-400 font-bold text-white my-[10px] px-[38px] py-[10px] flex items-center cursor-pointer rounded-[50px]"
          >
            <span>Keluar</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;