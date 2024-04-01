import type { NextPage } from 'next';
import Button from '@mui/material/Button';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import HomePageButtons from './components/UI/HomePageButtons';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-height:50 min-h-screen bg-blue-50">

        <HomePageButtons />
    </div>
  );
};

export default Home;