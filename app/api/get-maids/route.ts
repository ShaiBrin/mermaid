import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET() {
  const maids = await sql`SELECT * FROM Maids;`;
  return NextResponse.json({ maids }, { status: 200 });
}

