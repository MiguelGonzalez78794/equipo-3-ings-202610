export default function QuickAccessItem({ id, label, icon, onClick }) {
  return (
    <button
      onClick={() => onClick?.(id)}
      aria-label={label}
      className="bg-[#E5D7D7] rounded-xl py-5 px-2 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-shadow"
    >
      {icon}
      <span className="text-xs font-semibold text-gray-800">{label}</span>
    </button>
  );
}