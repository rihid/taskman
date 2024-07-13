import React from 'react';
import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';

function TaskCard(props) {
  const { task, showEditForm, deleteTask } = props;
  return (
    <div className="relative flex flex-col justify-beetwen gap-2 rounded-xl bg-background px-8 py-6 border border-foreground/30 hover:border-foreground/60 hover:shadow-lg"
    >
      <h5 className="text-xl leading-7 font-semibold text-foreground">{task.name}</h5>
      <div className=" text-slate-500 my-2">
        <p>{task.description}</p>
      </div>
      <div className="flex justify-between items-center gap-2 my-2">
        <span className="inline-block bg-green-100 text-foreground text-sm rounded-full px-2 py-1 text-center">
          {task.category}
        </span>
        <button
          type='button'
          onClick={() => deleteTask(task.id)}
          className="inline-block text-red-500 cursor-pointer order-2"
        >
          <TrashIcon className="w-4 h-4" />
        </button>
      </div>
      <div className="absolute right-1 top-1 flex">
        <button 
          type='button'
          onClick={() => showEditForm(task)}
          className="flex items-center justify-center bg-slate-100 hover:bg-slate-200 w-12 h-12 p-2 rounded-full cursor-pointer"
        >
          <ArrowRightIcon className="w-6 h-6 text-foreground" />
        </button>
      </div>
    </div>
  )
}

export default TaskCard;