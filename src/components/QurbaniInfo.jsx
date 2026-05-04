import React from "react";

const QurbaniInfo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Qurbani Tips */}
      <div className="border rounded-xl p-6 shadow-sm bg-white">
        <h2 className="text-xl font-bold mb-4">🕌 Qurbani Tips</h2>

        <ul className="space-y-2 text-sm text-gray-700">
          <li>✔ Choose a healthy animal with no visible defects</li>
          <li>✔ Check weight and age before booking</li>
          <li>✔ Ensure proper vaccination history</li>
          <li>✔ Prefer trusted sellers and platforms</li>
          <li>✔ Book early to avoid price hike</li>
        </ul>
      </div>

      {/* Top Breeds */}
      <div className="border rounded-xl p-6 shadow-sm bg-white">
        <h2 className="text-xl font-bold mb-4">🐄 Top Breeds</h2>

        <ul className="space-y-2 text-sm text-gray-700">
          <li>🐄 Sahiwal Cow — High milk production</li>
          <li>🐄 Friesian Cross — Large size & premium meat</li>
          <li>🐑 Black Bengal Goat — Best meat quality</li>
          <li>🐑 Jamunapari Goat — Big & healthy breed</li>
          <li>🐄 Red Sindhi Cow — Dual purpose (milk + meat)</li>
        </ul>
      </div>

    </div>
  );
};

export default QurbaniInfo;