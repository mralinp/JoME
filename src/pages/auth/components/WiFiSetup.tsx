import { Button } from "primereact/button";

interface WiFiSetupProps {
  onNext: () => void;
  onBack: () => void;
}

const WiFiSetup = ({ onNext, onBack }: WiFiSetupProps) => {
  return (
    <div className="wifi-step text-center">
      <div className="flex flex-column align-items-center gap-4">
        <h1 className="text-2xl font-bold">WiFi Setup</h1>
        <p className="text-gray-600">
          Connect your device to WiFi
        </p>
        {/* WiFi setup form will go here */}
        <Button 
          label="Next" 
          icon="pi pi-arrow-right" 
          iconPos="right"
          onClick={onNext}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default WiFiSetup; 