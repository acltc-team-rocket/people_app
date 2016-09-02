(function () {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope) {

  $scope.people = [
    {
      name: "Sami",
      bio: "Superstar from TeamHoneyBadger",
      bioVisible: false
    },
    {
      name: "Bejan",
      bio: "Also Superstar from TeamHoneyBadger",
      bioVisible: false
    }
  ];

  $scope.toggleBio = function(person) {
    person.bioVisible = !person.bioVisible;
  }

  $scope.addPerson = function(newName, newBio) {
    var person = {
      name: newName,
      bio: newBio,
      bioVisible: false
    };
    $scope.people.push(person);
  }

  $scope.deletePerson = function(index) {
    $scope.people.splice(index, 1);
  }

  window.$scope = $scope;
  });
})();