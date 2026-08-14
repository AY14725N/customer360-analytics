import { ArrowRight, CheckCircle2, Clock3, Database, RefreshCw, TriangleAlert } from 'lucide-react';

const stages = [
  { name: 'CRM sources', detail: 'Salesforce · HubSpot', count: '52,840', icon: Database, tone: 'indigo' },
  { name: 'Ingestion', detail: 'Incremental extraction', count: '52,614', icon: RefreshCw, tone: 'blue' },
  { name: 'Standardization', detail: 'Schema and field mapping', count: '51,992', icon: Clock3, tone: 'amber' },
  { name: 'Customer 360', detail: 'Identity-resolved profiles', count: '48,291', icon: CheckCircle2, tone: 'green' },
];

const sources = [
  { name: 'Salesforce CRM', records: '31,204', status: 'Healthy', synced: '4 min ago' },
  { name: 'HubSpot', records: '18,746', status: 'Healthy', synced: '7 min ago' },
  { name: 'Support Cloud', records: '2,890', status: 'Delayed', synced: '36 min ago' },
];

export default function CRMPipeline() {
  return <>
    <section className="pipeline-summary" aria-label="Pipeline summary">
      <div><span>Records processed today</span><strong>52,614</strong><small>+6.8% from yesterday</small></div>
      <div><span>Unified profiles</span><strong>48,291</strong><small>91.8% resolution rate</small></div>
      <div><span>Data quality score</span><strong>96.4%</strong><small>Within target range</small></div>
      <div><span>Pipeline latency</span><strong>4m 12s</strong><small>2m faster than target</small></div>
    </section>

    <section className="panel pipeline-panel">
      <div className="panel-head"><div><h2>Customer data flow</h2><p>Live processing stages from source systems to unified profiles</p></div><span className="live-status"><i/> Pipeline healthy</span></div>
      <div className="pipeline-flow">
        {stages.map(({ name, detail, count, icon: Icon, tone }, index) => <div className="pipeline-step-wrap" key={name}>
          <article className={`pipeline-step ${tone}`}><Icon size={19}/><div><span>{name}</span><small>{detail}</small></div><strong>{count}</strong></article>
          {index < stages.length - 1 && <ArrowRight className="pipeline-arrow" size={18}/>} 
        </div>)}
      </div>
    </section>

    <div className="pipeline-grid">
      <section className="panel">
        <div className="panel-head"><div><h2>Connected sources</h2><p>CRM integrations and latest synchronization</p></div><button className="text-button">Manage sources</button></div>
        <div className="source-list">{sources.map((source) => <div className="source-row" key={source.name}><div className="source-icon"><Database size={17}/></div><div><strong>{source.name}</strong><small>{source.records} records</small></div><span className={`source-status ${source.status.toLowerCase()}`}>{source.status}</span><time>{source.synced}</time></div>)}</div>
      </section>
      <section className="panel">
        <div className="panel-head"><div><h2>Quality checks</h2><p>Validation results from the latest run</p></div></div>
        <div className="quality-list"><div><CheckCircle2/><span><b>Email validity</b><small>99.2% passed</small></span><strong>49,885</strong></div><div><CheckCircle2/><span><b>Identity matching</b><small>97.8% passed</small></span><strong>48,291</strong></div><div className="warning"><TriangleAlert/><span><b>Missing phone</b><small>Review recommended</small></span><strong>1,426</strong></div></div>
      </section>
    </div>
  </>;
}
