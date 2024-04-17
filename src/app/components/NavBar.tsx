'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
const NavBar = () => {
  const page = usePathname();

  return (
    <div className='nav'>
      <div>
        <ul>
          <li>
            <Link className={`link ${page === '/' ? 'active' : ''}`} href="/">
              <p>Home</p>
            </Link>
          </li>
          <li >
            <Link className={`link ${page === '/spotify' ? 'active' : ''}`} href="/spotify">
              <p>Spotify</p>
            </Link>
          </li>
          <li >
            <Link className={`link ${page === '/games' ? 'active' : ''}`} href="/games">
              <p>Games</p>
              </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar