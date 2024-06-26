import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
 
  try {
    if (!firstName || !lastName) throw new Error('Maids first and last name are required');
    await sql`INSERT INTO Maids (LastName, FirstName) VALUES (${lastName}, ${firstName});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const maids = await sql`SELECT * FROM Maids;`;
  return NextResponse.json({ maids }, { status: 200 });
}