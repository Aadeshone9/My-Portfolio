
'use client';
import PillButton from "./PillButton";
import ResumeViewer from "./ResumeViewer";
import ScrollToTopButton from "./ScrollToTopButton";
import FadeIn from "./FadeIn";
import { Bike } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-footer text-footer-foreground py-20">
        <div className="container mx-auto px-4 sm:px-8 md:px-20 flex flex-col gap-12">
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-8'>
              <FadeIn>
                <p 
                  className="font-headline font-semibold text-xl md:text-2xl text-footer-muted-foreground"
                >
                  Lets get in Touch....
                </p>
              </FadeIn>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-base md:text-lg">
                <ResumeViewer />
                <div className="flex items-center gap-2">
                  <a href="mailto:Aadesh.one9@gmail.com" className="font-headline font-semibold tracking-tight underline leading-normal break-all hover:text-primary transition-colors">Aadesh.one9@gmail.com</a>
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="text-primary inline-flex"
                  >
                    <Bike size={20} aria-hidden="true" />
                  </motion.div>
                </div>
                <p className="font-headline font-semibold tracking-tight leading-normal">+ (91) 8975143018</p>
                <a href="https://www.linkedin.com/in/aadeshgovenkar/" target="_blank" rel="noopener noreferrer" className="font-headline font-semibold tracking-tight underline leading-normal break-all hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="p-2.5 flex justify-between items-end">
              <div className="font-headline font-semibold text-5xl sm:text-7xl md:text-9xl lg:text-[160px] leading-[0.8] tracking-tighter flex flex-col gap-8">
                <span>Aadesh</span>
                <span>one9.com</span>
              </div>
              <ScrollToTopButton />
            </div>
          </div>
          <div className="text-right text-sm md:text-base font-normal tracking-[0.02em] flex flex-col gap-2 text-footer-muted-foreground">
            <p>Designed & developed with Figma, Firebase Studio & GitHub by Aadesh Govenkar.</p>
            <p>&copy; 2026 Copyright All Rights Reserved</p>
          </div>
        </div>
      </footer>
    )
}
