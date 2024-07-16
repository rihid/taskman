import React from 'react';

function TabMenu({dataMenu, activeTab, setActiveTab}) {
  return (
    <div className="grid max-w-xs grid-cols-3 bg-background rounded-full">
      {dataMenu.map((tab, index) =>
        <button
          key={index}
          type="button"
          className={`px-5 py-2 text-sm font-semibold text-foreground  rounded-full ${activeTab === tab.id ? 'bg-green-500 hover:bg-green-600 text-slate-50' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      )}
    </div>
  )
}

export default TabMenu;