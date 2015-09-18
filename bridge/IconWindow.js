/** @param {View}
    @param {WindowImp}
    @param {string} bitmapName */
function IconWindow(contents, windowImp, bitmapName){
  Window.call(this, contents, windowImp);
  this.bitmapName = bitmapName || '';
}

IconWindow.prototype = Object.create(Window.prototype);

IconWindow.prototype.drawContents = function(){
  var imp = this.getWindowImp();
  if (imp !== null && imp !== undefined){
    return imp.deviceBitmap(this.bitmapName, new Coord(0), new Coord(0));
  }
}

exports.IconWindow = IconWindow;