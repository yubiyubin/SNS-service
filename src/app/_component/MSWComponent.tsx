"use client";
import { useEffect } from "react";

export const MSWComponent = () => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MODE === 'local') {
      import('@/mocks/browser').then(({ default: worker }) => {
        worker.start({ onUnhandledRequest: 'bypass' });
      });
    }
  }, []);

  return null;
};