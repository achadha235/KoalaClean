angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};
  $scope.forgotPasswordData={};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/forgotPassword.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.forgotPasswordModal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  },

  
  // Perform the login action when the user submits the login form
  $scope.openForgotPassword = function() {
    console.log('openforgotPassword');
    $scope.modal.hide();
    $scope.forgotPasswordModal.show();

  };

  // Perform the login action when the user submits the login form
  $scope.closeForgotPassword = function() {
    console.log('closeforgotPassword');
    $scope.forgotPasswordModal.hide();
    $scope.modal.show();
  
  };

  // Perform the login action when the user submits the login form
  $scope.goToRegisterPage = function() {
    console.log('goToRegisterPage');
    window.location='/#/app/register';
  };

  // Perform the login action when the user submits the login form
  $scope.sendResetEmail = function() {
    console.log('Sending passwordResetEmail');
    console.log($scope.forgotPasswordData.email);

  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.doRefresh = function (){
    console.log("doing refresh...")
    setTimeout( function(){ 
      $scope.$broadcast('scroll.refreshComplete')
    } , 1000);
  };
})


