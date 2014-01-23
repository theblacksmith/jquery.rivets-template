# jQuery Rivets Template

A simple plugin to bind templates to objects using common jQuery syntax

## Usage

    var model = {
      todos: [
        { task: "Write a simple readme file", done: true},
        { task: "Improve reamde", done: false},
      ]
    };

    $("#todos").bindTemplateTo(model);

Sample html

    <ul id="todos">
      <li rv-each-todo="todos">
        <input type="checkbox" rv-checked="todo.done">
        { todo.task }
      </li>
    </ul>

## Configuration Options

Set calling `$.fn.bindTemplateTo.configure(options)` where options is a `hash` with one or more of the following properties (all of them are optional)

### debug

**default:** `false`

Enables or disables debugging (currently only logs to console the template and the bound model)

### template

A hash containing template binding options. This options are passed to [Rivets](http://www.rivetsjs.com/).

#### prefix

**default:** 'rv'

For more options check [Rivets documentation](http://www.rivetsjs.com/docs)