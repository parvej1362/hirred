import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grid-background"></div>
      <main className="flex-1 container mx-auto px-4 sm:px-10">
        <Header />
        <Outlet />
      </main>
      <footer className="p-6 text-center bg-gray-800 mt-10">
        Made with ❤️ by Parvej!
      </footer>
    </div>
  );
};

export default AppLayout