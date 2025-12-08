import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import { Modal } from "antd";
import { useRouter } from "next/navigation";

interface PaymentSuccessModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const PaymentSuccessModal: React.FC<PaymentSuccessModalProps> = ({ open, setOpen }) => {
    const router = useRouter();

    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                router.push("/payment-method/payment-history");
                setOpen(false);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [open]);

    return (
        <Modal open={open} footer={null} onCancel={() => setOpen(false)} centered>
            <div className="flex items-center justify-center flex-col py-10">
                <div className="w-20 h-20 bg-cyan-50 rounded-full flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-[#00C2CB] rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
                        <FaCheck className="text-black text-3xl" />
                    </div>
                </div>

                <h2 className="text-white text-2xl font-medium mb-3 text-center">
                    Payment Successful
                </h2>

                <p className="text-neutral-400 text-sm font-light text-center">
                    Your payment has been processed successfully.
                </p>
            </div>
        </Modal>
    );
};

export default PaymentSuccessModal;