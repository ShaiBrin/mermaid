import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  try {
    // Read the maids.json file
    const jsonFilePath = path.join(process.cwd(), 'data', 'maids.json');
    const maidsData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

    // Insert each maid into the database
    for (const maid of maidsData) {
      await sql`
        INSERT INTO Maids (first_name, last_name, phone_number, email, experience_level, rating, price, availability)
        VALUES (${maid.first_name}, ${maid.last_name}, ${maid.phone_number}, ${maid.email}, ${maid.experience_level}, ${maid.rating}, ${maid.price}, ${JSON.stringify(maid.availability)});
      `;
    }

    return NextResponse.json({ message: 'Maids added successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to add maids' }, { status: 500 });
  }
}
