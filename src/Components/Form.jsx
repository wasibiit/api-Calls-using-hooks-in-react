import React from "react";

const Form = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          placeholder="GitHub UserName"
          type="text"
          onChange={props.handleChange}
          required
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;
