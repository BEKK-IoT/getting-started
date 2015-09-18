const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const React = require('react');

function getState() {
    return {
        article: AppStore.getArticle()
    };
}

const App = React.createClass({
    getInitialState() {
        return getState();
    },
    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
        AppActions.getArticle(this.props.params.id);
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },

    render() {
        return (
            <div className="app-wrapper">
                <h1>Article {this.state.article}</h1>
            </div>
        )
    },
    _onChange() {
        this.setState(getState());
    }
});

module.exports = App;