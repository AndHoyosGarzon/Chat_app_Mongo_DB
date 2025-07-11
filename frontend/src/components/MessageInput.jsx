const MessageInput = () => {
  return (
    <form className="px-4 py-2">
      <div className="w-full flex gap-2 relative">
        <input
          id="message"
          placeholder="Send a Message"
          className="input input-bordered  w-full bg-gray-500/10 rounded-full border-gray-500 text-gray-300"
        />
        <button
          type="submit"
          className="absolute end-0 pe-3 btn btn-circle bg-transparent border-0 shadow-none"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-gray-400/90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
