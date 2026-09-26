import { createFileRoute } from '@tanstack/react-router';
import { Search, Filter } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link } from '@tanstack/react-router';
import { PageIntro, SiteFooter, SiteHeader } from '@/components/site-shell';
import { images } from '@/lib/site-content';

export const Route = createFileRoute('/careers')({
  component: Careers
});

function Careers() {
  const jobs: any[] = []; // Empty state for now

  return (
    <>
      <SiteHeader />
      <main>
<div className="container" style={{ padding: '12px 0 16px', fontSize: '0.875rem' }}>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Careers</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
        <PageIntro 
          bgImage={images.field}
          eyebrow="JOIN THE TEAM" 
          title="Build a living future with us." 
          description="Explore opportunities to grow your career while making a lasting impact on our environment and communities." 
        />
        <section className="container" style={{ padding: '60px 0' }}>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border)', padding: '8px 12px', borderRadius: '6px', flex: '1', minWidth: '250px' }}>
              <Search size={18} style={{ marginRight: '8px', opacity: 0.5 }} />
              <input type="text" placeholder="Search roles..." style={{ border: 'none', outline: 'none', width: '100%', background: 'transparent' }} />
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: '1px solid var(--border)', borderRadius: '6px', background: 'var(--canvas)' }}>
              <Filter size={18} />
              Filter by Department
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: '1px solid var(--border)', borderRadius: '6px', background: 'var(--canvas)' }}>
              <Filter size={18} />
              Filter by Location
            </button>
          </div>

          {jobs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px', background: 'var(--canvas)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>No open positions at the moment</h3>
              <p style={{ color: 'var(--muted-foreground)' }}>We are not actively recruiting right now. Please check back later or follow our social media for updates.</p>
            </div>
          ) : (
            <div className="editorial-card-grid">
              {/* Cards would go here */}
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
