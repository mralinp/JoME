import { Button } from "primereact/button";

interface QRCodeProps {
  onNext: () => void;
  onBack: () => void;
}

const QRCode = ({ onNext, onBack }: QRCodeProps) => {
  return (
    <div className="qr-step text-center">
      <div className="flex flex-column align-items-center gap-4">
        <h1 className="text-2xl font-bold">Scan QR Code</h1>
        <p className="text-gray-600">
          Scan the QR code on your device to connect
        </p>
        {/* QR code component will go here */}
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

export default QRCode; 