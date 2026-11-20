import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'CAFE BARBEQUE | Order Online', description: 'Order delicious grilled food from CAFE BARBEQUE, Kundara.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
