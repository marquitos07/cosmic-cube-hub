
import { ArrowLeft, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectProgress = () => {
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
            <Rocket className="w-8 h-8 text-space-accent" />
            <h1 className="text-4xl font-bold">Project Progress</h1>
          </div>
          
          <div className="space-y-6">
            <div className="glass p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Current Status</h2>
              <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-space-accent rounded-full"></div>
              </div>
              <p className="mt-2 text-space-accent/80">Phase 1: Design - 33% Complete</p>
            </div>

            <div className="glass p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Recent Updates</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-space-accent pl-4">
                  <p className="text-sm text-space-accent/60">March 15, 2024</p>
                  <p className="text-space-accent/80">Completed initial design review</p>
                </div>
                <div className="border-l-2 border-space-accent pl-4">
                  <p className="text-sm text-space-accent/60">March 10, 2024</p>
                  <p className="text-space-accent/80">Finalized power system specifications</p>
                </div>
                <div className="border-l-2 border-space-accent pl-4">
                  <p className="text-sm text-space-accent/60">March 5, 2024</p>
                  <p className="text-space-accent/80">Started thermal analysis simulations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;
