import { ArrowRight, Sparkles } from 'lucide-react';
import Filters from '../components/Filters/Filters';
import KPICard from '../components/KPI/KPICard';
import Panel from '../components/Charts/Panel';
import RevenueChart from '../components/Charts/RevenueChart';
import SegmentChart from '../components/Charts/SegmentChart';
import CustomerTable from '../components/Tables/CustomerTable';
import { customers, overview } from '../data';

export default function Dashboard({ navigate }) { return <><Filters/><div className="kpi-grid">{overview.kpis.map(k=><KPICard key={k.label} {...k}/>)}</div><div className="insight"><Sparkles size={20}/><div><b>AI insight</b><p>Revenue is pacing 10.1% above target, led by Champion upgrades. Re-engaging 312 high-value at-risk customers could protect an estimated $186K in ARR.</p></div><button onClick={()=>navigate('churn')}>View opportunities <ArrowRight size={15}/></button></div><div className="dashboard-grid"><Panel title="Revenue performance" subtitle="Monthly recurring revenue vs target" className="wide" action={<div className="mini-legend"><i/>Revenue <i/>Target</div>}><RevenueChart data={overview.revenue}/></Panel><Panel title="Customer segments" subtitle="Distribution by RFM segment"><SegmentChart data={overview.segments}/></Panel></div><Panel title="Top customers" subtitle="Highest-value accounts this period" action={<button className="text-button" onClick={()=>navigate('customers')}>View all <ArrowRight size={15}/></button>}><CustomerTable rows={customers.slice(0,4)}/></Panel></>; }

