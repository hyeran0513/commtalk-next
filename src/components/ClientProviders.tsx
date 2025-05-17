"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/api/queryClient";

interface ClientProvidersProps {
  children: React.ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
