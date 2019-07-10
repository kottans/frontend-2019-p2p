import React from "react";

const Pagination = props => {
  const buttons = ["Prev", "Next"];
    const onClick = (e) => {
        const value = e.target.id.toLowerCase();
        props.handleClick(props[`${value}`])
    }

  return (
    <div className="pages">
      {buttons.map(button => (
       props[`${button.toLowerCase()}`] ? <button onClick={onClick} className="page-buttons" key={button} id={button}>{button}</button> : null
      ))}
    </div>
  );
};

export default Pagination;
