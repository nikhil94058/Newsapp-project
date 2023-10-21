import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">News</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About us</Link>
            </li>

            <li className="nav-item dropdown">
              <Link to="/business" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Business
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/business/stocks" className="dropdown-item">Stocks</Link></li>
                <li><Link to="/business/economy" className="dropdown-item">Economy</Link></li>
                <li className="dropdown">
                  <Link to="/business/companies" className="dropdown-item dropdown-toggle">Companies</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/business/tech-companies" className="dropdown-item">Tech Companies</Link></li>
                    <li><Link to="/business/retail-companies" className="dropdown-item">Retail Companies</Link></li>
                    <li><Link to="/business/energy-companies" className="dropdown-item">Energy Companies</Link></li>
                  </ul>
                </li>
                <li><Link to="/business/finance" className="dropdown-item">Finance</Link></li>
                <li><hr className="dropdown-divider" />
                </li>
                <li><Link to="/business/real-estate" className="dropdown-item">Real Estate</Link></li>
              </ul>
            </li>



            <li className="nav-item dropdown">
              <Link to="/technology" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Technology
              </Link>
              <ul className="dropdown-menu">
                <li className="dropdown">
                  <Link to="/technology/gadgets" className="dropdown-item dropdown-toggle">Gadgets</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/technology/gadgets/smartphones" className="dropdown-item">Smartphones</Link></li>
                    <li><Link to="/technology/gadgets/laptops" className="dropdown-item">Laptops</Link></li>
                    <li><Link to="/technology/gadgets/wearables" className="dropdown-item">Wearables</Link></li>
                  </ul>
                </li>
                <li><Link to="/technology/internet" className="dropdown-item">Internet</Link></li>
                <li className="dropdown">
                  <Link to="/technology/software" className="dropdown-item dropdown-toggle">Software</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/technology/software/operating-systems" className="dropdown-item">Operating Systems</Link></li>
                    <li><Link to="/technology/software/apps" className="dropdown-item">Apps</Link></li>
                  </ul>
                </li>
                <li><Link to="/technology/innovations" className="dropdown-item">Innovations</Link></li>
                <li><Link to="/technology/cybersecurity" className="dropdown-item">Cybersecurity</Link></li>
                <li><Link to="/technology/ai-machine-learning" className="dropdown-item">AI & Machine Learning</Link></li>
              </ul>
            </li>


            <li className="nav-item dropdown">
              <Link to="/sports" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sports
              </Link>
              <ul className="dropdown-menu">
                <li className="dropdown">
                  <Link to="/sports/football" className="dropdown-item dropdown-toggle">Football</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/sports/football/nfl" className="dropdown-item">NFL</Link></li>
                    <li><Link to="/sports/football/soccer" className="dropdown-item">Soccer</Link></li>
                    <li><Link to="/sports/football/college-football" className="dropdown-item">College Football</Link></li>
                  </ul>
                </li>
                <li><Link to="/sports/basketball" className="dropdown-item">Basketball</Link></li>
                <li><Link to="/sports/baseball" className="dropdown-item">Baseball</Link></li>
                <li><Link to="/sports/tennis" className="dropdown-item">Tennis</Link></li>
                <li><Link to="/sports/olympics" className="dropdown-item">Olympics</Link></li>
                <li className="dropdown">
                  <Link to="/sports/athlete-profiles" className="dropdown-item dropdown-toggle">Athlete Profiles</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/sports/athlete-profiles/player-transfers" className="dropdown-item">Player Transfers</Link></li>
                    <li><Link to="/sports/athlete-profiles/olympic-records" className="dropdown-item">Olympic Records</Link></li>
                  </ul>
                </li>
              </ul>
            </li>


            <li className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Entertainment
              </Link>
              <ul className="dropdown-menu">
                <li className="dropdown">
                  <Link to="#" className="dropdown-item dropdown-toggle">Movies</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="#" className="dropdown-item">Film Reviews</Link></li>
                    <li><Link to="#" className="dropdown-item">Upcoming Releases</Link></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link to="#" className="dropdown-item dropdown-toggle">Music</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="#" className="dropdown-item">Artists</Link></li>
                    <li><Link to="#" className="dropdown-item">Concerts</Link></li>
                  </ul>
                </li>
                <li><Link to="#" className="dropdown-item">TV Shows</Link></li>
                <li className="dropdown">
                  <Link to="#" className="dropdown-item dropdown-toggle">Celebrities</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="#" className="dropdown-item">Gossip</Link></li>
                    <li><Link to="#" className="dropdown-item">Interviews</Link></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link to="#" className="dropdown-item dropdown-toggle">Awards</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="#" className="dropdown-item">Oscars</Link></li>
                    <li><Link to="#" className="dropdown-item">Grammys</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Health
              </Link>
              <ul className="dropdown-menu">
                <li className="dropdown">
                  <Link to="#" className="dropdown-item dropdown-toggle">Wellness</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="#" className="dropdown-item">Fitness</Link></li>
                    <li><Link to="#" className="dropdown-item">Nutrition</Link></li>
                    <li><Link to="#" className="dropdown-item">Mental Health</Link></li>
                  </ul>
                </li>
                <li><Link to="#" className="dropdown-item">Medical Breakthroughs</Link></li>
                <li><Link to="#" className="dropdown-item">Diet & Nutrition</Link></li>
                <li className="dropdown">
                  <Link to="#" className="dropdown-item dropdown-toggle">Health Conditions</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="#" className="dropdown-item">Diabetes</Link></li>
                    <li><Link to="#" className="dropdown-item">Heart Health</Link></li>
                  </ul>
                </li>
                <li><Link to="#" className="dropdown-item">Aging & Longevity</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Science
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="#" className="dropdown-item">Space</Link></li>
                <li className="dropdown">
                  <Link to="#" className="dropdown-item dropdown-toggle">Environment</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="#" className="dropdown-item">Climate Change</Link></li>
                    <li><Link to="#" className="dropdown-item">Wildlife</Link></li>
                  </ul>
                </li>
                <li><Link to="#" className="dropdown-item">Technology</Link></li>
                <li><Link to="#" className="dropdown-item">Biology</Link></li>
                <li><Link to="#" className="dropdown-item">Astronomy</Link></li>
                <li className="dropdown">
                  <Link to="#" className="dropdown-item dropdown-toggle">Earth Sciences</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="#" className="dropdown-item">Geology</Link></li>
                    <li><Link to="#" className="dropdown-item">Meteorology</Link></li>
                  </ul>
                </li>
              </ul>
            </li>



            <li className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Country
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="#" className="dropdown-item">Country 1</Link></li>
                <li><Link to="#" className="dropdown-item">Country 2</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link to="#" className="dropdown-item">Other Country</Link></li>
              </ul>
            </li>


          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
