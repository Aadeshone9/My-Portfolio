
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SplitText from '@/components/SplitText';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Lanyard from '@/components/Lanyard';

const learnings = [
  {
    title: 'The Power of Iterative Design',
    reflection: "Working on the VIDO project, I learned that the first solution is rarely the best. Continuous user feedback and iterative prototyping led to a much more intuitive and effective final product. It reinforced the importance of being adaptable and not getting too attached to initial ideas.",
    takeaway: 'Embrace feedback loops and be willing to pivot.',
    category: 'UX Process',
  },
  {
    title: 'Designing for Accessibility is Designing for Everyone',
    reflection: "During the Google Cloud Security project, we prioritized accessibility from the start. This not only made the product usable for people with disabilities but also improved the experience for all users by forcing us to create a clearer, more structured interface.",
    takeaway: 'Accessibility is not an afterthought; it is a core design principle that benefits everyone.',
    category: 'Inclusivity',
  },
  {
    title: 'The Art of Simplicity in Complex Systems',
    reflection: "The Thermax Edge Platform was a highly technical product. The biggest challenge was to distill complex data into a simple, actionable dashboard. This taught me the value of ruthless simplification and focusing on the user's primary goals, even when the underlying system is incredibly complex.",
    takeaway: "Clarity and simplicity are paramount, especially in enterprise applications.",
    category: 'Product Design',
  },
  {
    title: 'Cross-functional Collaboration is Key',
    reflection: "On the Mahindra Finance project, I worked closely with developers, product managers, and business stakeholders. This constant communication ensured that design decisions were technically feasible, aligned with business goals, and truly met user needs. It was a powerful reminder that design does not happen in a vacuum.",
    takeaway: 'Great products are built by teams, not individuals.',
    category: 'Collaboration',
  },
];

export default function LearningsPage() {
  return (
    <div className="bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-8 md:px-20 py-20 md:py-32">
        <div className="flex flex-col items-start gap-8">
          <SplitText 
            text="Learnings & Reflection"
            tag="h1"
            className="font-headline font-semibold text-5xl md:text-8xl lg:text-[100px] leading-tight tracking-wide text-foreground"
            textAlign="left"
          />
          <SplitText
            text="A collection of thoughts, challenges, and insights from my journey as a designer."
            tag="p"
            splitType="words"
            className="font-subtitle text-lg md:text-2xl lg:text-[32px] leading-[28px] md:leading-[34px] lg:leading-[42px] text-muted-foreground max-w-2xl"
            textAlign="left"
          />
        </div>

        {/* <Lanyard /> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          {learnings.map((learning, index) => (
            <Card key={index} className="flex flex-col border border-border bg-card">
              <CardHeader>
                <p className="text-sm font-semibold text-primary">{learning.category}</p>
                <CardTitle className="font-headline text-2xl text-foreground">{learning.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow justify-between">
                <div>
                    <p className="text-muted-foreground">{learning.reflection}</p>
                </div>
                <div className='mt-8'>
                    <p className="font-semibold text-foreground">Key Takeaway:</p>
                    <p className="text-foreground italic">"{learning.takeaway}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
