const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const React = require('react');

function getState() {
    return {
        location: AppStore.getArticle()
    };
}

const App = React.createClass({
    getInitialState() {
        return getState();
    },
    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },

    render() {
        return (
            <div className="app-wrapper">
                <h1>Article!</h1>
                <button type="button" className="button mod-success" onClick={this._getArticle}>Click me</button>
            </div>
        )
    },
    _getArticle() {
        AppActions.getArticle(1);
    },
    _onChange() {
        this.setState(getState());
    }
});

module.exports = App;