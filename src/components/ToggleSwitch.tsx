import React from 'react';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import './ToggleSwitch.css';

interface ToggleSwitchProps {
    checked: boolean;
    onChange: (e: InputSwitchChangeEvent) => void;
    className?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange, className = '' }) => {
    return (
        <div className="switch-wrapper">
            <span className="switch-text switch-0">0</span>
            <InputSwitch
                checked={checked}
                onChange={onChange}
                className={`zone-switch ${className}`}
            />
            <span className="switch-text switch-1">1</span>
        </div>
    );
};

export default ToggleSwitch; 