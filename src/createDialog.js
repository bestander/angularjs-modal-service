angular.module('fundoo.services', []).factory('createDialog', ["$document", "$compile", "$rootScope", "$controller", "$timeout",
  function ($document, $compile, $rootScope, $controller, $timeout) {
    var defaults = {
      id: null,
      title: 'Default Title',
      backdrop: true,
      success: {label: 'OK', fn: angular.noop},
      onClose: angular.noop,
      controller: null, //just like route controller declaration
      backdropClass: "modal-backdrop",
      modalClass: "modal",
      css: { },
      cancellable: true
    };
    var body = $document.find('body');
    return function Dialog(template, options, passedInLocals) {

      var modalEl;

      options = angular.extend({}, defaults, options); //options defined in constructor

      var idAttr = options.id ? ' id="' + options.id + '" ' : '';
      //We don't have the scope we're gonna use yet, so just get a compile function for modal

      if (angular.isString(template)) {
        // if template is a string then it refers to an .html file 
        modalEl = angular.element(
          '<div class="' + options.modalClass + ' fade"' + idAttr + ' ng-include="\'' + template + '\'">' +
            '</div>');
      } else {
        // if template is not a string then it is a wrapped dom object
        modalEl = angular.element(
          '<div class="' + options.modalClass + ' fade"' + idAttr + '"></div>');
        modalEl.append(template);
      }
    
      Object.keys(options.css).forEach(function (key) { 
        modalEl.css(key, options.css[key]);
      });

      var backdropEl = angular.element('<div ng-click="$modalCancel()">');
      backdropEl.addClass(options.backdropClass);
      backdropEl.addClass('fade in');

      var handleEscPressed = function (event) {
        if (event.keyCode === 27) {
          scope.$modalCancel();
        }
      };

      var closeFn = function () {
        body.unbind('keydown', handleEscPressed);
        modalEl.remove();
        if (options.backdrop) {
          backdropEl.remove();
        }
        scope.$destroy();
        scope.$onClose();
      };

      body.bind('keydown', handleEscPressed);

      var ctrl, locals,
        scope = options.scope || $rootScope.$new();

      scope.$title = options.title;
      scope.$modalCancel = options.cancellable ? closeFn : angular.noop;
      
      scope.$modalSuccess = function () {
        options.success.fn.call(this);
        closeFn();
      };
      scope.$onClose = options.onClose;
      scope.$modalSuccessLabel = options.success.label;

      $compile(modalEl)(scope);
      $compile(backdropEl)(scope);
      body.append(modalEl);
      if (options.backdrop) body.append(backdropEl);

      if (options.controller) {
        locals = angular.extend({$scope: scope}, passedInLocals);
        ctrl = $controller(options.controller, locals);
        // Yes, ngControllerController is not a typo
        modalEl.contents().data('$ngControllerController', ctrl);
      }
      
      $timeout(function () {
        modalEl.addClass('in');
      }, 0);

      return closeFn;

    };
  }]);