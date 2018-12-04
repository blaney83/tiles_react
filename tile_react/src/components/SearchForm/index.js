import React from "react";
import "./style.css"

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <div className="row">
          <div className="col-md-10 col-sm-12">
            <input
              onChange={props.handleInputChange}
              value={props.search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search a category to start the game!"
              id="search"
            />
          </div>
          <div className="col-md-2 col-sm-12">
            <button onClick={props.handleFormSubmit} className="btn btn-secondary mt-3">
              Start!
        </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
