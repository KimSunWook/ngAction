ngAction
=======

ngAction is an angularjs library that triggers an expression when the enter key is pressed.

<br/>

DEMO
-------
https://kimsunwook.github.io/ngAction

<br/>

INSTALL
-------

```
bower install ng-action --save
```

<br/>

Quick start
-------
Copy-paste the ```<script>``` into your ```<body>```.

<br/>

### ngAction.js

```
<script src=".bower_components/ng-action/ngAction.js"></script>
```
or
```
<script src=".bower_components/ng-action/ngAction.min.js"></script>
```
or
```
<script src="https://cdn.rawgit.com/KimSunWook/ngAction/v1.0.1/ngAction.js"></script>
```
or
```
<script src="https://cdn.rawgit.com/KimSunWook/ngAction/v1.0.1/ngAction.min.js"></script>
```

<br/>

USAGE
-----

Make sure you include the module 'ngAction' in your application config

```
angular.module('myApp', [
  'ngAction',
  ...
]);
```

```
<input
  ng-action
  ng-action-click="message = 'click';" // Invoked when you click
  ng-action-hover="message = 'hover';" // Invoked when you hover
  ng-action-focus="message = 'focus';" // Invoked when you focus
  ng-action-model="model" // If you do not put object, $click, $clicked, $hover, $hovered, $focus, $focused values ​​are stored in scope.
  ng-action-duration="100" // The value of $click, $hover, $focus lasts true and the default value is 100 (ms).
  ng-class="[
    {'click_classes':model.$click}, // The value of $click becomes true on click and turns false after duration (ms).
    {'clicked_classes':model.$clicked}, // The value of $clicked is true when clicked and does not change.
    {'hover_classes':model.$hover}, // The value of $hover becomes true on click and turns false after duration (ms).
    {'hovered_classes':model.$hovered}, // The value of $hovered is true when clicked and does not change.
    {'focus_classes':model.$focus}, // The value of $focus becomes true on click and turns false after duration (ms).
    {'focused_classes':model.$focused} // The value of $focused is true when clicked and does not change.
  ]">
```

Once you hover

```
$scope.message === 'hover' // true
$scope.model.$hover === true // true
$scope.model.$hovered === true // true
```

<br/>

Easy!
