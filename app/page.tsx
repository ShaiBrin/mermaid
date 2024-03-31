import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-500 mb-8">Mermaid</h1>
      <div className="flex space-x-7">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full">
          Maid Icon {/* Replace with actual SVG/icon component */}
        </div>
        <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full">
          Customer Icon {/* Replace with actual SVG/icon component */}
        </div>
      </div>
    </div>
  );
};

export default Home;