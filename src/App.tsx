import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Payments from './pages/Payments';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50" dir="rtl">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <GraduationCap className="h-8 w-8 text-indigo-600" />
                  <h1 className="mr-3 text-xl font-bold text-gray-900">كلية شرق النيل</h1>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700">مرحباً، الإدارة</span>
                </div>
              </div>
            </div>
          </nav>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/payments" element={<Payments />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;