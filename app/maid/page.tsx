import { Button } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';

import Link from "next/link";
export default function Page() {
    return (
      

      
        <Link href="/dashboard/maid/book/">
              <Button variant="contained" color="primary" style={{ borderRadius: '50%', minWidth: '64px', height: '64px', margin: '0 8px' }}>
                <AdbIcon/>
              </Button>
            </Link>

    )
}