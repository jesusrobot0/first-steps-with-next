import { Navbar } from "@/components";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-24 gap-4">
        <p className="text-blue-600">General Layout</p>
        {children}
      </main>
    </>
  );
}
