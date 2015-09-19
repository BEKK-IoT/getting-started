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
        AppActions.getArticle(this.props.params.gadget);
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.article}}></div>
        )
    },
    _onChange() {
        this.setState(getState());
    }
});

module.exports = App;