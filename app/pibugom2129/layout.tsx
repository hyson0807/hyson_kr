import { Metadata } from "next";
import { ErrorBoundary } from "../components/ErrorBoundary";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function PibugomAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ErrorBoundary>{children}</ErrorBoundary>;
}
