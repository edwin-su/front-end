define([
    'name'
], function (name) {
    function GoToSchool() {
        var self = this;
        self.go = function () {
            $("p").text("ing");
            return name.getName() + "will go to school";
        }
    }
    return new GoToSchool();
});