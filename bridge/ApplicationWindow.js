/** @param {View} contents 
    @param {WindowImp} windowImp */
function ApplicationWindow(contents, windowImp){
  Window.call(this, contents, windowImp);
}

ApplicationWindow.prototype = Object.create(Window.prototype);

ApplicationWindow.prototype.drawContents = function(){
  var view = this.getView();
  if (view !== null && view !== undefined){
    return view.drawOn(this);
  }
}

exports.ApplicationWindow = ApplicationWindow;
