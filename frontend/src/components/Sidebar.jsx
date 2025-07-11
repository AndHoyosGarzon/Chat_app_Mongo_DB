import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";

const Sidebar = () => {
  return (
    <div className="boder-r border-slate-500 p-4 flex flex-col gap-4">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
