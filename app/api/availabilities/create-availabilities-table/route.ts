import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const result = await sql`
      CREATE TABLE Availabilities (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        maid_id UUID REFERENCES Maids(id),
        day_of_week INT CHECK (day_of_week BETWEEN 1 AND 7),
        specific_date DATE, -- Optional for specific days
        start_time TIME NOT NULL,
        end_time TIME NOT NULL
      );
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
