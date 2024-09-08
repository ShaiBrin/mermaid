import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  try {
    // Read the locations.json file
    const jsonFilePath = path.join(process.cwd(), 'data', 'locations.json');
    const locationsData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

    console.log("These are the files")
    console.log(locationsData)
    // Insert each location into the database
    for (const location of locationsData) {
      await sql`
        INSERT INTO Locations (name, latitude, longitude) 
        VALUES (${location.name}, ${location.latitude}, ${location.longitude});
      `;
    }

    return NextResponse.json({ message: 'Locations added successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to add locations' }, { status: 500 });
  }
}
