const React = require('react');
const Link = require('react-router').Link;

module.exports = React.createClass({
    render() {
        return (
            <div className="app-wrapper">
                <ul>
                    <h1>Welcome!</h1>
                    <li><Link to='/article/3'>Hello</Link></li>
                </ul>
            </div>
        )
    }
});