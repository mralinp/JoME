import { useState } from "react";
import { Steps } from "primereact/steps";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import Welcome from "./components/Welcome";
import "./auth.css";

const AuthPage = () => {
  const [step, setStep] = useState(0);

  const steps = [
    { label: "Welcome" },
    { label: "QR Code" },
    { label: "WiFi" },
    { label: "Complete" },
  ];

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Welcome onNext={() => setStep(1)} />;
      case 1:
        return (
          <Card className="qr-step">
            <h2>Scan Your Device QR Code</h2>
            {/* Add QR scanner component here */}
            <Button
              label="QR Code Scanned"
              icon="pi pi-check"
              onClick={() => setStep(2)}
              className="w-full p-button-rounded"
            />
          </Card>
        );
      case 2:
        return (
          <Card className="wifi-step">
            <h2>Select WiFi Network</h2>
            <Dropdown
              className="w-full mb-3"
              placeholder="Select a network..."
              options={[]} // Add your WiFi network options here
            />
            <Button
              label="Connect"
              icon="pi pi-wifi"
              onClick={() => setStep(3)}
              className="w-full p-button-rounded"
            />
          </Card>
        );
      case 3:
        return (
          <Card className="success-step">
            <h2>Setup Complete!</h2>
            <p>Your JoME device is ready to use</p>
            <i
              className="pi pi-check-circle"
              style={{ fontSize: "3rem", color: "var(--green-500)" }}
            ></i>
          </Card>
        );
    }
  };

  return (
    <div className="auth-page p-3">
      <Steps model={steps} activeIndex={step} className="mb-4" />
      {renderStep()}
    </div>
  );
};

export default AuthPage;
