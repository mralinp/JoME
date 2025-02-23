import { Button } from "primereact/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { InputText } from "primereact/inputtext";
import { useState } from "react";

interface SuccessProps {
  onFinish: () => void;
}

const Success = ({ onFinish }: SuccessProps) => {
  const [gardenName, setGardenName] = useState('');

  return (
    <div className="success-step text-center">
      <div className="flex flex-column align-items-center gap-4">
        <div className="success-icon">
          <FontAwesomeIcon 
            icon={faCheckCircle} 
            className="text-8xl text-primary"
            style={{ fontSize: '5rem' }}
          />
        </div>
        <h1 className="text-2xl font-bold">All Set!</h1>
        
        <div className="garden-form w-full">
          <InputText
            value={gardenName}
            onChange={(e) => setGardenName(e.target.value)}
            className="w-full text-center"
            placeholder="Name your garden"
          />
        </div>

        <Button 
          label="Start Gardening" 
          onClick={onFinish}
          className="w-full"
          disabled={!gardenName.trim()}
          icon={<FontAwesomeIcon icon={faSeedling} />}
          iconPos="right"
        />
      </div>
    </div>
  );
};

export default Success; 