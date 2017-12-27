class ContextMenuItem {
  constructor (settings) {
    browser.menus.create({
      id: settings.id,
      title: settings.title,
      contexts: ["all"],
      onclick(info, tab) {
        browser.tabs.sendMessage(tab.id, {"id": info.targetElementId});
      }
    });
  };
}

var goaway = new ContextMenuItem({"id": "go-away",
                                  "title":"Go away!"});
