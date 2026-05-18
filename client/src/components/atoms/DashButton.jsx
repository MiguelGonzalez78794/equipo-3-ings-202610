export default function QuickAccessItem({ id, label, icon, onClick }) {
  return (
<button
  onClick={() => onClick?.(id)}
  aria-label={label}
  className='bg-rosa-menu rounded-xl py-4 px-2 flex flex-col items-center gap-2 shadow-sm hover:shadow-md w-full duration-300 hover:-translate-y-0.5 cursor-pointer'
>
      {icon}
      <span className="text-xs font-bold text-gray-800 ">{label}</span>
    </button>
  );
}