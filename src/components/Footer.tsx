
import PillButton from "./PillButton";
import ScrollToTopButton from "./ScrollToTopButton";

export default function Footer() {
    return (
        <footer className="bg-footer text-footer-foreground py-20">
        <div className="container mx-auto px-4 sm:px-8 md:px-20 flex flex-col gap-12">
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-8'>
              <p 
                className="font-headline font-semibold text-xl md:text-2xl text-footer-muted-foreground"
              >
                Lets get in Touch....
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-base md:text-lg">
                <PillButton href="#" className="text-sm">View Resume</PillButton>
                <a href="mailto:Aadesh.one9@gmail.com" className="font-headline font-semibold tracking-tight underline leading-normal break-all hover:text-primary transition-colors">Aadesh.one9@gmail.com</a>
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
            <p>Designed & developed with Figma, Firebase Studio, and GitHub by Aadesh Govenkar.</p>
            <p>&copy; 2026 Copyright All Rights Reserved</p>
          </div>
        </div>
      </footer>
    )
}
