
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import PillButton from "./PillButton";
import { X } from "lucide-react";

const ResumeViewer = () => {
  // IMPORTANT: Place your resume file in the `public` folder.
  const resumePath = "/pdf/resume.pdf";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="pill-button text-sm" style={{
            ['--base' as any]: 'transparent',
            ['--pill-bg' as any]: 'hsl(var(--primary))',
            ['--hover-text' as any]: 'hsl(var(--primary-foreground))',
            ['--pill-text' as any]: 'hsl(var(--primary))'
        }}>
            View Resume
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] p-0">
        <DialogHeader className="p-4 flex flex-row items-center justify-between border-b">
          <DialogTitle>My Resume</DialogTitle>
           <DialogClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <div className="h-full w-full">
          <iframe
            src={resumePath}
            className="w-full h-full"
            title="Resume"
            frameBorder="0"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeViewer;
