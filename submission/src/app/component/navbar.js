import React from 'react';
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="navbar" style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', height: '80px', backgroundColor: 'white' }}>
      <div className="left-links" style={{ display: 'flex', alignItems: 'center' }}>
        <Link href="/" className="home-link" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <img src="https://cdn-icons-png.flaticon.com/512/4682/4682932.png" alt="Home" style={{ width: '72px', height: '72px' }} />
          <h1 className="drive-inn-title" style={{ color: "black", fontSize: '24px', fontWeight: 'bold', marginLeft: '10px', marginBottom: '0' }}>DriveInn</h1>
        </Link>
      </div>
      <div className="right-links">
        <Link href="/signup" className="nav-link">Sign Up</Link>
        <Link href="/login" className="nav-link">Log In</Link>
      </div>
    </nav>
  );
}

export default Navbar;