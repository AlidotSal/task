import { useState } from 'react';

export default () => {
  const [amount, setAmount] = useState('');
  const handlePay = () => {
    //make http request to do payment
    console.log(amount);
  };
  return (
    <div className="grid gap-4 justify-center pt-64 dark:text-white">
      <input
        className="w-72 h-12 px-4 text-green-800 dark:text-green-200 dark:bg-neutral-700"
        type="number"
        placeholder="amount..."
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        className="mx-auto px-6 py-4 w-64 border rounded bg-neutral-700"
        type="button"
        onPointerDown={handlePay}
      >
        connect and pay
      </button>
    </div>
  );
};
