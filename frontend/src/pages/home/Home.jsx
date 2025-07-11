import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <div className="flex h-[720px] rounded-lg overflow-hidden text-gray-300 bg-gray-500/25">
      <Sidebar />
      {/* 
      <MessageContainer/>
      */}
    </div>
  );
};

export default Home;
