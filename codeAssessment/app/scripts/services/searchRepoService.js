'use strict';

angular.module('everStringApp')
.service('GitRepositoryService', GitRepositoryService);

GitRepositoryService.$inject = ['$resource'];
/* @ngInject */
function GitRepositoryService($resource) {
    return {
        repository: $resource('https://api.github.com/search/repositories/:repo',{repo :'@repo'}),
        getRepoIssues: $resource('https://api.github.com/repos/:owner/:repo/issues',{owner: '@owner'},{repo: '@repo'})
    };
}