import React, { useState } from 'react';
import Button from './button';
import { XMarkIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { Tooltip } from 'react-tooltip';
const initialTask = {
  id: null,
  name: '',
  category: '',
  description: '',
  status: 'todo',
}
function AddTaskForm({ onClose, addTask }) {
  const [task, setTask] = useState(initialTask);
  // Methods
  const handleChange = (e) => {
    const { name, value } = e.target
    setTask({
      ...task,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name || !task.category || !task.description) return;
    addTask(task)
    setTask(initialTask);
  }
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-500/50">
      <div className="fixed top-0 right-0 w-full md:w-[440px] h-full bg-background overflow-auto">
        <div className="flex justify-between border-b">
          <div className="p-6">
            <div className="text-xl font-bold">Create Task</div>
          </div>
          <div className="p-6">
            <Button
              size="icon"
              onClick={onClose}
            >
              <XMarkIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>
        <form
          action="post"
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 p-6"
        >
          <div>
            <label htmlFor="title" className="block font-semibold text-lg mb-2">Title</label>
            <input
              type="text"
              name="name"
              value={task.name}
              onChange={handleChange}
              required
              className="px-6 py-2 rounded-md bg-slate-50 border border-slate-200 w-full h-8"
            />
          </div>
          <div>
            <label htmlFor="title" className="block font-semibold text-lg mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={task.category}
              onChange={handleChange}
              required
              className="px-6 py-2 rounded-md bg-slate-50 border border-slate-200 w-full h-8"
            />
          </div>
          <div>
            <label htmlFor="title" className="block font-semibold text-lg mb-2">Description</label>
            <textarea
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
              rows="3"
              className="px-6 py-2 rounded-md bg-slate-50 border border-slate-200 w-full"
            ></textarea>
          </div>
          <div>
            <label htmlFor="status" className="block font-semibold text-lg mb-2">
              <span className="flex items-center gap-2">
                <span>Status</span>
                <InformationCircleIcon data-tooltip-id='status-info' className="w-5 h-5 cursor-pointer" />
              </span>
              <Tooltip
                id="status-info"
                place="top"
                variant="warning"
                content="Status hanya bisa ditambahkan di menu edit"
              />
            </label>
            <select
              name="status"
              id=""
              value={task.status}
              onChange={handleChange}
              className="flex items-center w-full px-6 py-2 rounded-md bg-slate-50 border border-slate-200 text-slate-500"
              disabled
            >
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div>
            <Button type="submit" color="primary">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTaskForm;