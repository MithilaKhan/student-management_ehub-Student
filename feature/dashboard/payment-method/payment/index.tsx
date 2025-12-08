"use client"
import React from 'react';
import PaymentSuccessModal from './PaymentSuccessModal';

const Payment = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <div className="h-[calc(98vh-134px)]  flex items-center justify-center p-4">
        <div className="w-full max-w-lg">
          <div className="">
            {/* Recipient Field */}
            <div className="bg-[#0A0B0D] rounded-xl px-5 py-4 mb-5">
              <div className="flex items-center gap-3 text-[#F1F1F1] text-sm mb-2">
                <div className="w-8 h-8 bg-[#0A0B0D] rounded-full flex items-center justify-center text-xs font-bold">
                  EH
                </div>
                E-hub
              </div>
              <div className="text-white text-lg font-medium">
                01887786648
              </div>
            </div>

            {/* Amount Field */}
            <div className="bg-[#0A0B0D] rounded-xl px-5 py-6">
              <div className="text-[#F1F1F1] text-lg mb-5">Amount</div>

              <input
                type="text"
                defaultValue="৳3200.00"
                className="bg-transparent text-2xl text-center font-bold text-emerald-400 outline-none w-full placeholder-[#0A0B0D]"
                placeholder="৳0.00"
              />

              <div className="text-neutral-500 text-xs mt-2 text-center pb-5">
                Available Balance: ৳210.00
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-8">
              <button className="flex-1 py-4  text-red-600 rounded-xl font-semibold hover:bg-neutral-700 transition border border-red-600" >
                Cancel
              </button>
              <button className="flex-1 py-4 bg-[#1A5FA4] text-white rounded-xl font-semibold transition" onClick={() => setOpen(true)}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <PaymentSuccessModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Payment;