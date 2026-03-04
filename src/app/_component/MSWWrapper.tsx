'use client';

import dynamic from 'next/dynamic';

const MSWComponent = dynamic(
  () => import('@/app/_component/MSWComponent').then(mod => ({ default: mod.MSWComponent })),
  { ssr: false }
);

export default function MSWWrapper() {
  return <MSWComponent />;
}
