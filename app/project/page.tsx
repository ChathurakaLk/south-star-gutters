import { prisma } from "@/lib/prisma";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function ProjectsPage() {
  const data = (
    await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    })
  ).map((project) => ({
    ...project,
    createdAt: project.createdAt.toISOString(),
  }));

  return (
    <div className="h-[100vh] w-full bg-neutral-950 relative flex justify-center antialiased">
      <div className="max-w-7xl w-full mx-auto p-4 z-10">
        <div className="flex justify-between">
          <h1 className="relative z-10 text-2xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mb-5 md:mb-10">
            Projects
          </h1>
          <Button variant={"secondary"}>
            <Link href={"/project/create"}>Create</Link>
          </Button>
        </div>

        <DataTable columns={columns} data={data} />
      </div>
      <BackgroundBeams />
    </div>
  );
}
