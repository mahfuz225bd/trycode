const main = document.querySelector("main");
const container = document.querySelector(".container");
const cmdRunCode = document.getElementById("cmdRunCode");
const inputCode = document.getElementById("inputCode");
const outputCode = document.getElementById("outputCode");
const cmdDownload = document.getElementById("cmdDownload");
const cmdChangeOrientation = document.getElementById("cmdChangeOrientation");
const cmdChangeTheme = document.getElementById("cmdChangeTheme");

const initCode = `<!DOCTYPE html>
<html lang="en">

<head>
    <title></title>
</head>

<body>
    <p>The content of the body element is displayed in your browser.</p>
</body>

</html>`;

// While document is ready
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    cmdRunCode.click();
  });

  // Update the initial result size after loading the DOM
  updateFrameSize();

  responsive();

  // Load initial code
  inputCode.innerHTML = initCode;

  // document.getElementById('chkAutoRun').addEventListener('change', e => {
  //     if (e.target.checked) {
  //         inputCode.addEventListener('keyup', e => {
  //             showOutput(e.target.value)
  //         })
  //         cmdRunCode.disabled = true
  //     } else {
  //         cmdRunCode.disabled = false
  //     }
  // })

  // Run code when the button is clicked
  cmdRunCode.addEventListener("click", () => {
    showOutput(inputCode.value);
  });

  // Download the code when the download button is clicked
  cmdDownload.addEventListener("click", () => {
    const fileName = prompt("Enter File Name:") || "index.html";
    download(fileName, "text/html", inputCode.value);
  });

  // Change orientation of the main section
  cmdChangeOrientation.addEventListener("click", () => {
    main.classList.toggle("view-orientation-2");
  });

  // Change theme of the container
  cmdChangeTheme.addEventListener("click", () => {
    if (!container.classList.contains("dark")) {
      cmdChangeTheme.title = "Switch to Light Theme";
      container.classList.add("dark");
    } else {
      cmdChangeTheme.title = "Switch to Dark Theme";
      container.classList.remove("dark");
    }
  });

  // Adjust the layout on window resize \w updating frame size
  window.addEventListener("resize", () => {
    responsive(); // Adjust the layout for responsiveness
    updateFrameSize(); // Update the frame size on window resize
  });
});

// Function to adjust layout responsiveness
const responsive = () => {
  if (window.matchMedia("(max-width: 600px)").matches) {
    main.classList.add("view-orientation-2");
  } else {
    main.classList.remove("view-orientation-2");
  }

  // Set main section height based on header and footer size
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const voidSpaceBetween = header.clientHeight + footer.clientHeight;
  main.style.height = window.innerHeight - voidSpaceBetween + "px";
};

// Show output to #outputCode
const showOutput = (value) => {
  const iframeW = outputCode.contentWindow
    ? outputCode.contentWindow
    : outputCode.contentDocument.document
    ? outputCode.contentDocument.document
    : outputCode.contentDocument;

  iframeW.document.open();
  iframeW.document.write(value);
  iframeW.document.close();

  // Set contentEditable for selection
  if (iframeW.document.body && !iframeW.document.body.isContentEditable) {
    iframeW.document.body.contentEditable = true;
    iframeW.document.body.contentEditable = false;
  }
};

// Function to update the output frame size
const updateFrameSize = () => {
  const iframe = outputCode;
  const outputSizeSpan = document.querySelector(".output-frame-size");

  // Get the dimensions of the iframe
  const width = iframe.offsetWidth;
  const height = iframe.offsetHeight;

  // Update the output size text
  outputSizeSpan.textContent = `Result Size: ${width} x ${height}`;
};

// For downloading a file
const download = (filename, type, data) => {
  const a = document.createElement("a");
  a.download = filename;
  const blob = new Blob([data], { type: type });
  a.href = URL.createObjectURL(blob);
  a.click();
};
