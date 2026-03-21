'use client';
import ResumeViewer from "./ResumeViewer";
import ScrollToTopButton from "./ScrollToTopButton";
import FadeIn from "./FadeIn";

export default function Footer() {
    return (
        <footer className="bg-footer text-footer-foreground py-20">
        <div className="container mx-auto px-4 sm:px-8 md:px-20 flex flex-col gap-16">
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-8'>
              <FadeIn>
                <p 
                  className="font-headline font-medium text-lg md:text-xl text-footer-muted-foreground"
                >
                  Lets get in Touch....
                </p>
              </FadeIn>
              <div className="flex flex-wrap items-center gap-x-10 gap-y-6 text-base md:text-lg">
                <ResumeViewer />
                <a href="mailto:Aadesh.one9@gmail.com" className="font-headline font-semibold tracking-tight underline decoration-1 underline-offset-4 hover:text-primary transition-colors">Aadesh.one9@gmail.com</a>
                <p className="font-headline font-semibold tracking-tight text-footer-foreground">+ (91) 8975143018</p>
                <a href="https://www.linkedin.com/in/aadeshgovenkar/" target="_blank" rel="noopener noreferrer" className="font-headline font-semibold tracking-tight underline decoration-1 underline-offset-4 hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mt-4">
              <div className="font-headline font-semibold text-6xl sm:text-8xl md:text-9xl lg:text-[160px] leading-[0.8] tracking-tighter flex flex-col">
                <span>Aadesh</span>
                <span>one9.com</span>
              </div>
              <div className="pb-4">
                <ScrollToTopButton />
              </div>
            </div>
          </div>
          <div className="text-right text-sm font-normal tracking-[0.02em] flex flex-col gap-1 text-footer-muted-foreground">
            <p>Designed & developed with Figma, Firebase Studio & GitHub by Aadesh Govenkar.</p>
            <p>&copy; 2026 Copyright All Rights Reserved</p>
          </div>
        </div>
      </footer>
    )
}
