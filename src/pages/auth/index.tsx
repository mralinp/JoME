import { useState } from "react";
import { Button } from "primereact/button";
import Welcome from "./components/Welcome";
import QRCode from "./components/QRCode";
import WiFiSetup from "./components/WiFiSetup";
import Success from "./components/Success";
import "./auth.css";

const AuthPage = () => {
  const [step, setStep] = useState(0);
  const totalSteps = 4; // Adjust based on your total steps

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleFinish = () => {
    // Handle completion logic here
    console.log('Setup completed');
  };

  const renderBackButton = () => {
    if (step === 0) return null;
    
    return (
      <Button
        icon="pi pi-arrow-left"
        className="back-button"
        onClick={handleBack}
        severity="secondary"
        rounded
      />
    );
  };

  const renderDotIndicator = () => {
    return (
      <div className="dot-indicator">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`dot ${index === step ? 'active' : ''}`}
          />
        ))}
      </div>
    );
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Welcome onNext={handleNext} />;
      case 1:
        return <QRCode onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <WiFiSetup onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <Success onFinish={handleFinish} />;
      default:
        return null;
    }
  };

  return (
    <div className="auth-page">
      <div className="steps-section">
        {renderBackButton()}
        {renderDotIndicator()}
      </div>
      <div className="content-section">
        {renderStep()}
      </div>
    </div>
  );
};

export default AuthPage;
