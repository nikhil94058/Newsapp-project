import React from "react";

export function NewsBlock({ imageUrl, category, date, title, description }) {
  return (
    <div>
      <div className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4" data-mdb-ripple-color="light">
        <img src={imageUrl} className="img-fluid" alt="News" />
        <a href="#!">
          <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
        </a>
      </div>

      <div className="row mb-3">
        <div className="col-6">
          <a href="#" className="text-info">
            {category}
          </a>
        </div>
        <div className="col-6 text-end">
          <u>{date}</u>
        </div>
      </div>

      <a href="#" className="text-dark">
        <h5>{title}</h5>
        <p>{description}</p>
      </a>

      <hr />
      <Pagination />
    </div>
  );
}

export function Pagination() {
  return (
    <nav aria-label="...">
      <ul className="pagination pagination-circle justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item active" aria-current="page">
          <a className="page-link" href="#">
            2 <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export function NewsSection() {
  return (
    <section>
      {/* Add NewsBlock components here for news items */}
      <NewsBlock
        imageUrl="https://mdbcdn.b-cdn.net/img/new/city/113.webp"
        category="Travel"
        date="15.07.2020"
        title="This is title of the news"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iste aliquid..."
      />
      {<NewsBlock
        imageUrl="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
        category="Travel"
        date="15.07.2020"
        title="This is title of the news"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iste aliquid..."
      />}
    </section>
  );
}