import {
  CirclePlus,
  HardDrive,
  Star,
  Clock,
  Trash,
  Search,
  Settings,
} from "lucide-react";
import { Input } from "~/components/ui/input";

export default function HomePage() {
  return (
    <div className="flex h-screen">
      <div className="bg-background border-border w-64 space-y-4 border-r p-4">
        <button className="flex w-full items-center justify-start rounded-md border p-2">
          <CirclePlus className="mr-2 h-4 w-4" />
          New
        </button>
        <nav className="space-y-2">
          <button className="flex w-full items-center justify-start p-2">
            <HardDrive className="mr-4 h-4 w-4" />
            My Drive
          </button>
          <button className="flex w-full items-center justify-start p-2">
            <Star className="mr-4 h-4 w-4" />
            Starred
          </button>
          <button className="flex w-full items-center justify-start p-2">
            <Clock className="mr-4 h-4 w-4" />
            Recent
          </button>
          <button className="flex w-full items-center justify-start p-2">
            <Trash className="mr-4 h-4 w-4" />
            Trash
          </button>
        </nav>
      </div>
      <main className="flex flex-1 flex-col">
        <div className="flex h-24 justify-between border p-4">
          <div className="flex items-center justify-start gap-4">
            <h1 className="text-xl font-bold">Drive Clone</h1>
            <nav>
              <a className="underline" href="/">
                My drive
              </a>
            </nav>
          </div>
          <div className="flex items-center justify-start gap-4">
            <div className="relative">
              <Search className="text-muted-foreground absolute left-2 top-1/2 -translate-y-1/2 transform" />
              <Input className="pl-8" placeholder="Search in Drive" />
            </div>
            <button>
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="flex-1 p-4">
          <h2>Files</h2>
        </div>
      </main>
    </div>
  );
}
