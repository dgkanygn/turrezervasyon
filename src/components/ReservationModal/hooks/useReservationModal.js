import { useState, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

export const useReservationModal = (tour, onClose) => {
    const { user } = useContext(AuthContext);
    const [step, setStep] = useState(1); // 1: Summary, 2: Payment
    const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' or 'iban'
    const [isLoading, setIsLoading] = useState(false);

    const handleContinue = () => {
        if (step === 1) {
            setStep(2);
        } else {
            // Finalize reservation logic would go here
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                onClose();
            }, 2000);
        }
    };

    const handleBack = () => {
        if (step === 2) {
            setStep(1);
        } else {
            onClose();
        }
    };

    return {
        user,
        step,
        paymentMethod,
        setPaymentMethod,
        isLoading,
        handleContinue,
        handleBack
    };
};
