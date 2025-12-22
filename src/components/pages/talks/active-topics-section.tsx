import CardFeatured from 'components/shared/card-featured';
import CardScrollArea from 'components/shared/card-scroll-area';
import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';

//  ---------------------------------------------------------------------------
//  DATA
//  ---------------------------------------------------------------------------

const TOPICS = [
  {
    id: 'real-world-engineering',
    title: 'Engineering for the Real World',
    description:
      'Designing and building applications that work reliably in challenging conditions—flaky networks, low-end devices, and legacy codebases. Progressive enhancement, resilient architecture, offline-first approaches, and modernizing legacy systems.',
  },
  {
    id: 'web-performance',
    title: 'Web Performance',
    description:
      'Taking real-world slow applications, profiling them, and fixing performance bottlenecks. Learn to use profiling tools effectively, recognize common antipatterns like unnecessary re-renders and memory leaks, and apply optimization techniques.',
  },
  {
    id: 'cs-frontend',
    title: 'Computer Science Meets Front-End',
    description:
      "Exploring how fundamental CS concepts apply to front-end development. Compilers, interpreters, scheduling algorithms, how JavaScript engines work, React's reconciliation, browser rendering pipeline, and code transformation.",
  },
  {
    id: 'ux-psychology',
    title: 'UX, Psychology & Front-End',
    description:
      'How psychological principles and UX research inform technical decisions. Perceived vs actual performance, cognitive load, psychology of loading states, designing for attention, and bridging design thinking with engineering.',
    href: '/talks?category=ux',
  },
];

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function ActiveTopicsSection() {
  return (
    <SectionContainer>
      <SectionHeading title="What I Speak About" />
      <CardScrollArea>
        {TOPICS.map((topic) => (
          <CardFeatured
            key={topic.id}
            className="min-w-[500px] py-4 md:px-4"
            title={topic.title}
            description={topic.description}
          />
        ))}
      </CardScrollArea>
    </SectionContainer>
  );
}

export default ActiveTopicsSection;
