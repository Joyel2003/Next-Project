"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
    const [inputVal, setInputVal] = useState("");
    const {push} = useRouter()
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        push(`/prediction/${inputVal}`)
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-4 shadow-md bg-white rounded-md">
                <h1 className="text-2xl font-semibold mb-4 text-black">Enter Your Name</h1>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input type="text" 
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    className="w-full p-2 border border-gray-300 text-black" 
                    placeholder="Type something..."
                    />
                <button type="submit">Predict Data</button>
            </form>
        </div>
    );
}

