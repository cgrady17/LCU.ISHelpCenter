class HelpCenter {
    navigator: ClientNavigator;

    constructor() {
        console.log("Help Center initialized");

        $("hc-year").text(new Date().getFullYear());

        this.navigator = new ClientNavigator();
    }
}

class ClientNavigator {
    constructor() {
        let hash = window.location.hash || "Home";
        if (hash.indexOf("#")) hash = hash.replace("#", "");

        $.get(hash + ".html")
            .done((html: string) => {
                $("#hc-content").html(html);
                this.initPartial();
            });
    }

    private initPartial(): void {
        $("[class^='mdl']")
            .each((index: number, element: Element) => {
                (<any>componentHandler).upgradeElement(element);
            });
    }
}