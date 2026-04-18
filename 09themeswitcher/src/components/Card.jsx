import React from 'react'
import useTheme from '../contexts/theme';

export default function Card() {

    const { themeMode } = useTheme();

    return (
        <div className={`w-full border rounded-lg shadow ${
            themeMode === "dark"
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-gray-200 text-black"
        }`}>
            <a href="/">
                <img
                    className="p-8 rounded-t-lg"
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg"
                    alt="product"
                />
            </a>

            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className={`text-xl font-semibold tracking-tight ${
                        themeMode === "dark" ? "text-white" : "text-gray-900"
                    }`}>
                        Apple Watch Series 7 GPS, Aluminium Case
                    </h5>
                </a>

                <div className="flex items-center mt-2.5 mb-5">
                    <span className={`px-2.5 py-0.5 rounded ${
                        themeMode === "dark"
                            ? "bg-blue-200 text-blue-800"
                            : "bg-blue-100 text-blue-800"
                    }`}>
                        4.0
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className={`text-3xl font-bold ${
                        themeMode === "dark" ? "text-white" : "text-gray-900"
                    }`}>
                        $599
                    </span>

                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}