import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';

interface Maid {
    firstname: string;
    lastname: string;
}

interface MaidPageProps {
    maid: Maid;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { lastName } = context.params || {};

    if (!lastName) {
        return {
            notFound: true,
        };
    }

    const res = await fetch(`http://localhost:3000/api/get-maids?lastname=${lastName}`);
    const maid: Maid = await res.json();

    return { props: { maid } };
}

export default function MaidPage({ maid }: MaidPageProps) {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return <div>{maid.firstname} {maid.lastname}</div>;
}
