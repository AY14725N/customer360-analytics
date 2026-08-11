import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import Panel from '../components/Charts/Panel';
import CustomerTable from '../components/Tables/CustomerTable';
import { customers } from '../data';
export default function Customers(){const [query,setQuery]=useState('');const rows=useMemo(()=>customers.filter(x=>`${x.name} ${x.id} ${x.segment}`.toLowerCase().includes(query.toLowerCase())),[query]);return <><div className="page-stats"><div><span>Active customers</span><b>46,893</b></div><div><span>New this month</span><b>1,204</b></div><div><span>Average health score</span><b>82.4</b></div></div><Panel title="Customer directory" subtitle={`${rows.length} featured customer records`} action={<label className="search compact"><Search size={15}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Filter customers"/></label>}><CustomerTable rows={rows}/></Panel></>}

