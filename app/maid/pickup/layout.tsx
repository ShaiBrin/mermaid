'use client';
import DateTimePicker from "@/app/components/actors/leftside/DateTimePicker/DateTimePicker";

export default function MaidLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-grow">
            <DateTimePicker/>
        </div>
    );
}
