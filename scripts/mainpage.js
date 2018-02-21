
ProfileBackgroundPlacer(); //For Phone view.

function ProfileBackgroundPlacer() {
  var ProfilePictureStyleRef = window.getComputedStyle(document.getElementById("ProfilePicture"));
  var settingPropRef = document.getElementById("ProfilePictureBckgrndHolder_div")
  settingPropRef.style.top =(GetNewProperty(ProfilePictureStyleRef.getPropertyValue("Top"),(-10)));
  settingPropRef.style.height = (GetNewProperty(ProfilePictureStyleRef.getPropertyValue("Height"),(+20)));


  var ppbckgrndholderStyleRef = document.getElementById("ProfilePictureBckgrndHolder_div").style;

  function GetNewProperty(prop,add) {
    var cutedPropVal = parseFloat(prop.replace("px",""));
    cutedPropVal += add;
    var newProp = String(cutedPropVal) + "px"
    return newProp

  }
}
