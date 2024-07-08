import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

function TaskCard({task}) {
  console.log(task)
  return (
    <div className="relative flex flex-col justify-beetwen gap-2 rounded-xl bg-background px-8 py-6 border border-foreground/30 hover:border-foreground/60 hover:shadow-lg"
    >
      <h5 className="text-xl leading-7 font-semibold text-foreground">{task.name}</h5>
      <div className=" text-slate-500 my-2">
        <p>{task.description}</p>
      </div>
      <div className="flex justify-start items-center gap-[10px] my-[10px]">
        <div className="bg-[#E3F8E5] text-[#333333] text-sm rounded-full px-[10px] py-1 text-center"
        >
          {task.category}
        </div>
      </div>
      <div className="absolute right-1 top-1 inset-y-0 flex">
        <div className="bg-[#F8F8F8] hover:bg-[#EFEFEF] w-[50px] h-[50px] p-[12px] rounded-full cursor-pointer"
        >
          <ArrowRightIcon className="w-6 h-6 text-[#333333]" />
        </div>
      </div>
    </div>
  )
}

export default TaskCard;