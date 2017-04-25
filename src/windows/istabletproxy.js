cordova.commandProxy.add("IsTablet", {
  isTabletDevice: function(successCallback, errorCallback, input) {
    try {
      var iAmTablet = false;
      var family = Windows.System.Profile.AnalyticsInfo.versionInfo.deviceFamily;
      if (family == "Windows.Desktop") {
        iAmTablet = true;
        //(Windows.UI.ViewManagement.UIViewSettings.getForCurrentView().userInteractionMode != Windows.UI.ViewManagement.UserInteractionMode.mouse);
      }
      successCallback(iAmTablet);
    } catch(e) {
      errorCallback(e);
    }
  }
});
