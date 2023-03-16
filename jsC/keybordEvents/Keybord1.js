document.addEventListener("keypress", (event) => {
    var keyName = event.key;
    var keyCode = event.code;
    // alert(`Keydown: The key pressed is ${keyName} and its code value is ${keyCode}`);
    document.querySelector("#myID").innerText = "The KeyPressed Is "+ keyName + ' Keycode ' + keyCode;
  }, false);