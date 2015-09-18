function View(){}

View.prototype = {
  /** @param {Window} */
  drawOn: function(window){
    return 'drawOn';
  }
};

exports.View = View;