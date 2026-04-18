import UserIcon from "./UserIcon";

const PostContent = ({ name, children }) => {
  const [first, ...rest] = name.split(" ");

  return (
    <div className="flex items-start gap-3">
      <div className="flex flex-col items-center gap-1 shrink-0">
        <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
          <UserIcon />
        </div>
        <span className="text-[11px] text-gray-500 font-medium text-center leading-tight">
          {first}
          {rest.length > 0 && (
            <>
              <br />
              {rest.join(" ")}
            </>
          )}
        </span>
      </div>
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
};

export default UserContentAtom;