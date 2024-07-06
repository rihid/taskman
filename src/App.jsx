import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/layout";
import TaskCard from "./components/task-card";

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
  },
  {
    id: 3,
    name: 'Pakai Data Statis Dulu',
    category: 'Daily',
    description: 'Ini adalah contoh data dummy dulu',
    schedulde_date: null,
    start_date: null,
    end_date: null,
    status: 'Todo'
  },
  {
    id: 4,
    name: 'Pakai Data Statis Dulu',
    category: 'Daily',
    description: 'Ini adalah contoh data dummy dulu',
    schedulde_date: null,
    start_date: null,
    end_date: null,
    status: 'Todo'
  },
  {
    id: 5,
    name: 'Pakai Data Statis Dulu',
    category: 'Daily',
    description: 'Ini adalah contoh data dummy dulu',
    schedulde_date: null,
    start_date: null,
    end_date: null,
    status: 'Todo'
  }
]

function App() {
  const [tabActive, setTabActive] = React.useState(0)

  return (
    <>
      <Layout>
        <div className="max-w-full md:max-w-5xl mx-auto py-10">
          <div className="text-4xl font-bold text-[#333333] pb-6">Task Management</div>
          <div className="grid max-w-xs my-[20px] grid-cols-3 bg-[#FFFFFF] rounded-full">
            {TABMENU.map((tab, index) =>
              <button
                key={index}
                type="button"
                className={`px-5 py-2 text-[14px] font-semibold text-[#333333]  rounded-full ${tabActive === tab.id ? 'bg-[#68E874] hover:bg-green-400 text-white' : 'hover:bg-gray-200'}`}
                onClick={() => setTabActive(tab.id)}
              >
                {tab.label}
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TASKS.map((task, index) => 
              <TaskCard key={index} task={task} />
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
