
import { ArrowLeft, Code, Github } from "lucide-react";
import { Link } from "react-router-dom";

const CodeRepository = () => {
  return (
    <div className="min-h-screen bg-space-dark">
      <div className="max-w-6xl mx-auto p-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-space-accent hover:text-space-accent/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="animate-fade-up">
          <div className="flex items-center gap-4 mb-6">
            <Code className="w-8 h-8 text-space-accent" />
            <h1 className="text-4xl font-bold">Code Repository</h1>
          </div>

          <div className="space-y-6">
            <div className="glass p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">Main Repository</h2>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
              </div>
              <p className="text-space-accent/80 mb-4">
                Access our project's source code and contribute to its development. The repository includes flight software, ground station code, and testing utilities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Flight Software</h3>
                  <p className="text-sm text-space-accent/70">Core system control and payload management software.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Ground Station</h3>
                  <p className="text-sm text-space-accent/70">Communication and telemetry handling systems.</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">API Reference</h3>
                  <p className="text-sm text-space-accent/70">Comprehensive documentation of system interfaces and protocols.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Development Guide</h3>
                  <p className="text-sm text-space-accent/70">Setup instructions and best practices for contributors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeRepository;
