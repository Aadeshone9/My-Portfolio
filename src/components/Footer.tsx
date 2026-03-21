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
              
              <div className="flex flex-col items-start gap-8">
                {/* View Resume Button - Signature Orange Pulse */}
                <ResumeViewer />

                {/* Contact Links Stacking */}
                <div className="flex flex-col items-start gap-4 text-base md:text-lg lg:text-xl">
                  <a 
                    href="mailto:Aadesh.one9@gmail.com" 
                    className="font-headline font-semibold tracking-tight underline decoration-1 underline-offset-8 hover:text-primary transition-colors"
                  >
                    Aadesh.one9@gmail.com
                  </a>
                  
                  <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
                    <p className="font-headline font-semibold tracking-tight">+ (91) 8975143018</p>
                    <a 
                      href="https://www.linkedin.com/in/aadeshgovenkar/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-headline font-semibold tracking-tight underline decoration-1 underline-offset-8 hover:text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Large Text and Go Up Button */}
            <div className="flex flex-row items-end justify-between gap-4 mt-8 md:mt-12">
              <div className="font-headline font-semibold text-6xl sm:text-8xl md:text-9xl lg:text-[160px] 2xl:text-[180px] leading-[0.8] tracking-tighter flex flex-col text-left">
                <span>Aadesh</span>
                <span>one9.com</span>
              </div>
              <div className="pb-2 md:pb-4 flex-shrink-0">
                <ScrollToTopButton />
              </div>
            </div>
          </div>

          {/* Footer Bottom Info - Now Left Aligned */}
          <div className="text-left text-sm md:text-base font-normal tracking-[0.02em] flex flex-col gap-2 text-footer-muted-foreground max-w-2xl">
            <p>Designed & developed with Figma, Firebase Studio & GitHub by Aadesh Govenkar.</p>
            <p>&copy; 2026 Copyright All Rights Reserved</p>
          </div>
        </div>
      </footer>
    )
}
