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
      <div className="flex justify-start items-center gap-2 my-2">
        <div className="bg-green-100 text-foreground text-sm rounded-full px-2 py-1 text-center"
        >
          {task.category}
        </div>
      </div>
      <div className="absolute right-1 top-1 inset-y-0 flex">
        <div className="flex items-center justify-center bg-slate-100 hover:bg-slate-200 w-12 h-12 p-2 rounded-full cursor-pointer"
        >
          <ArrowRightIcon className="w-6 h-6 text-foreground" />
        </div>
      </div>
    </div>
  )
}

export default TaskCard;