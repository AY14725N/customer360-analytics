import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Cohorts from './pages/Cohorts';
import Retention from './pages/Retention';
import Segmentation from './pages/Segmentation';
import ChurnPrediction from './pages/ChurnPrediction';
import CRMPipeline from './pages/CRMPipeline';
import NotFound from './pages/NotFound';

export const routes = [
  { path: '/dashboard', title: 'Executive overview', subtitle: 'A unified view of customer health and growth', element: Dashboard },
  { path: '/crm-pipeline', title: 'CRM data pipeline', subtitle: 'Monitor ingestion, transformation, and customer record quality', element: CRMPipeline },
  { path: '/customers', title: 'Customer intelligence', subtitle: 'Understand every customer relationship', element: Customers },
  { path: '/cohorts', title: 'Cohort analysis', subtitle: 'Track retention across acquisition periods', element: Cohorts },
  { path: '/retention', title: 'Retention analytics', subtitle: 'Measure loyalty, expansion, and durability', element: Retention },
  { path: '/segmentation', title: 'Customer segmentation', subtitle: 'Turn behavior into actionable audiences', element: Segmentation },
  { path: '/churn', title: 'Churn prediction', subtitle: 'Identify and prevent customer loss', element: ChurnPrediction },
];

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activeRoute = routes.find((route) => route.path === location.pathname);

  return <div className="app-shell">
    <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    {sidebarOpen && <button className="sidebar-backdrop" aria-label="Close navigation" onClick={() => setSidebarOpen(false)} />}
    <main>
      <Navbar
        title={activeRoute?.title ?? 'Page not found'}
        subtitle={activeRoute?.subtitle ?? 'The requested page does not exist'}
        onMenu={() => setSidebarOpen(true)}
      />
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          {routes.map(({ path, element: Page }) => <Route key={path} path={path} element={<Page navigate={(page) => navigate(`/${page}`)} />} />)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  </div>;
}

export default function App() {
  return <BrowserRouter><AppProvider><AppLayout /></AppProvider></BrowserRouter>;
}
