class GoAway {
  bindListener(){
    browser.runtime.onMessage.addListener(this.hide);
  }

  hide(target) {
    var targetElement = browser.menus.getTargetElement(target.id);
    targetElement.style.display = "none";
  }
}

var goaway = new GoAway();
goaway.bindListener();
