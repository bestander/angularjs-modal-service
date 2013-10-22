angularjs-modal-service
=======================

An AngularJS service that creates a Modal Popup with a given HTML template and controller.

The Service createDialog can be used to create a modal on the fly.

## Using it:

1. Include the createDialog.js file in your index.html file.
2. Include either createDialog.css or bootstrap css in your index.html file.
2. Include the 'fundoo.services' as a module dependency when you define your app
3. Import the createDialog Service in your App Controller.
4. Call the createDialog() function from your controller, using the following syntax :

```
[closeFn] createDialog([template],{
    id : [modal_id],
    title: [modal_title],
    backdrop: [backdrop_visible],
    success: [modal_success_button],
    cancel: [modal_cancel_button],
    onClose: [modal_close_callback],
    controller: [modal_controller],
    backdropClass: [modal_backdrop_class],
    footerTemplate: [modal_footer_template],
    modalClass: [modal_class],
    cancellable: [modal_cancellable],
    css: [css_rules],
    searchUrl: [modal_search_url],
}, {modal_custom_data});
```
where,

* **template** *[string|Object]* : the url of the popup template html or wrapped jQuery (jQLite) wrapped DOM
* **modal_id** *[string]* : the unique html id attr of the template.
* **modal_title** *[string]* : is the title of the modal to be displayed in its header section.
* **backdrop_visible(optional)** *[boolean]*: whether to hide the html page behind the modal under an overlay
* **modal_success_button(optional)** *[object]*: the object add a submit button to the modal with its functionality

*Syntax*
```
    {label: '[label_of_button]', fn: '[function_on_click]'}
```
* **modal_cancel_button(optional)** *[object]*: the object add a cancel button to the modal with its functionality

*Syntax*
```
    {label: '[label_of_button]', fn: '[function_on_click]'}
```
* **modal_close_callback(optional)** *[function]* : function that gets called when modal is closed
* **modal_controller(optional)** *[string]* : is the controller attached to the modal.
* **modal_backdrop_class(optional)** *[string]* : the css class for the backdrop of the modal.
* **modal_footer_template(optional)** *[string]* : the footer template of the modal.
* **modal_class(optional)** *[string]* : the css class for the modal.
* **modal_cancellable(optional)** *[boolean]*: make it false to restrict user cancelling the popup with ESC, click on backdrop or calling $modalCancel
* **css_rules(optional)** *[Object]* : css styles keys and values
* **modal_search_url(optional)** *[key: string, value: string]* : if this parameter is defined then URL location will be appended with the specified "&<key>=<value>" when popup is opened and it will be removed when popup is closed
* **modal_custom_data(optional)** *[object]* : is an object where each key becomes an argument to the controller of the modal.
* **closeFn** *[function]* : calling this function will close the dialog

## Running and testing it

1. Make sure you have `git`, `node`, `npm`, `bower` and `grunt` installed
2. Run `npm install && bower install` to download dependencies
3. Run `grunt dev` to start a local server
4. Open `localhost:9001/app` in your browser to see examples

## Where can I see a demo?

Glad you asked. Go check out our GitHub page for the [AngularJS-Modal-Service]


## License

The code above is open sourced, and licensed under the MIT License, which is the simplest and easiest to understand, and most open.
Basically, feel free to use this code or modify it as per your needs. The actual license is below:

### The MIT License

> Copyright (C) 2011-2013 Konstantin Raev
>
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation files
> (the "Software"), to deal in the Software without restriction,
> including without limitation the rights to use, copy, modify, merge,
> publish, distribute, sublicense, and/or sell copies of the Software,
> and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
>
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
> BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
> ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.


Most of inspiration and credits go to:

http://fundoo-solutions.github.io/angularjs-modal-service/
