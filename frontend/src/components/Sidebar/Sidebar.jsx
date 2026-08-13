import { LayoutDashboard, Users, Layers3, RefreshCw, PieChart, ShieldAlert, Settings, HelpCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const items = [
  ['/dashboard', 'Overview', LayoutDashboard], ['/customers', 'Customers', Users], ['/cohorts', 'Cohorts', Layers3],
  ['/retention', 'Retention', RefreshCw], ['/segmentation', 'Segmentation', PieChart], ['/churn', 'Churn prediction', ShieldAlert]
];

export default function Sidebar({ open, onClose }) {
  return <aside className={`sidebar ${open ? 'open' : ''}`}>
    <div className="brand"><div className="brand-mark">C</div><div>Customer<span>360</span><small>INTELLIGENCE</small></div></div>
    <nav aria-label="Main navigation">
      {items.map(([path, label, Icon]) => <NavLink key={path} to={path} className={({ isActive }) => isActive ? 'active' : ''} onClick={onClose}><Icon size={18}/><span>{label}</span></NavLink>)}
    </nav>
    <div className="sidebar-bottom"><button><HelpCircle size={18}/>Help center</button><button><Settings size={18}/>Settings</button><div className="profile"><div className="avatar">AY</div><div><b>Akshitha Y.</b><small>Administrator</small></div></div></div>
  </aside>;
}
