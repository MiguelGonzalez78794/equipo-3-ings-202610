import { useState } from "react";

export default function NewsCard({ image, fallbackBg = "#c9bfb0", title, description, renderImage }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="min-w-40 bg-white rounded-xl overflow-hidden shadow-sm shrink-0">
      {/* Zona de imagen */}
      {renderImage ? (
        renderImage()
      ) : imgError || !image ? (
        <div className="w-full h-24" style={{ background: fallbackBg }} />
      ) : (
        <img
          src={image}
          alt={title}
          className="w-full h-24 object-cover"
          onError={() => setImgError(true)}
        />
      )}

      {/* Texto */}
      <div className="p-2.5">
        <h3 className="text-xs font-bold text-negro-txt mb-1 leading-snug">{title}</h3>
        <p className="text-[11px] text-negro-txt leading-snug">{description}</p>
      </div>
    </div>
  );
}