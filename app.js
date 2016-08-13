import React from 'react';
import ReactDOM from 'react-dom';


// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className='commentBox'>
        Hellow Hisoka.... :) this is using watch...:D
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);