
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SplitText from '@/components/SplitText';

export default function KnowMeBetterPage() {
  return (
    <div className="bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-8 md:px-20 py-16 md:py-24">
        <div className="flex flex-col items-start gap-6">
          <SplitText 
            text="Know Me Better"
            tag="h1"
            className="font-headline font-semibold text-5xl md:text-8xl lg:text-[100px] leading-tight tracking-wide text-foreground"
            textAlign="left"
          />
          <SplitText
            text="This is a placeholder page for the 'Know me better' section."
            tag="p"
            splitType="words"
            className="font-subtitle text-lg md:text-2xl lg:text-[32px] leading-[28px] md:leading-[34px] lg:leading-[42px] text-muted-foreground max-w-2xl"
            textAlign="left"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
