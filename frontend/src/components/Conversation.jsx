const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar avatar-online">
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 ">
        <div className="flex items-center justify-between  gap-3">
          <p className="text-xs font-bold">John Doe</p>
          <span className="text-md ">😀</span>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Conversation;
