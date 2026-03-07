import { useEffect, useState } from "react";

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-zinc-900 flex items-center justify-center">
            <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full border-4 border-zinc-700"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-teal-400 border-t-transparent animate-spin"></div>
                </div>
                <p className="text-teal-400 font-semibold text-sm tracking-widest uppercase animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
};

export default Preloader;
