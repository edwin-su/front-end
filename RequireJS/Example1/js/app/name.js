define(function () {
    function Name() {
        var self = this;
        self.getName = function () {
            return "Mike";
        }
    }
    return new Name();
});