function onThemeChange() {
    // variables
    let cssStyleSheet = document.getElementById("mainStyle");
    let cssLength = cssStyleSheet.href.length;
    let path = cssStyleSheet.href.substring(cssLength - 9, cssLength);

    if (path === "/auth.css") {
      cssStyleSheet.href = "css/auth_dark.css";
      document.getElementById("theme_icon").className = "fa fa-sun";
    } else {
      cssStyleSheet.href = "css/auth.css";
      document.getElementById("theme_icon").className = "fa fa-moon";
    }
  }