'use strict';

/**
 * @memberof <%= scriptAppName %>
 * @ngdoc decorator
 * @name <%= classedName %>
 * @description
 * # <%= classedName %>
 * Decorator of the <%= scriptAppName %>
 */
angular.module('<%= scriptAppName %>')
  .config(function ($provide) {
    $provide.decorator('<%= cameledName %>', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });
  });
