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
<script src="https://cdn.rawgit.com/KimSunWook/ngAction/v1.1.3/ngAction.js"></script>
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
  <!-- Necessary -->
  ng-action

  <!-- Invoked when you click -->
  ng-action-click="message = 'click';"

  <!-- Invoked when you click -->
  ng-action-click="message = 'click';"

  <!-- Called after duration (ms) after click. -->
  ng-action-click-after="message = 'Clicked 1 second ago.'"

  <!-- Invoked when you hover -->
  ng-action-hover="message = 'hover';"

  <!-- Called after duration (ms) after hover. -->
  ng-action-hover-after="message = 'Hovered 1 second ago.'"

  <!-- Invoked when you focus -->
  ng-action-focus="message = 'focus';"

  <!-- Called after duration (ms) after focus. -->
  ng-action-focus-after="message = 'Focused 1 second ago.'"

  <!-- If you do not put object, $click, $clicked, $hover, $hovered, $focus, $focused values ​​are stored in scope. -->
  ng-action-model="model"

  <!-- The value of $click, $hover, $focus lasts true and the default value is 700 (ms). -->
  ng-action-duration="1000"

  ng-class="[

    <!-- The value of $click becomes true on click and turns false after duration (ms). -->
    {'click_classes':model.$click},

    <!-- The value of $clicked is true when clicked and does not change. -->
    {'clicked_classes':model.$clicked},

    <!-- The value of $hover becomes true on click and turns false after duration (ms). -->
    {'hover_classes':model.$hover},

    <!-- The value of $hovered is true when clicked and does not change. -->
    {'hovered_classes':model.$hovered},

    <!-- The value of $focus becomes true on click and turns false after duration (ms). -->
    {'focus_classes':model.$focus},

    <!-- The value of $focused is true when clicked and does not change. -->
    {'focused_classes':model.$focused}
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
