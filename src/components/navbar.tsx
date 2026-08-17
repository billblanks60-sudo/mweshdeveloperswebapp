'use client';

import React from 'react';
import Image from 'next/image';
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const LOGO_URL = 'https://api.dicebear.com/7.x/initials/svg?seed=Mwesh%20Developers%20Global';

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color={isScrolling ? 'white' : 'transparent'}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/50 bg-white/10 shadow-lg shadow-blue-900/20">
            <Image src={LOGO_URL} alt="Mwesh Developers Global logo" fill className="object-cover" />
          </div>
          <div className="flex flex-col">
            <Typography
              color={isScrolling ? 'blue-gray' : 'white'}
              className="text-sm font-bold uppercase tracking-[0.2em] opacity-80"
            >
              Mwesh
            </Typography>
            <Typography
              color={isScrolling ? 'blue-gray' : 'white'}
              className="text-xs font-medium"
            >
              Developers Global
            </Typography>
          </div>
        </Link>

        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? 'text-gray-900' : 'text-white'
          }`}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link href={href}>
                <span className="font-medium hover:text-opacity-80 transition cursor-pointer">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden gap-3 lg:flex">
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Link href="/dashboard">
                <Button
                  variant="text"
                  className={isScrolling ? 'text-gray-900' : 'text-white'}
                >
                  {user?.name || 'Dashboard'}
                </Button>
              </Link>
              <Button
                onClick={() => void logout()}
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Link href="/login">
                <Button
                  variant="text"
                  className={isScrolling ? 'text-gray-900' : 'text-white'}
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>

        <IconButton
          variant="text"
          onClick={handleOpen}
          ripple={false}
          className="lg:hidden"
        >
          {open ? (
            <XMarkIcon
              className={`h-6 w-6 ${isScrolling ? 'text-gray-900' : 'text-white'}`}
            />
          ) : (
            <Bars3Icon
              className={`h-6 w-6 ${isScrolling ? 'text-gray-900' : 'text-white'}`}
            />
          )}
        </IconButton>
      </div>

      <Collapse open={open} className={isScrolling ? 'bg-white' : 'bg-blue-900'}>
        <div className="container mx-auto space-y-2 px-4 py-4">
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              <div
                className={`p-2 font-medium rounded hover:bg-opacity-50 ${
                  isScrolling
                    ? 'text-gray-900 hover:bg-gray-200'
                    : 'text-white hover:bg-blue-800'
                }`}
              >
                {label}
              </div>
            </Link>
          ))}

          <div className="flex gap-2 pt-4 border-t">
            {isAuthenticated ? (
              <>
                <Link href="/dashboard" className="flex-1">
                  <Button
                    fullWidth
                    variant="outlined"
                    className={isScrolling ? 'text-gray-900' : 'text-white'}
                  >
                    Dashboard
                  </Button>
                </Link>
                <Button
                  fullWidth
                  onClick={() => void logout()}
                  className="bg-red-500 text-white"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login" className="flex-1">
                  <Button fullWidth variant="outlined">
                    Login
                  </Button>
                </Link>
                <Link href="/signup" className="flex-1">
                  <Button fullWidth className="bg-blue-600 text-white">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
