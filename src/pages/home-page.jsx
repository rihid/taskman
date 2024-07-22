import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import TaskCard from "../components/task-card";
import Button from "../components/button";
import { PlusIcon } from "@heroicons/react/24/solid";
import AddTaskForm from "../components/add-task-form";
import EditTaskForm from "../components/edit-task-form";
import TabMenu from "../components/tab-menu";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const TABMENU = [
  { id: 0, label: 'Todo' },
  { id: 1, label: 'Doing' },
  { id: 2, label: 'Done' },
];

const TASKS = [
  {
    id: 1,
    name: 'Pakai Data Statis Dulu 1',
    category: 'Daily',
    description: 'Ini adalah contoh data dummy dulu',
    status: 'todo'
  },
  {
    id: 2,
    name: 'Pakai Data Statis Dulu 2',
    category: 'Daily',
    description: 'Ini adalah contoh data dummy dulu',
    status: 'doing'
  }
]
function HomePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [isOpenForm, setIsOpenForm] = useState(false)
  const [isOpenEditForm, setIsOpenEditForm] = useState(false)

  const [tasks, setTasks] = useState(TASKS);
  const [selectedTask, setSelectedTask] = useState({ id: null, name: '', category: '', description: '' })
  const [search, setSearch] = useState('');

  // methods
  const handleOpenForm = (e) => {
    setIsOpenForm(true);
  }
  const handleCloseForm = (e) => {
    setIsOpenForm(false);
    setIsOpenEditForm(false);
  }
  const handleShowEditForm = (task) => {
    setSelectedTask(task)
    setIsOpenEditForm(true)
  }

  const addTask = (task) => {
    task.id = tasks.length + 1;
    const addedTask = [...tasks, task]
    setTasks(addedTask);
    localStorage.setItem('taskData', JSON.stringify(addedTask));
    setIsOpenForm(false);
  }
  const deleteTask = (id) => {
    const deletedTask = tasks.filter(task => task.id !== id);
    setTasks(deletedTask);
    localStorage.setItem('taskData', JSON.stringify(deletedTask))
  }
  const editTask = (id, newTask) => {
    const editedTask = tasks.map((task) => task.id === id ? newTask : task);
    setTasks(editedTask);
    localStorage.setItem('taskData', JSON.stringify(editedTask));
    setIsOpenEditForm(false);
  }

  // 
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('taskData'));
    if(storedTasks) {
      setTasks(storedTasks);
    } else {
      setTasks(TASKS);
    }
  }, [])

  return (
    <>
      <Layout>
        <div className="max-w-full px-4 md:max-w-5xl mx-auto py-10">
          <div className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground pb-6">Task Management</div>
          <div className="flex flex-col gap-4 md:flex-row items-center justify-between my-6">
            <TabMenu
              dataMenu={TABMENU}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <div className="flex items-center w-full md:w-auto gap-4">
              <div className="relative grow">
                <div className="absolute left-0 inset-y-0 flex items-center pl-[14px]">
                  <MagnifyingGlassIcon className="h-6 w-6 text-foreground/80" />
                </div>
                <input
                  type="text"
                  placeholder="Cari..."
                  onChange={(e) => { setSearch(e.target.value) }}
                  className="h-10 pl-12 pr-6 py-2 rounded-lg bg-white border border-slate-200 w-full"
                />
              </div>
              <div className="grow-0">
                <Button
                  size="icon"
                  color="primary"
                  onClick={handleOpenForm}
                >
                  <PlusIcon className="w-6 h-6" />
                </Button>

              </div>
            </div>
          </div>
          {activeTab === 0 &&
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tasks.filter(task => {
                // task.status === 'todo'
                if (search === '') {
                  return task.status === 'todo';
                } else if (task.name?.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                  return task.status === 'todo';
                }
              }).map(task =>
                <TaskCard
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                  showEditForm={handleShowEditForm}
                />
              )}
            </div>
          }
          {activeTab === 1 &&
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tasks.filter(task => {
                // task.status === 'doing'
                if (search === '') {
                  return task.status === 'doing';
                } else if (task.name?.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                  return task.status === 'doing';
                }
              }).map(task =>
                <TaskCard
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                  showEditForm={handleShowEditForm}
                />
              )}
            </div>
          }
          {activeTab === 2 &&
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tasks.filter(task => {
                // task.status === 'done'
                if (search === '') {
                  return task.status === 'done';
                } else if (task.name?.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                  return task.status === 'done';
                }
              }).map(task =>
                <TaskCard
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                  showEditForm={handleShowEditForm}
                />
              )}
            </div>
          }

        </div>
        {/* form add */}
        {isOpenForm &&
          <AddTaskForm
            addTask={addTask}
            onClose={handleCloseForm}
          />
        }
        {/* form edit */}
        {isOpenEditForm &&
          <EditTaskForm
            selectedTask={selectedTask}
            editTask={editTask}
            onClose={handleCloseForm}
          />
        }
      </Layout>
    </>
  );
}

export default HomePage;
