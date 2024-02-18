import React from 'react';
import logo from './heartlogo.jpg';
import npm from './npmlogo.jpg';
import './header.css';

function Header() {
  return (
    <div className="header1">
      <div class="header">
        <div class="nav1">
          <div class="logo">
            <img src={logo} alt="heart logo" className="logo" />
          </div>
          <div class="nav-links">
            <li><a href="#team">Team</a></li>
            <li><a href="#pro">Pro</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#documentation">Documentation</a></li>
          </div>
        </div>
        <div class="nav2">
          <div class="logo">
            <img src={npm} alt="npm" className="logo" />
          </div>
          <div class="searchbar">
            <input type="search" placeholder="Search..." />
            <button type="search">search</button>
          </div>
          <div class="button1">
            <button>Sign Up</button>
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
