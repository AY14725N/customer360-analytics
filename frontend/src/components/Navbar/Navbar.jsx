import { Bell, Search } from 'lucide-react';

export default function Navbar({ title, subtitle }) {
  return <header className="topbar">
    <div><h1>{title}</h1><p>{subtitle}</p></div>
    <div className="topbar-actions"><label className="search"><Search size={16}/><input aria-label="Search" placeholder="Search customers…"/></label><button className="icon-button" aria-label="Notifications"><Bell size={19}/><span/></button><div className="avatar">AY</div></div>
  </header>;
}

