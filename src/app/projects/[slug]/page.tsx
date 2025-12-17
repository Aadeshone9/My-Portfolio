
import Header from '@/components/Header';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import SplitText from '@/components/SplitText';
import Footer from '@/components/Footer';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const heroImage = PlaceHolderImages.find(p => p.id === 'project-hero');
  const galleryImages = [
    PlaceHolderImages.find(p => p.id === 'project-gallery-1'),
    PlaceHolderImages.find(p => p.id === 'project-gallery-2'),
    PlaceHolderImages.find(p => p.id === 'project-gallery-3'),
    PlaceHolderImages.find(p => p.id === 'project-gallery-4'),
  ].filter(Boolean);

  const moodboardImages = [
    PlaceHolderImages.find(p => p.id === 'project-moodboard-1'),
    PlaceHolderImages.find(p => p.id === 'project-moodboard-2'),
    PlaceHolderImages.find(p => p.id === 'project-moodboard-3'),
    PlaceHolderImages.find(p => p.id === 'project-moodboard-4'),
  ].filter(Boolean);

  const finalScreenImage = PlaceHolderImages.find(p => p.id === 'project-final-screens');

  return (
    <div className="bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-8 md:px-20 py-16 md:py-24">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center">
          <SplitText
            text="Spotify"
            tag="h1"
            className="font-headline font-semibold text-5xl md:text-8xl lg:text-[100px] leading-tight tracking-wide text-foreground"
          />
          <SplitText
            text="A fresh take on the music streaming experience, focusing on intuitive discovery and personalized playlists."
            tag="p"
            splitType="words"
            className="font-subtitle text-lg md:text-2xl lg:text-[32px] leading-[28px] md:leading-[34px] lg:leading-[42px] text-muted-foreground max-w-3xl mt-6"
          />
          {heroImage && (
            <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mt-12">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
              />
            </div>
          )}
        </section>

        {/* Intro Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-24">
          <div className="md:col-span-1">
            <h2 className="font-headline font-semibold text-2xl text-foreground">The Challenge</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Spotify, a leader in the music streaming industry, faced challenges with user engagement and retention. While the platform offered a vast library of music, users often felt overwhelmed by choice and struggled to discover new music that resonated with their tastes. The existing recommendation algorithms, though powerful, sometimes led to a filter bubble, limiting exposure to diverse genres and artists.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-16">
            <div className="md:col-span-1">
                <h2 className="font-headline font-semibold text-2xl text-foreground">My Role</h2>
            </div>
            <div className="md:col-span-2">
                 <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                    As the Lead UX Researcher, I was tasked with conducting foundational research to understand user behaviors, pain points, and motivations related to music discovery. My responsibilities included designing and executing a multi-faceted research plan, synthesizing findings into actionable insights, and collaborating with designers and product managers to inform the strategy for personalized playlists and content discovery features.
                </p>
            </div>
        </section>

        {/* Gallery Section */}
        <section className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((img, index) => img && (
              <div key={index} className="relative w-full h-[300px] md:h-[400px] bg-muted rounded-2xl overflow-hidden">
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  fill
                  className="object-cover"
                  data-ai-hint={img.imageHint}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mt-24">
           <div className="text-center">
             <SplitText
                text="/Our Process"
                tag="h2"
                className="font-headline font-semibold text-3xl md:text-5xl leading-tight tracking-wide text-foreground"
              />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-4">1</div>
              <h3 className="font-headline font-semibold text-xl text-foreground mb-2">Discovery</h3>
              <p className="text-muted-foreground text-base">We started with stakeholder interviews and competitive analysis to understand the business goals and landscape.</p>
            </div>
             <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-4">2</div>
              <h3 className="font-headline font-semibold text-xl text-foreground mb-2">Research</h3>
              <p className="text-muted-foreground text-base">Conducted user surveys and in-depth interviews to gather qualitative and quantitative data on listening habits.</p>
            </div>
             <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-4">3</div>
              <h3 className="font-headline font-semibold text-xl text-foreground mb-2">Ideation</h3>
              <p className="text-muted-foreground text-base">Held brainstorming sessions and created user personas and journey maps to guide our design concepts.</p>
            </div>
             <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-4">4</div>
              <h3 className="font-headline font-semibold text-xl text-foreground mb-2">Design & Test</h3>
              <p className="text-muted-foreground text-base">Developed wireframes and prototypes, followed by usability testing to refine the user experience.</p>
            </div>
          </div>
        </section>

        {/* Moodboard Section */}
        <section className="mt-24">
             <div className="text-center">
                 <SplitText
                    text="/Moodboard"
                    tag="h2"
                    className="font-headline font-semibold text-3xl md:text-5xl leading-tight tracking-wide text-foreground"
                  />
                  <SplitText
                    text="A visual exploration of the feelings and aesthetics that guided our design direction."
                    tag="p"
                    splitType="words"
                    className="font-subtitle text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4"
                  />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                 {moodboardImages.map((img, index) => img && (
                    <div key={index} className="relative w-full aspect-square bg-muted rounded-2xl overflow-hidden">
                        <Image
                        src={img.imageUrl}
                        alt={img.description}
                        fill
                        className="object-cover"
                        data-ai-hint={img.imageHint}
                        />
                    </div>
                ))}
            </div>
        </section>

        {/* Final Screens Section */}
        <section className="mt-24">
            <div className="text-center">
                <SplitText
                text="/Final Screens"
                tag="h2"
                className="font-headline font-semibold text-3xl md:text-5xl leading-tight tracking-wide text-foreground"
                />
                <SplitText
                text="The culmination of our research and design efforts, showcasing the refined user interface."
                tag="p"
                splitType="words"
                className="font-subtitle text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4"
                />
            </div>
            {finalScreenImage && (
                <div className="relative w-full h-[400px] md:h-[700px] bg-muted rounded-2xl overflow-hidden mt-12">
                <Image
                    src={finalScreenImage.imageUrl}
                    alt={finalScreenImage.description}
                    fill
                    className="object-cover object-top"
                    data-ai-hint={finalScreenImage.imageHint}
                />
                </div>
            )}
        </section>

      </main>
      <Footer />
    </div>
  );
}
