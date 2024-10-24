'use client';
import MaidConfirmationCard from "@/app/components/actors/leftside/MaidCard/MaidConfirmationCard";


export default function MaidLayout({ children }: { children: React.ReactNode }) {

    const rosalio = {
        name: 'Emily Rosalio',
        rating: '4.5',
        price: '$20/hour',
        experience: '3 years',
        estimateTime: '15 minutes',
      };
    return (
        <div className="flex flex-grow">
            <MaidConfirmationCard maid={rosalio}/>
        </div>
    );
    
}
