// import { useRouter } from 'next/router';
// import { GetServerSidePropsContext } from 'next';
// import DropdownPickUp from '@/app/components/actors/leftside/DashboardPickUp/DropdownPickUp';

// interface Maid {
//     firstname: string;
//     lastname: string;
// }

// interface MaidPageProps {
//     maids: Maid[];
// }

// export async function getServerSideProps(context: GetServerSidePropsContext) {

//     const res = await fetch(`http://localhost:3000/api/get-maids`);
//     if (!res.ok) {
//         return {
//             notFound: true,
//         };
//     }
//     const maids: Maid[] = await res.json();
//     return { props: { maids } };
// }

// const MaidPage: React.FC<MaidPageProps> = ({ maids }) => {
//     const router = useRouter();
//         if (router.isFallback) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <DropdownPickUp maids={maids} />
//         </div>
//     );
// };

// export default MaidPage;
