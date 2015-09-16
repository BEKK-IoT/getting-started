const Q = require('q');
const ArticleResouce = {
    getArticle(id) {
        const deferred = Q.defer();
        deferred.resolve(`Article: {$id}`);
        return deferred.promise;
    }
};

module.exports = ArticleResouce;