import Sidebar from "../../components/Sidebar";
import MessagesContainer from "../../components/MessagesContainer";

const Home = () => {
  return (
    <div className="flex h-[720px] rounded-lg overflow-hidden text-gray-300 bg-gray-500/25">
      <Sidebar />
      <MessagesContainer />
    </div>
  );
};

export default Home;
