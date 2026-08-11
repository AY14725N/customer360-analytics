import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
export default function KPICard({ label, value, change, tone='blue', note='vs previous period' }) {
  const up = change.startsWith('+');
  return <article className={`kpi-card ${tone}`}><div className="kpi-label">{label}<span className="kpi-dot"/></div><strong>{value}</strong><div className={`delta ${up?'positive':'negative'}`}>{up?<ArrowUpRight size={14}/>:<ArrowDownRight size={14}/>} {change}<span>{note}</span></div></article>;
}

