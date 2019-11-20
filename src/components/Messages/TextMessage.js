import React from 'react';
import Linkify from 'react-linkify';


const TextMessage = (props) => {
  return <div className="sc-message--text">{
    <Linkify properties={{ target: '_blank' }}>{props.author} {props.data.text}</Linkify>
  }</div>;
};

export default TextMessage;
