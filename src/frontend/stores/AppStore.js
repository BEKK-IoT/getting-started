const assign = require('object-assign');
const AppConstants = require('../constants/AppConstants');
const AppDispatcher = require('../dispatchers/AppDispatcher');
const EventEmitter = require('events').EventEmitter;
const ArticleResource = require('../resources/ArticleResource');

const CHANGE_EVENT = 'CHANGE';

let _article = undefined;

function getArticle(id) {
    console.log(id);
    ArticleResource.getArticle(id)
        .then(articleFromBackend)
        .catch(errorOnArticle);
}

function articleFromBackend(res) {
    _article = res;
    AppStore.emitChange();
}

function errorOnArticle(err) {
    console.error('No article', err);
}

const AppStore = assign(new EventEmitter(), {
    getArticle() {
        return _article;
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherIndex: AppDispatcher.register(payload => {
        let action = payload.action;
        if (action.actionType === AppConstants.GET_ARTICLE) {
            getArticle(action.id);
        }
    })
});

module.exports = AppStore;