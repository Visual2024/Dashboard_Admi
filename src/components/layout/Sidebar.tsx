'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, ChartBarIcon, CurrencyDollarIcon, ServerIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Overview', icon: HomeIcon },
    { href: '/statistics', label: 'Statistics', icon: ChartBarIcon },
    { href: '/crypto', label: 'Cryptocurrency', icon: CurrencyDollarIcon },
    { href: '/mining', label: 'Mining', icon: ServerIcon },
  ];

  return (
    <aside
      className={`border-r border-[var(--border-color)] p-4 transition-all duration-300 ${
        isCollapsed ? 'w-20 ' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between mb-8">
        {!isCollapsed && (
          <h1 className="text-xl font-bold duration-300 whitespace-nowrap transition-opacity">
            Crypto Dashboard
          </h1>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-md hover:bg-gray-500"
          aria-label="Toggle Sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 12L6 6"
              className={isCollapsed ? 'transition-all duration-150 fill-white' : 'fill-slate-300'}
            />
          </svg>
        </button>
      </div>
      <nav className="space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-4 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 ${
                pathname === link.href ? 'bg-gray-300 dark:bg-gray-800' : ''
              }`}
            >
              <Icon className="w-6 h-6 flex-shrink-0" /> {/* Tamaño fijo para íconos */}
              {!isCollapsed && <span>{link.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
