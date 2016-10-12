import React from 'react';
import './Box.css';

/*
  Stateless components receives only props.
  They don't have access to local state or lifecycle methods
  A common/handy pattern is destructuring props into the necessary values
*/
const Box = ({message, title, children}) => {
  const boxTitle = title || "This is an important message (or someone just don't pass a title)"
  return (
    <article className="Box-wrapper">
      <header className="Box-header">
        {boxTitle}
      </header>
      <section className="Box-section">
        {message}
        {
          children ? (<div style={{fontStyle: 'italic', padding: '10px' }}>
                        {children}
                      </div>)
                      : null
        }
      </section>
      {
        /*
         Comments inside jsx are like regular js comments but wrapped in a weird { } :-(
        */
      }
    </article>);
}

export default Box;
