import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(request: Request) {
  try {
    // Read the availabilities JSON file
    const filePath = path.join(process.cwd(), 'data', 'availabilities.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const availabilities = JSON.parse(fileContent);

    // Insert availability data into PostgreSQL
    for (const maid of availabilities) {
      const { maidId, availabilities: maidAvailabilities } = maid;
      for (const availability of maidAvailabilities) {
        const { day, hours } = availability;
        await sql`
          INSERT INTO Availabilities (maid_id, day, hours)
          VALUES (${maidId}, ${day}, ${JSON.stringify(hours)});
        `;
      }
    }

    // Retrieve all availabilities to confirm
    const allAvailabilities = await sql`SELECT * FROM Availabilities;`;
    return NextResponse.json({ allAvailabilities }, { status: 200 });

  } catch (error) {
    console.error('Error inserting availabilities:', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
