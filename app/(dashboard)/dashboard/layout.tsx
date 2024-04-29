import MainNav from "@/components/main-nav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <div>
          <MainNav />
        </div>
      </header>
      <div>
        <aside></aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
