import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return <section className="not-found"><span>404</span><h2>We couldn't find that page</h2><p>The address may be incorrect, or the page may have moved.</p><Link to="/dashboard"><ArrowLeft size={16}/> Return to overview</Link></section>;
}
