import { useState } from 'react';
import { AppProvider } from './context/AppContext';
import Sidebar from './components/Sidebar/Sidebar';import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard';import Customers from './pages/Customers';import Cohorts from './pages/Cohorts';import Retention from './pages/Retention';import Segmentation from './pages/Segmentation';import ChurnPrediction from './pages/ChurnPrediction';
const pages={dashboard:[Dashboard,'Executive overview','A unified view of customer health and growth'],customers:[Customers,'Customer intelligence','Understand every customer relationship'],cohorts:[Cohorts,'Cohort analysis','Track retention across acquisition periods'],retention:[Retention,'Retention analytics','Measure loyalty, expansion, and durability'],segmentation:[Segmentation,'Customer segmentation','Turn behavior into actionable audiences'],churn:[ChurnPrediction,'Churn prediction','Identify and prevent customer loss']};
export default function App(){const [page,setPage]=useState('dashboard');const [Page,title,subtitle]=pages[page];return <AppProvider><div className="app-shell"><Sidebar page={page} setPage={setPage}/><main><Navbar title={title} subtitle={subtitle}/><div className="content"><Page navigate={setPage}/></div></main></div></AppProvider>}

