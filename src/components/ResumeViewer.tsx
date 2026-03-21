'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { X } from "lucide-react";

const ResumeViewer = () => {
  // IMPORTANT: Place your resume file in the `public` folder.
  const resumePath = "/pdf/Aadesh_Govenkar_Senior_UX_And_Product_Designer_2026_Resume.pdf";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="h-[42px] px-6 inline-flex items-center justify-center rounded-full border border-primary text-primary font-semibold text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
            View Resume
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] p-0 border-none bg-background">
        <DialogHeader className="sr-only">
          <DialogTitle>Resume</DialogTitle>
        </DialogHeader>
        <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 backdrop-blur-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <div className="h-full w-full overflow-hidden rounded-lg">
          <iframe
            src={resumePath}
            className="w-full h-full"
            title="Resume"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeViewer;
