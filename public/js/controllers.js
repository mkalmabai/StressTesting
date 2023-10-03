'use strict';

/* Controllers */

angular.module('controllers', ['services'])
  .controller('UserCtrl', ['$scope','Users',function($scope, Users) {
          $scope.alert = {
              show: false,
              message: ''
          };

          Users.get().success(function(users){
              $scope.users = users;
          }).error(function(err){
              console.error(err);
          });
          
          $scope.delete = function(user, index){
              Users.delete(user.id).success(function(data){
                  $scope.users = $scope.users.splice(index,1)
                  if($scope.$$phase){
                      $scope.$apply();
                  }
                  $scope.alert.message = user.firstname + ' successfully deleted!',
                  $scope.alert.show = true;
              }).error(function(err){
                  console.error(err);
              });
          };
  }])
  .controller('EditUserCtrl', ['$scope','Users','$routeParams',function($scope, Users, $routeParams) {
          $scope.alert = {
              show: false,
              message: ''
          };
          Users.get($routeParams.userId).success(function(user){
              $scope.user = user;
          }).error(function(err){
              console.error(err);
          });
          $scope.update = function(user){
              Users.update(user.id, user).success(function(res){
                  user = res;
                  $scope.alert.message = user.firstname + ' successfully updated!',
                  $scope.alert.show = true;
              }).error(function(err){
                  console.error(err);
              });
          }
  }])
  .controller('CreateUserCtrl', ['$scope','Users',function($scope, Users) {
          $scope.user = {};
          $scope.alert = {
              show: false,
              message: ''
          }
          $scope.add = function(user){
              Users.create(user).success(function(res){
                 user = res;
                 $scope.user = {};
                 $scope.alert.message = user.firstname+' successfully added!';
                 $scope.alert.show = true;
              }).error(function(err){
                  console.error(err);
              });
          }
  }])
  .controller('DeleteUserCtrl', ['$scope','Users',function($scope, Users) {

  }])
