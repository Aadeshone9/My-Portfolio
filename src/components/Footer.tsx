
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
                            <p className="font-headline font-medium text-lg md:text-xl text-footer-muted-foreground">
                                Lets get in Touch....
                            </p>
                        </FadeIn>
                        
                        {/* Desktop: One line, Mobile: Stacked with proper alignment */}
                        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-x-10 text-base md:text-lg items-start">
                            <div className="w-full md:w-auto">
                                <ResumeViewer />
                            </div>
                            <a 
                                href="mailto:Aadesh.one9@gmail.com" 
                                className="font-headline font-semibold tracking-tight underline decoration-1 underline-offset-8 hover:text-primary transition-colors block md:inline"
                            >
                                Aadesh.one9@gmail.com
                            </a>
                            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-x-10 w-full md:w-auto">
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

                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-4 mt-8 md:mt-12">
                        <div className="font-headline font-semibold text-6xl sm:text-8xl md:text-9xl lg:text-[160px] 2xl:text-[180px] leading-[0.8] tracking-tighter flex flex-col text-left">
                            <span>Aadesh</span>
                            <span>one9.com</span>
                        </div>
                        <div className="pb-0 md:pb-4 flex-shrink-0 w-full md:w-auto flex justify-start md:justify-end">
                            <ScrollToTopButton />
                        </div>
                    </div>
                </div>

                <div className="text-left text-sm md:text-base font-normal tracking-[0.02em] flex flex-col gap-2 text-footer-muted-foreground border-t border-footer-foreground/10 pt-8">
                    <p className="md:whitespace-nowrap">Designed & developed with Figma, Firebase Studio & GitHub by Aadesh Govenkar.</p>
                    <p>&copy; 2026 Copyright All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}
