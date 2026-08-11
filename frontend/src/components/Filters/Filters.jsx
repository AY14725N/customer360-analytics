import { CalendarDays, Download } from 'lucide-react';
import { useApp } from '../../context/AppContext';
export default function Filters() {
  const { period,setPeriod,segment,setSegment } = useApp();
  return <div className="filters"><label><span>Segment</span><select value={segment} onChange={e=>setSegment(e.target.value)}><option>All segments</option><option>Champions</option><option>Loyal</option><option>At risk</option></select></label><label><span>Period</span><div className="select-icon"><CalendarDays size={15}/><select value={period} onChange={e=>setPeriod(e.target.value)}><option>Last 12 months</option><option>Last 6 months</option><option>Last 30 days</option></select></div></label><button className="export"><Download size={16}/>Export</button></div>;
}

