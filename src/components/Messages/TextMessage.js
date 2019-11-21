import React from 'react';
import Linkify from 'react-linkify';


const TextMessage = (props) => {
  return <div className="sc-message--text">{
    <Linkify properties={{ target: '_blank' }}>
      { !props.self &&
        <p>
        <b className={'headerChatWindow'}>
          {props.author}
        </b>
      </p>}
      <p>
        {props.data.text}
      </p>
    </Linkify>
  }</div>;
};

export default TextMessage;
