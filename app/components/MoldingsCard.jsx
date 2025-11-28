"use client";
import { useState } from "react";

function MoldingsCard({ molding }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      key={molding.id}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 "
    >
      <div onClick={() => setOpen(true)}>
        <div className="relative h-64 bg-gray-50 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-700">
            <img src={molding.image}
            loading="lazy"
            className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4"
        >
          <img
            src={molding.image}
            className="max-w-[90%] max-h-[90%] rounded-lg object-contain"
          />
        </div>
      )}
    </div>
  );
}

export default MoldingsCard;
