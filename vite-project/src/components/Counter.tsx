import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="bg-dark-bg p-6 rounded-xl text-center mt-6">
      <h2 className="text-xl font-bold mb-4 text-white">Counter: {count}</h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-bluish hover:bg-red-200 text-white px-4 py-2 rounded"
        >
          -
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-greyish hover:bg-green-200 text-white px-4 py-2 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
