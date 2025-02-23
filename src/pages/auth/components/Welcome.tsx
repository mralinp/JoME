import { Button } from "primereact/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

interface WelcomeProps {
  onNext: () => void;
}

const Welcome = ({ onNext }: WelcomeProps) => {
  return (
    <div className="welcome-step text-center">
      <div className="flex flex-column align-items-center gap-4">
        <div className="logo-container">
          <FontAwesomeIcon 
            icon={faSeedling} 
            className="logo-icon"
          />
        </div>
        <div className="welcome-text">
          <h1 className="text-2xl font-bold mb-2">Hi, I'm JoME</h1>
          <p className="welcome-subtitle">
            your gardener
          </p>
        </div>
        <Button 
          label="Get Started" 
          icon="pi pi-arrow-right" 
          iconPos="right"
          onClick={onNext}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Welcome;
