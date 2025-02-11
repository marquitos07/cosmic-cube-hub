import { Rocket, Satellite, Code } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [expandedTimelineItem, setExpandedTimelineItem] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-space-dark">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-up">
            <span className="px-3 py-1 text-sm border border-space-accent/20 rounded-full glass inline-block mb-4 hover:border-space-accent/40 transition-colors cursor-pointer">
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
          <Link 
            to="/progress" 
            className="glass p-6 rounded-lg animate-fade-up transform hover:scale-105 transition-all duration-300 hover:bg-white/20" 
            style={{ animationDelay: "100ms" }}
          >
            <Rocket className="w-10 h-10 mb-4 text-space-accent" />
            <h3 className="text-xl font-semibold mb-2">Project Progress</h3>
            <p className="text-space-accent/80">
              Track our development milestones and upcoming objectives in real-time.
            </p>
          </Link>
          <Link 
            to="/specs" 
            className="glass p-6 rounded-lg animate-fade-up transform hover:scale-105 transition-all duration-300 hover:bg-white/20" 
            style={{ animationDelay: "200ms" }}
          >
            <Satellite className="w-10 h-10 mb-4 text-space-accent" />
            <h3 className="text-xl font-semibold mb-2">Technical Specs</h3>
            <p className="text-space-accent/80">
              Detailed documentation of our CubeSat's technical specifications and capabilities.
            </p>
          </Link>
          <Link 
            to="/code" 
            className="glass p-6 rounded-lg animate-fade-up transform hover:scale-105 transition-all duration-300 hover:bg-white/20" 
            style={{ animationDelay: "300ms" }}
          >
            <Code className="w-10 h-10 mb-4 text-space-accent" />
            <h3 className="text-xl font-semibold mb-2">Code Repository</h3>
            <p className="text-space-accent/80">
              Access our project's source code and contribute to its development.
            </p>
          </Link>
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
              isExpanded={expandedTimelineItem === "2024Q1"}
              onClick={() => setExpandedTimelineItem(expandedTimelineItem === "2024Q1" ? null : "2024Q1")}
              details="During this phase, we'll focus on defining the core architecture of our CubeSat, including power systems, communication modules, and payload integration strategies. Our team will conduct feasibility studies and create detailed technical specifications."
            />
            <TimelineItem
              date="2024 Q2"
              title="Prototype Development"
              description="Building and testing of initial prototypes and key components."
              isExpanded={expandedTimelineItem === "2024Q2"}
              onClick={() => setExpandedTimelineItem(expandedTimelineItem === "2024Q2" ? null : "2024Q2")}
              details="The prototype phase will involve creating physical models of our design, testing individual components, and iterating based on performance data. We'll use rapid prototyping techniques and conduct rigorous testing procedures."
            />
            <TimelineItem
              date="2024 Q3"
              title="Integration Testing"
              description="System integration and comprehensive testing phase."
              isExpanded={expandedTimelineItem === "2024Q3"}
              onClick={() => setExpandedTimelineItem(expandedTimelineItem === "2024Q3" ? null : "2024Q3")}
              details="During integration testing, we'll combine all subsystems and ensure they work together seamlessly. This includes environmental testing, communication systems verification, and full system diagnostics."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const TimelineItem = ({ 
  date, 
  title, 
  description, 
  details,
  isExpanded,
  onClick
}: { 
  date: string; 
  title: string; 
  description: string;
  details: string;
  isExpanded: boolean;
  onClick: () => void;
}) => (
  <div 
    className={`glass p-6 rounded-lg animate-fade-up cursor-pointer transition-all duration-300 ${isExpanded ? 'bg-white/20' : 'hover:bg-white/15'}`}
    onClick={onClick}
  >
    <span className="text-sm text-space-accent/60">{date}</span>
    <h3 className="text-xl font-semibold mt-2 mb-2">{title}</h3>
    <p className="text-space-accent/80">{description}</p>
    <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-48 mt-4' : 'max-h-0'}`}>
      <p className="text-space-accent/70 text-sm">
        {details}
      </p>
    </div>
  </div>
);

export default Index;
