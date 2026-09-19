import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';
import { defaultData } from '@/lib/data';
import type { SiteData } from '@/lib/data';
import BikeDetailClient from './BikeDetailClient';

async function getData(): Promise<SiteData> {
  try {
    const file = path.join(process.cwd(), 'src', 'lib', 'site-data.json');
    const raw = await fs.readFile(file, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return defaultData;
  }
}

export default async function BikeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getData();
  const bike = data.bikes.find(b => b.id === id);

  if (!bike) notFound();

  return <BikeDetailClient bike={bike} />;
}
