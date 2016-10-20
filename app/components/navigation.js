const React = require('react');
const $ = require('jquery');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <a className='brand' href="/" />
        <ul>
          <li>first element</li>
          <li>second element</li>
        </ul>
      </div>
    )
  }
});