import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

function TaskCard({task}) {
  console.log(task)
  return (
    <div className="relative flex flex-col justify-beetwen gap-[10px] rounded-[30px] bg-white px-[28px] py-[10px]hover:border hover:border-[#E8E8E8]hover:drop-shadow-[0_40px_40px_rgba(0,0,0,0.05)]"
    >
      <h5 className="my-[10px] text-xl leading-7 font-semibold text-[#333333]">{task.name}</h5>
      <div className="flex flex-col text-[#7D7D7D] my-[10px]">
        <p>{task.description}</p>
      </div>
      <div className="flex justify-start items-center gap-[10px] my-[10px]">
        <div className="bg-[#E3F8E5] text-[#333333] text-sm rounded-full px-[10px] py-1 text-center"
        >
          {task.category}
        </div>
      </div>
      <div className="absolute right-1 top-1 inset-y-0 flex">
        <div
          className="bg-[#F8F8F8] hover:bg-[#EFEFEF] w-[50px] h-[50px] p-[12px] rounded-full cursor-pointer"
        >
          <ArrowRightIcon className="w-6 h-6 text-[#333333]" />
          test
        </div>
      </div>
    </div>
  )
}

export default TaskCard;