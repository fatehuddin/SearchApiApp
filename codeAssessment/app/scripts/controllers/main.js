'use strict';
angular.module('everStringApp')

  .controller('MainCtrl', ['$scope', '$resource', 'GitRepositoryService', function ($scope, $resource, GitRepositoryService) {

    $scope.onSearch = onSearch;
    $scope.getIssues = getIssues;
    $scope.onBackClick = onBackClick;

    function init() {
      $scope.hideResults = false;
      $scope.hideSearchForm = false;
      $scope.backButton = false;
    }

    init();

    function onSearch(text) {
      GitRepositoryService.repository.get({
        q: text
      }, function (response) {
        $scope.results = response;
        $scope.backButton = true;
        $scope.hideSearchForm = true;
      });
    }

    function getIssues(item) {
      $scope.IssueNameHeader = item.name;
      $scope.issueOwner = item.owner.login;
      $scope.ownerAwatar = item.owner.avatar_url;
      var payload = {
        owner: item.owner.login,
        repo: item.name
      };
      GitRepositoryService.getRepoIssues.query(payload, function (response) {
        $scope.repoIssues = response;
        $scope.hideResults = true;
      });
    }

    function onBackClick() {
      if (!$scope.hideResults && $scope.hideSearchForm && $scope.backButton) {
        $scope.backButton = false;
        $scope.hideSearchForm = false;
        $scope.results = [];
        $scope.repoIssues = [];
        $scope.search.text = null;
      } else {
        $scope.hideResults = false;
        $scope.repoIssues = [];
      }

    }
  }]);