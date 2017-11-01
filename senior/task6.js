
var Event = (function () {
    var events = {};
    function on (evt,callback) {
        events[evt] = events[evt] || [];
        events[evt].push(callback);
    }
    function fire(evt,args) {
        if (!events[evt]) {
            return;
        }
        events[evt].forEach(function (e,i,arr) {
            arr[i](args);
        })
    }
    function off(evt) {
        delete events[evt];
    }


    return {
        on: on,
        fire: fire,
        off: off,
    }
})();



Event.on('change', function(val){
    console.log('change...  now val is ' + val);
});
Event.fire('change', 'deejay');
Event.off('changer');