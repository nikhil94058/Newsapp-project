import React from 'react';
import Home from './Home';
import "./Footer.css"
function Footer() {
  return (
    <footer className="bg-light text-center" >
      <div className="container p-4" style={{ backgroundColor: "violet" }}>
        <section className="mb-4" style={{ backgroundColor: "violet" }}>
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href={<Home searchQuery="Headlines" />} role="button"><i className="fab fa-facebook-f"></i></a>
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="/555" role="button"><i className="fab fa-twitter"></i></a>
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="/555" role="button"><i className="fab fa-google"></i></a>
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="/555" role="button"><i className="fab fa-instagram"></i></a>
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="/555" role="button"><i className="fab fa-linkedin-in"></i></a>
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#333333' }} href="/555" role="button"><i className="fab fa-github"></i></a>
        </section>

        <section style={{ backgroundColor: "violet" }}>
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div className="col-md-5 col-12" >
                <div className="form-outline mb-4">
                  <input type="email" id="form5Example2" className="form-control" />
                  <label className="form-label" for="form5Example2">Email address</label>
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="mb-4" style={{ backgroundColor: "red" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>

        <section style={{ backgroundColor: "black", textDecorationColor: "white" }}>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase" style={{ textColor: "white" }}>Links</h5>
              <ul className="list-unstyled mb-0">
                <li><a href="/555" className="text-light">Link 1</a></li>
                <li><a href="/555" className="text-light">Link 2</a></li>
                <li><a href="/555" className="text-light">Link 3</a></li>
                <li><a href="/555" className="text-light">Visit Us</a></li>
              </ul>
            </div>
            {<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li><a href="/555" className="text-light">Link 1</a></li>
                <li><a href="/555" className="text-light">Link 2</a></li>
                <li><a href="/555" className="text-light">Link 3</a></li>
                <li><a href="/555" className="text-light">Visit Us</a></li>
              </ul>
            </div>}
            {<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li><a href="/555" className="text-light">Link 1</a></li>
                <li><a href="/555" className="text-light">Link 2</a></li>
                <li><a href="/555" className="text-light">Link 3</a></li>
                <li><a href="/555" className="text-light">Visit Us</a></li>
              </ul>
            </div>}
          </div>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright: <a className="text-light" href="https://mdbootstrap.com/">@The News Apllication</a>
      </div>
    </footer>
  );
}

export default Footer;
