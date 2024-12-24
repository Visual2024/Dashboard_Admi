'use client';
import { ThemeProvider } from '@mui/material/styles';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { theme } from '@/utils/theme';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <DashboardLayout>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Dashboard Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
          </div>
        </div>
      </DashboardLayout>
    </ThemeProvider>
  );
}
