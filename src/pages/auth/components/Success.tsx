import { Button } from "primereact/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

interface SuccessProps {
  onFinish: () => void;
}

const Success = ({ onFinish }: SuccessProps) => {
  return (
    <div className="success-step text-center">
      <div className="flex flex-column align-items-center gap-4">
        <div className="success-icon">
          <FontAwesomeIcon 
            icon={faCheckCircle} 
            className="text-6xl text-primary"
          />
        </div>
        <h1 className="text-2xl font-bold">All Set!</h1>
        <p className="text-gray-600">
          Your device is ready to use
        </p>
        <Button 
          label="Get Started" 
          icon="pi pi-arrow-right" 
          iconPos="right"
          onClick={onFinish}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Success; 