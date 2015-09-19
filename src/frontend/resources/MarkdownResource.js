import Q from 'q';
import request from 'superagent';
import Remarkable from 'remarkable';
const md = new Remarkable();

function handleResponse(deferred) {
    return (err, res) => err ? deferred.reject(err) : deferred.resolve(md.render(res.text));
}

module.exports = {
    getArticle(id) {
        const deferred = Q.defer();
        request
            .get(`dist/${id}.md`)
            .end(handleResponse(deferred));
        return deferred.promise;
    }
};

