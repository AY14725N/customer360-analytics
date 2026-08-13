import { Bell, Menu, Search } from 'lucide-react';

export default function Navbar({ title, subtitle, onMenu }) {
  return <header className="topbar">
    <div className="topbar-title"><button className="menu-button" aria-label="Open navigation" onClick={onMenu}><Menu size={20}/></button><div><h1>{title}</h1><p>{subtitle}</p></div></div>
    <div className="topbar-actions"><label className="search"><Search size={16}/><input aria-label="Search" placeholder="Search customers…"/></label><button className="icon-button" aria-label="Notifications"><Bell size={19}/><span/></button><div className="avatar">AY</div></div>
  </header>;
}
