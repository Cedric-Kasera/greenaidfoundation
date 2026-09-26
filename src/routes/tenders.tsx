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

export const Route = createFileRoute('/tenders')({
  component: Tenders
});

function Tenders() {
  const tenders: any[] = []; // Empty state for now

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
              <BreadcrumbPage>Tenders</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
        <PageIntro 
          bgImage={images.tree}
          eyebrow="TENDERS & PROCUREMENT" 
          title="Partner with our mission." 
          description="Find open requests for proposals, supplier registrations, and project tenders." 
        />
        <section className="container" style={{ padding: '60px 0' }}>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border)', padding: '8px 12px', borderRadius: '6px', flex: '1', minWidth: '250px' }}>
              <Search size={18} style={{ marginRight: '8px', opacity: 0.5 }} />
              <input type="text" placeholder="Search tenders..." style={{ border: 'none', outline: 'none', width: '100%', background: 'transparent' }} />
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: '1px solid var(--border)', borderRadius: '6px', background: 'var(--canvas)' }}>
              <Filter size={18} />
              Filter by Category
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: '1px solid var(--border)', borderRadius: '6px', background: 'var(--canvas)' }}>
              <Filter size={18} />
              Filter by Status
            </button>
          </div>

          {tenders.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px', background: 'var(--canvas)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>No active tenders</h3>
              <p style={{ color: 'var(--muted-foreground)' }}>There are currently no open tenders or procurement requests. Please check back later.</p>
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
