import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

}
(function() {
  var app = angular.module('PROMASIDOR_KENYA_LIMITED', ['ui.router']);
  
  app.run(function($rootScope: { $on: (arg0: string, arg1: (event: any, toState: any, toParams: any, fromState: any, fromParams: any) => void) => void; }, $location: any, $state: { transitionTo: (arg0: string) => void; }, LoginService: { isAuthenticated: () => any; }) {
    $rootScope.$on('$stateChangeStart', 
      function(event: any, toState: string, toParams: any, fromState: any, fromParams: any){ 
          console.log('Changed state to: ' + toState);
      });
    
      if(!LoginService.isAuthenticated()) {
        $state.transitionTo('login');
      }
  });
  
  app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider: { state: (arg0: string, arg1: { url: string; templateUrl: string; controller: string; }) => { (): any; new(): any; state: { (arg0: string, arg1: { url: string; templateUrl: string; controller: string; }): void; new(): any; }; }; }, $urlRouterProvider: { otherwise: (arg0: string) => void; }) {
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
      .state('login', {
        url : '/login',
        templateUrl : 'login.html',
        controller : 'LoginController'
      })
      .state('home', {
        url : '/home',
        templateUrl : 'home.html',
        controller : 'HomeController'
      });
  }]);

  app.controller('LoginController', function($scope: { formSubmit: () => void; username: string; password: string; error: string; }, $rootScope: { title: string; }, $stateParams: any, $state: { transitionTo: (arg0: string) => void; }, LoginService: { login: (arg0: any, arg1: any) => any; }) {
    $rootScope.title = "AngularJS Login Sample";
    
    $scope.formSubmit = function() {
      if(LoginService.login($scope.username, $scope.password)) {
        $scope.error = '';
        $scope.username = '';
        $scope.password = '';
        $state.transitionTo('home');
      } else {
        $scope.error = "Incorrect username/password !";
      }   
    };
    
  });
  
  app.controller('HomeController', function($scope: any, $rootScope: { title: string; }, $stateParams: any, $state: any, LoginService: any) {
    $rootScope.title = "AngularJS Login Sample";
    
  });
  
  app.factory('LoginService', function() {
    var admin = 'admin';
    var pass = 'pass';
    var isAuthenticated = false;
    
    return {
      login : function(username: string, password: string) {
        isAuthenticated = username === admin && password === pass;
        return isAuthenticated;
      },
      isAuthenticated : function() {
        return isAuthenticated;
      }
    };
    
  });
  
})();