const React = require('react');
const $ = require('jquery');
const Navigation = require('./navigation.js');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <Navigation />
        <span>Hello World from React</span>
        <TodoApp />
      </div>
    )
  }
});
