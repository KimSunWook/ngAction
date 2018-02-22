(function(angular) {
  angular.module('ngAction', ['ng'])
  .directive("ngAction", function ($rootScope, $timeout) {
		return {
      link: function (scope, element, attrs) {

        // Listen to keypress event
         var timeout_click;
         angular.element(element).bind("click", function(event) {
           // Set model
           var model;
           if(scope.$eval(attrs.ngActionModel)) model = scope.$eval(attrs.ngActionModel);
           else model = scope;

           // $click 가 false 나 undefined 일때만 작동
           // ( 연속해서 true 로 멈춰있는 경우 방지 )
           if(!model.$click){
             if(timeout_click) $timeout.cancel(timeout_click);
             // Set $click true and execute ng-action
             scope.$apply(function() {
               model.$click = true;
               model.$clicked = true;
               scope.$eval(attrs.ngActionClick);
             });

             // Set $click false after duration
             var duration = Number(attrs.ngActionDuration);
             if(!(duration>=0)) duration = 100;
             timeout_click = $timeout(function(){
               model.$click = false;
             }, duration);
           }
         });

         var timeout_hover;
         angular.element(element).bind("mouseenter", function(event) {
           // Set model
           var model;
           if(scope.$eval(attrs.ngActionModel)) model = scope.$eval(attrs.ngActionModel);
           else model = scope;

           // $hover 가 false 나 undefined 일때만 작동
           // ( 연속해서 true 로 멈춰있는 경우 방지 )
           if(!model.$hover){
             if(timeout_hover) $timeout.cancel(timeout_hover);
             // Set $hover true and execute ng-action
             scope.$apply(function() {
               model.$hover = true;
               model.$hovered = true;
               scope.$eval(attrs.ngActionHover);
             });

             // Set $hover false after duration
             var duration = Number(attrs.ngActionDuration);
             if(!(duration>=0)) duration = 100;
             timeout_hover = $timeout(function(){
               model.$hover = false;
             }, duration);
           }
         });

         var timeout_focus;
         angular.element(element).bind("focus", function(event) {
           // Set model
           var model;
           if(scope.$eval(attrs.ngActionModel)) model = scope.$eval(attrs.ngActionModel);
           else model = scope;

           // $focus 가 false 나 undefined 일때만 작동
           // ( 연속해서 true 로 멈춰있는 경우 방지 )
           if(!model.$focus){
             if(timeout_focus) $timeout.cancel(timeout_focus);
             // Set $focus true and execute ng-action
             scope.$apply(function() {
               model.$focus = true;
               model.$focused = true;
               scope.$eval(attrs.ngActionFocus);
             });

             // Set $focus false after duration
             var duration = Number(attrs.ngActionDuration);
             if(!(duration>=0)) duration = 100;
             timeout_focus = $timeout(function(){
               model.$focus = false;
             }, duration);
           }
         });

      },
			scope:false,
			restrict:"EA"
		};
	});
})(angular);
