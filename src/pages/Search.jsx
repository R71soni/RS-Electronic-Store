import { useState } from "react";
import { FaPaperPlane, FaRobot } from "react-icons/fa";

const Search = () => {
    const [message, setMessage] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!message.trim()) return;

        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/api/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message,
                }),
            });

            const data = await response.json();
            setAnswer(data.answer);
        } catch (error) {
            console.error(error);
            setAnswer("Something went wrong.");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center p-5">
            <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-blue-600 text-white p-5 flex items-center gap-3">
                    <div className="bg-white text-blue-600 p-3 rounded-full">
                        <FaRobot size={28} />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold">AI Assistant</h1>
                        <p className="text-sm opacity-90">
                            Ask anything and get instant answers
                        </p>
                    </div>
                </div>

                {/* Search */}
                <div className="p-6">
                    <div className="flex gap-3">

                        <input
                            type="text"
                            placeholder="Ask me anything..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                            className="flex-1 border-2 border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                        />

                        <button
                            onClick={handleSearch}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-xl transition duration-300"
                        >
                            <FaPaperPlane size={18} />
                        </button>
                    </div>

                    {/* Loading */}
                    {loading && (
                        <div className="mt-6 flex items-center gap-3 text-blue-600">
                            <FaRobot className="animate-bounce" />
                            <p>AI is thinking...</p>
                        </div>
                    )}

                    {/* Answer */}
                    {answer && !loading && (
                        <div className="mt-8 bg-gray-100 rounded-2xl p-5 border border-gray-200">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-600 text-white p-2 rounded-full">
                                    <FaRobot />
                                </div>

                                <h2 className="font-bold text-lg">
                                    AI Response
                                </h2>
                            </div>

                            <p className="leading-8 text-gray-700 whitespace-pre-wrap">
                                {answer}
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Search;