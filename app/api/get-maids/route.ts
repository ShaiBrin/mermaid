import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET() {
  const maids = await sql`SELECT * FROM Maids;`;
  return NextResponse.json({ maids }, { status: 200 });
}


// renderTags={(value, getTagProps) =>
//     value.map((option, index) => (
//       // eslint-disable-next-line react/jsx-key
//       <Chip
//         // key={option} // Add a unique key prop
//         {...getTagProps({ index })}
//         label={option}
//         onDelete={handleDeleteOption(option)}
//         color="primary"
//         sx={{ bgcolor: theme.palette.primary.light, margin: '2px' }}
//       />
//     ))
//   }