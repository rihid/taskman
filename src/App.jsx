import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/layout";
import TaskCard from "./components/task-card";
import Button from "./components/button";
import { PlusIcon } from "@heroicons/react/24/solid";
import AddTaskForm from "./components/add-task-form";

const TABMENU = [
  { id: 0, label: 'Todo' },
  { id: 1, label: 'Doing' },
  { id: 2, label: 'Done' },
];
const TASKS = [
  {
    id: 1,
    name: 'Pakai Data Statis Dulu',
    category: 'Daily',
    description: 'Ini adalah contoh data dummy dulu',
    schedulde_date: null,
    start_date: null,
    end_date: null,
    status: 'Todo'
  },
  {
    id: 2,
    name: 'Pakai Data Statis Dulu',
    category: 'Daily',
    description: 'Ini adalah contoh data dummy dulu',
    schedulde_date: null,
    start_date: null,
    end_date: null,
    status: 'Todo'
  }
]

const initialTask = {
  id: null,
  name: '',
  category: '',
  description: '',
  schedulde_date: null,
  start_date: null,
  end_date: null,
  status: null
}

function App() {
  const [tabActive, setTabActive] = React.useState(0);
  const [isOpenForm, setIsOpenForm] = React.useState(false)

  const [tasks, setTasks] = React.useState(TASKS);

  // methods
  const handleOpenForm = (e) => {
    setIsOpenForm(true);
  }
  const handleCloseForm = (e) => {
    setIsOpenForm(false);
  }
  const addTask = (task) => {
    task.id = task.length + 1;
    setTasks([
      ...tasks,
      task
    ])
  }

  return (
    <>
      <Layout>
        <div className="max-w-full md:max-w-5xl mx-auto py-10">
          <div className="text-4xl font-bold text-foreground pb-6">Task Management</div>
          <div className="flex flex-col gap-4 md:flex-row items-center justify-between my-6">
            <div className="grid max-w-xs grid-cols-3 bg-background rounded-full">
              {TABMENU.map((tab, index) =>
                <button
                  key={index}
                  type="button"
                  className={`px-5 py-2 text-sm font-semibold text-foreground  rounded-full ${tabActive === tab.id ? 'bg-green-500 hover:bg-green-600 text-background' : ''}`}
                  onClick={() => setTabActive(tab.id)}
                >
                  {tab.label}
                </button>
              )}
            </div>
            <div className="">
              <Button 
                color="primary"
                onClick={handleOpenForm}
              >
                <PlusIcon className="w-6 h-6" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tasks?.map((task, index) => 
              <TaskCard key={index} task={task} />
            )}
          </div>
        </div>
        {/* form add */}
        {isOpenForm && 
          <AddTaskForm
            addTask={addTask}
            setIsOpenForm={setIsOpenForm}
            onClose={handleCloseForm}
          />
        }
      </Layout>
    </>
  );
}

export default App;
