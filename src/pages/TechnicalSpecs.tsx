
import { ArrowLeft, Satellite } from "lucide-react";
import { Link } from "react-router-dom";

const TechnicalSpecs = () => {
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
            <Satellite className="w-8 h-8 text-space-accent" />
            <h1 className="text-4xl font-bold">Technical Specifications</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Physical Properties</h2>
              <ul className="space-y-2 text-space-accent/80">
                <li className="flex justify-between">
                  <span>Dimensions</span>
                  <span>10 x 10 x 10 cm</span>
                </li>
                <li className="flex justify-between">
                  <span>Mass</span>
                  <span>1.33 kg</span>
                </li>
                <li className="flex justify-between">
                  <span>Form Factor</span>
                  <span>1U CubeSat</span>
                </li>
              </ul>
            </div>

            <div className="glass p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Power System</h2>
              <ul className="space-y-2 text-space-accent/80">
                <li className="flex justify-between">
                  <span>Solar Panels</span>
                  <span>High-efficiency GaAs</span>
                </li>
                <li className="flex justify-between">
                  <span>Battery</span>
                  <span>Li-ion 30Wh</span>
                </li>
                <li className="flex justify-between">
                  <span>Power Generation</span>
                  <span>2.5W (avg)</span>
                </li>
              </ul>
            </div>

            <div className="glass p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Communication</h2>
              <ul className="space-y-2 text-space-accent/80">
                <li className="flex justify-between">
                  <span>Frequency Band</span>
                  <span>UHF/VHF</span>
                </li>
                <li className="flex justify-between">
                  <span>Data Rate</span>
                  <span>9600 bps</span>
                </li>
                <li className="flex justify-between">
                  <span>Protocol</span>
                  <span>AX.25</span>
                </li>
              </ul>
            </div>

            <div className="glass p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Payload</h2>
              <ul className="space-y-2 text-space-accent/80">
                <li className="flex justify-between">
                  <span>Main Sensor</span>
                  <span>Radiation Detector</span>
                </li>
                <li className="flex justify-between">
                  <span>Resolution</span>
                  <span>0.1 μSv/h</span>
                </li>
                <li className="flex justify-between">
                  <span>Field of View</span>
                  <span>120°</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecs;
