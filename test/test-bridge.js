/** Testing adapter */
var assert = require('chai').assert;

View = require('../bridge/View').View;
Window = require('../bridge/Window').Window;
WindowImp = require('../bridge/WindowImp').WindowImp;

ApplicationWindow = require('../bridge/ApplicationWindow').ApplicationWindow;
IconWindow = require('../bridge/IconWindow').IconWindow;

XWindowImp = require('../bridge/XWindowImp').XWindowImp;
PMWindowImp = require('../bridge/PMWindowImp').PMWindowImp;

describe('View', function () {

  it('should create a View', function(){
    assert.isObject(new View());
  });
});

describe('Windows', function(){

  it('should create a Window', function(){

    var aWindow = new Window(new View(), new WindowImp());
    assert.isObject(aWindow);
  });

  it('should not be able to draw a rectangle without a proper implementation', function(){

    var aWindow = new Window(new View(), new WindowImp());

    try {
      aWindow.drawRect(new Point(0,0), new Point(4,5))
    } catch(e){
      assert.ok(e);
    }
  });

  it('should create an ApplicationWindow', function(){

    var appWindow = new ApplicationWindow(new View(), new WindowImp());
    assert.isObject(appWindow);
    assert.equal(appWindow.drawContents(), 'drawOn');
  });

  it('should create an IconWindow but cannot draw bitmap without an implementation', function(){

    var iconWindow = new IconWindow(new View(), new WindowImp(), 'pic.png');
    assert.isObject(iconWindow);
    try {
      iconWindow.drawContents();
    } catch(e){
      assert.ok(e);
    }
    
  });
});

describe('Window Implementations', function(){

  it('should draw a bitmap', function(){

    var xWindowImp = new XWindowImp('dpy', 'winid', 'gc');
    var iconWindow = new IconWindow(new View(), xWindowImp, 'pic.png');

    assert.equal(iconWindow.drawContents(), 'pic.png at 0,0');
  });


  it('should draw a rectangle using XWindowImp', function(){

    var xWindowImp = new XWindowImp('dpy', 'winid', 'gc');
    var aWindow = new Window(new View(), xWindowImp);

    assert.equal(aWindow.drawRect(new Point(0,0), new Point(4,5)),
      'XDrawRectangle on dpy winid gc at 0,0 4x5');
  });

  it('should draw a rectangle using PMWindowImp', function(){

    var pmWindowImp = new PMWindowImp();
    var aWindow = new Window(new View(), pmWindowImp);

    /*(0,5)-------(4,5)
        |           |
      (0,0)-------(4,0) */

    assert.equal(aWindow.drawRect(new Point(0,0), new Point(4,5)),
      'rect 0,5 4,5 4,0 0,0');
  });
});