import DashboardHeader from "@/components/dashboard-header";
import DashboardShell from "@/components/dashboard-shell";
import PostCreateButton from "@/components/post-create-button";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="投稿" text="記事の作成と管理">
        <PostCreateButton />
      </DashboardHeader>
    </DashboardShell>
  );
}
