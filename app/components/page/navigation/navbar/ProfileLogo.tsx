import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';

const ProfileButton = () => {
  return (
    <Link href= "/profile">
      <PersonIcon />
    </Link>
  );
};

export default ProfileButton;
