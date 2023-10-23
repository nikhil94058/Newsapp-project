import React from 'react';

const Comments = () => {
  return (
    <section className="bg-light py-5">
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10 col-xl-8">
            <div className="card">
              <div className="card-body">
                <UserInfo />
                <p className="mt-3 mb-4 pb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip consequat.
                </p>
                <InteractionButtons />
              </div>
              <div className="card-footer py-3 bg-light">
                <CommentInput />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const UserInfo = () => {
  return (
    <div className="d-flex align-items-center">
      <img
        className="rounded-circle shadow-1-strong me-3"
        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
        alt="avatar"
        width="60"
        height="60"
      />
      <div>
        <h6 className="fw-bold text-primary mb-1">Lily Coleman</h6>
        <p className="text-muted small mb-0">Shared publicly - Jan 2020</p>
      </div>
    </div>
  );
};

const InteractionButtons = () => {
  return (
    <div className="small d-flex justify-content-start">
      <ActionButton iconClass="far fa-thumbs-up" label="Like" />
      <ActionButton iconClass="far fa-comment-dots" label="Comment" />
      <ActionButton iconClass="fas fa-share" label="Share" />
    </div>
  );
};

const ActionButton = ({ iconClass, label }) => {
  return (
    <a href="#!" className="d-flex align-items-center me-3">
      <i className={iconClass + " me-2"}></i>
      <p className="mb-0">{label}</p>
    </a>
  );
};

const CommentInput = () => {
  return (
    <div className="d-flex w-100">
      <img
        className="rounded-circle shadow-1-strong me-3"
        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
        alt="avatar"
        width="40"
        height="40"
      />
      <div className="form-outline w-100">
        <textarea
          className="form-control"
          id="textAreaExample"
          rows="4"
          style={{ background: '#fff' }}
        />
        <label className="form-label" htmlFor="textAreaExample">
          Message
        </label>
      </div>
      <div className="float-end mt-2 pt-1">
        <button type="button" className="btn btn-primary btn-sm">
          Post comment
        </button>
        <button type="button" className="btn btn-outline-primary btn-sm">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Comments;
