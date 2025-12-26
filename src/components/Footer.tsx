
export default function Footer() {
    return (
        <footer className="bg-footer text-footer-foreground py-16">
        <div className="container mx-auto px-4 sm:px-8 md:px-20 flex flex-col gap-10">
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-6'>
              <p className="font-headline font-semibold text-footer-muted-foreground text-lg md:text-2xl tracking-[0.02em] leading-normal">
                Now that you know me better than Earlier, Lets get in Touch....
              </p>
              <div className="flex flex-col gap-4 text-base md:text-2xl">
                <a href="mailto:Aadesh.one9@gmail.com" className="font-headline font-semibold tracking-[0.02em] underline leading-normal break-all hover:text-primary transition-colors">Aadesh.one9@gmail.com</a>
                <p className="font-headline font-semibold tracking-[0.02em] leading-normal">+ (91) 8975143018</p>
                <a href="https://www.linkedin.com/in/aadeshgovenkar/" target="_blank" rel="noopener noreferrer" className="font-headline font-semibold tracking-[0.02em] underline leading-normal break-all hover:text-primary transition-colors">
                  https://www.linkedin.com/in/aadeshgovenkar/
                </a>
              </div>
            </div>
            <div className="p-2.5">
              <div className="font-headline font-semibold text-5xl sm:text-7xl md:text-9xl lg:text-[160px] leading-[0.8] tracking-tighter flex flex-col gap-6">
                <span>Aadesh.</span>
                <span>one9.com</span>
              </div>
            </div>
          </div>
          <div className="text-right text-sm md:text-base font-normal tracking-[0.02em] flex flex-col gap-2 text-footer-muted-foreground">
            <p>Designed In Figma & Developed in Firebase studio by Aadesh Govenkar</p>
            <p>&copy; 2026 Copyright All Rights Reserved</p>
          </div>
        </div>
      </footer>
    )
}
