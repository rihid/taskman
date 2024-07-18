import React, { useState } from "react";
import Layout from "../components/layout";
import TaskCard from "../components/task-card";
import Button from "../components/button";
import { PlusIcon } from "@heroicons/react/24/solid";
import AddTaskForm from "../components/add-task-form";
import EditTaskForm from "../components/edit-task-form";
import TabMenu from "../components/tab-menu";

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
    schedulde_date: null,
    start_date: null,
    end_date: null,
    status: 'todo'
  },
  {
    id: 2,
    name: 'Pakai Data Statis Dulu 2',
    category: 'Daily',
    description: 'Ini adalah contoh data dummy dulu',
    schedulde_date: null,
    start_date: null,
    end_date: null,
    status: 'doing'
  }
]
function HomePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [isOpenForm, setIsOpenForm] = useState(false)
  const [isOpenEditForm, setIsOpenEditForm] = useState(false)

  const [tasks, setTasks] = useState(TASKS);
  const [selectedTask, setSelectedTask] = useState({ id: null, name: '', category: '', description: '' })

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
    setTasks([
      ...tasks,
      task
    ])
    setIsOpenForm(false)
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  const editTask = (id, newTask) => {
    setTasks(tasks.map((task) => task.id === id ? newTask : task))
    setIsOpenEditForm(false)
  }


  return (
    <>
      <Layout>
        <div className="max-w-full md:max-w-5xl mx-auto py-10">
          <div className="text-4xl font-bold text-foreground pb-6">Task Management</div>
          <div className="flex flex-col gap-4 md:flex-row items-center justify-between my-6">
            <TabMenu
              dataMenu={TABMENU}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <div className="">
              <Button
                color="primary"
                onClick={handleOpenForm}
              >
                <PlusIcon className="w-6 h-6" />
              </Button>
            </div>
          </div>
          {activeTab === 0 &&
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tasks.filter(task => task.status === 'todo').map(task =>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tasks.filter(task => task.status === 'doing').map(task =>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tasks.filter(task => task.status === 'done').map(task =>
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
