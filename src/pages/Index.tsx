
import { Rocket, Satellite, Code } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-space-dark">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-up">
            <span className="px-3 py-1 text-sm border border-space-accent/20 rounded-full glass inline-block mb-4">
              CubeSat Project
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Exploring the Future of
              <br />
              <span className="text-space-accent">Space Technology</span>
            </h1>
            <p className="text-lg text-space-accent/80 max-w-2xl mb-8">
              Documenting our journey in developing a next-generation CubeSat platform for space exploration and research.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-6 rounded-lg animate-fade-up" style={{ animationDelay: "100ms" }}>
            <Rocket className="w-10 h-10 mb-4 text-space-accent" />
            <h3 className="text-xl font-semibold mb-2">Project Progress</h3>
            <p className="text-space-accent/80">
              Track our development milestones and upcoming objectives in real-time.
            </p>
          </div>
          <div className="glass p-6 rounded-lg animate-fade-up" style={{ animationDelay: "200ms" }}>
            <Satellite className="w-10 h-10 mb-4 text-space-accent" />
            <h3 className="text-xl font-semibold mb-2">Technical Specs</h3>
            <p className="text-space-accent/80">
              Detailed documentation of our CubeSat's technical specifications and capabilities.
            </p>
          </div>
          <div className="glass p-6 rounded-lg animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Code className="w-10 h-10 mb-4 text-space-accent" />
            <h3 className="text-xl font-semibold mb-2">Code Repository</h3>
            <p className="text-space-accent/80">
              Access our project's source code and contribute to its development.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Project Timeline</h2>
          <div className="space-y-8">
            <TimelineItem
              date="2024 Q1"
              title="Initial Design Phase"
              description="Conceptualization and preliminary design of the CubeSat structure and systems."
            />
            <TimelineItem
              date="2024 Q2"
              title="Prototype Development"
              description="Building and testing of initial prototypes and key components."
            />
            <TimelineItem
              date="2024 Q3"
              title="Integration Testing"
              description="System integration and comprehensive testing phase."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const TimelineItem = ({ date, title, description }: { date: string; title: string; description: string }) => (
  <div className="glass p-6 rounded-lg animate-fade-up">
    <span className="text-sm text-space-accent/60">{date}</span>
    <h3 className="text-xl font-semibold mt-2 mb-2">{title}</h3>
    <p className="text-space-accent/80">{description}</p>
  </div>
);

export default Index;
