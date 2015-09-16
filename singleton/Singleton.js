exports.Singleton = (function () {
    
    var instance;
 
    function createInstance() {
        var object = {};
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();