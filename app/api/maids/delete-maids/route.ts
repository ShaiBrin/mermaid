import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Delete all rows from the Maids table
    await sql`DELETE FROM Maids;`;
    
    // Optionally, you can fetch the updated table to confirm that it’s empty
    const maids = await sql`SELECT * FROM Maids;`;
    
    return NextResponse.json({ maids }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
