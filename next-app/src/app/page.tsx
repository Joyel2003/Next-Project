"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const [inputVal, setInputVal] = useState("");
    const { push } = useRouter();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (inputVal.trim() !== "") {
            push(`/prediction/${inputVal}`);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-6 shadow-md bg-white rounded-md w-96">
                <h1 className="text-2xl font-semibold mb-4 text-black">Enter Your Name</h1>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                        type="text"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded text-black"
                        placeholder="Type your name..."
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    >
                        Predict Data
                    </button>
                </form>
            </div>
        </div>
    );
}
