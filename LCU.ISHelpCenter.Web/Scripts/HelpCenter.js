var HelpCenter = (function () {
    function HelpCenter() {
        console.log("Help Center initialized");
        $("hc-year").text(new Date().getFullYear());
        this.navigator = new ClientNavigator();
    }
    return HelpCenter;
}());
var ClientNavigator = (function () {
    function ClientNavigator() {
        var _this = this;
        var hash = window.location.hash || "Home";
        if (hash.indexOf("#"))
            hash = hash.replace("#", "");
        $.get(hash + ".html")
            .done(function (html) {
            $("#hc-content").html(html);
            _this.initPartial();
        });
    }
    ClientNavigator.prototype.initPartial = function () {
        $("[class^='mdl']")
            .each(function (index, element) {
            componentHandler.upgradeElement(element);
        });
    };
    return ClientNavigator;
}());
//# sourceMappingURL=HelpCenter.js.map