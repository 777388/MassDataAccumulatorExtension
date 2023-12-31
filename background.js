chrome.contextMenus.create({
  id: "MassData",
  title: "MassData",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "MassData") {
    const now = new Date();
    const time = now.getTime();
    const date = now.toLocaleDateString();
    for (let v = 0; v <= 45; v ++) {
      for(let f = 0; f <= 149186; f++){
        const bingbong = String.fromCharCode(f);
        const selectedText = time + date + bingbong;
        const yup = selectedText.split("").reduce((acc, char) => acc + char.charCodeAt(), 0).toString();
        const x = yup.split("").map(Number);
        const sum = (arr) =>{
            let total = 0;
            for (let i = 0; i < arr.length; i++) {
                total += (arr[i]*arr[i]);
            };
            console.log({ url: `https://${(total * (arr.length * arr.length))}.com` });
            return total * (arr.length * arr.length);
        };
        const result = sum(x);
      };
    };
  };
});
