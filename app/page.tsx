import type { NextPage } from 'next';
import Button from '@mui/material/Button';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import HomePageButtons from './components/UI/HomePageButtons';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
        <HomePageButtons />
    </div>
  );
};

export default Home;