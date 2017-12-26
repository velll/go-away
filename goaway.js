class GoAway {
  constructor(){
    this.wentAway = []
  }

  hideTarget(targetId) {
    var targetElement = browser.menus.getTargetElement(targetId);
    targetElement.style.display = "none";

    console.log(targetId + " went away");
  }
}

var goaway = new GoAway();
