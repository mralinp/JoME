import { Button } from "primereact/button";
import { Card } from "primereact/card";

interface WelcomeProps {
  onNext: () => void;
}

const Welcome = ({ onNext }: WelcomeProps) => {
  return (
    <Card className="welcome-step text-center">
      <div className="flex flex-column align-items-center gap-4">
        <div className="logo-container">
          <i className="pi pi-leaf" style={{ 
            fontSize: '4rem', 
            color: 'var(--green-500)',
            padding: '2rem',
            borderRadius: '50%',
            backgroundColor: 'var(--green-100)'
          }}></i>
        </div>
        <div className="welcome-text">
          <h1 className="text-2xl font-bold mb-2">Welcome to JoME</h1>
          <p className="text-gray-600 mb-4">
            Your smart plant monitoring companion
          </p>
        </div>
        <Button 
          label="Get Started" 
          icon="pi pi-arrow-right" 
          iconPos="right"
          onClick={onNext}
          className="w-full p-button-rounded p-button-lg"
        />
      </div>
    </Card>
  );
};

export default Welcome;
