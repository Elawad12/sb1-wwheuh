import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, CreditCard, BookOpen, Settings } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, text: 'الرئيسية', path: '/' },
    { icon: Users, text: 'الطلاب', path: '/students' },
    { icon: CreditCard, text: 'المدفوعات', path: '/payments' },
    { icon: BookOpen, text: 'التخصصات', path: '/specializations' },
    { icon: Settings, text: 'الإعدادات', path: '/settings' },
  ];

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="h-full flex flex-col">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <item.icon className="ml-3 h-5 w-5" />
                {item.text}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;