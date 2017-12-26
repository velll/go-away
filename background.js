browser.menus.create({
  id: "go-away",
  title: "Go away!",
  contexts: ["all"]
});

browser.menus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "go-away") {
    let target = browser.menus.getTargetElement(info.targetElementId);
    console.log(target);
  }
});
