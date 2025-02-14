"use client";
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { Provider } from 'react-redux';
import { AuthProvider } from './context/auth';
import store from './store';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthProvider>
                <Provider store={store}>
                    {children}
                </Provider>
            </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}