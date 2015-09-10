Lesson 1
Questions

Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
- AngularJS gives XAML Developers a Place to GO on the web
-Angular gets rid of ritual and ceremony
-angular handles dependecies
-allows developers to express UI declaratively and reduce side effects
-embraces DD, testing
-enabes massively parallel development
-enables a design development worflow
-gives developers controls
-helps developers manage state
-supports single page app or (SPA's)

People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?
-Client Side Rendering
-$scope Woes
-Complexity

Is Angular an MVC framework?
MVC = Model View Controller
Yes and no. it separates the app into Models, Views and Controllers

Turn to the Angular docs. Find ng-app. What is it and what does it do? What does ng stand for? The ng tells the text editor/browser that this is an angular app


Lesson 2
What is the Model?
- it is where you app's data lives.
- it is defined via JavaScript, within Angular Services. Imperatively.
- This generally includes
 . Access to persistent layer/store
 . Business logic
 . CRUD functions
 . Data validation

 What is the View?
 - It is what displays your applications data (from the model) for the end user and handles uer interaction.
 - It is defined with HTML, CSS, JS and angular directives ('ng-' attributes) and two way data bindings within the HTML document
 - It includes
  . Markup for
   -presenting data
   -handling user interations
   -showing and hiding elements
  .Filters to limit/organize data
  .express logic

  What is the Controller? (often called the view-model)
  - Controls the relationship between the MOdels and views by exposing parts of the model and managing state.
  - It is defined via JS, within Angular controllers. Imperatively

  Example of Model
  $scope.hello

  Example of View
  <div ng-controller="HelloController">
    <h2>Hello, {{hello.title}}!</h2>
  </div>

  Example of Controller
  <script>
  angular.module("myapp", [])
    .controller("HelloController", function($scope) {
      $scope.hello = {};
      $scope.hello.title = "World";
    });
  </script>


Lesson 3 Data Binding

JS frameworks like Angular and Ember allow us to write dynamic, live templates.
This means that Angular can write templates that automatically update when we change
our data.

This is called two-way or bi-directional binding.
- when a model cahnges the view know about it
- when a view changes, the model also know aobut it.

If the data changes in any place on the MVC that data changes everywhere.

What does ng-model do?
it is intended to be put inside of form elements and has two way data binding

What is "dirty checking"?
it is a loop that checks for changes within the scope variable.

Lesson 4 Expression and Built in Filters


