(function () {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope, $http) {

    $scope.setup = function() {
      $http.get("/api/v1/people.json").then(function(response) {
        $scope.people = response.data;
      }, function(error) {

      });
    }

    $scope.toggleBio = function(person) {
      person.bioVisible = !person.bioVisible;
    }

    $scope.addPerson = function(newName, newBio) {
      var person = {
        name: newName,
        bio: newBio,
        bioVisible: false
      };
      $http.post("/api/v1/people.json", person).then(function(response) {
        $scope.people.push(response.data);
      }, function(error) {
        $scope.errors = error.data.errors;
      });
    }

    $scope.deletePerson = function(person) {
      $http.delete("/api/v1/people/" + person.id).then(function(response) {
        var index = $scope.people.indexOf(person);
        $scope.people.splice(index, 1);
      }, function(error) {
        $scope.deleteErrors = error.data.errors;
      });
      
    }

    $scope.toggleByAttribute = function(attribute) {
      if (attribute == $scope.orderAttribute) {
        $scope.descending = !$scope.descending
      } else {
        $scope.orderAttribute = attribute;
      }
    }

    window.$scope = $scope;
  });
})();
