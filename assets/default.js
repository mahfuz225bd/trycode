const main = document.querySelector('main')
const cmdRunCode = document.getElementById("cmdRunCode")
const inputCode = document.getElementById("inputCode")
const outputCode = document.getElementById("outputCode")

// While document is ready
window.addEventListener('DOMContentLoaded', () => {
    responsive()

    // Load init code
    inputCode.innerHTML = `&lt;!DOCTYPE&nbsp;html&gt;
&lt;html&nbsp;lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;title&gt;&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;p&gt;The&nbsp;content&nbsp;of&nbsp;the&nbsp;body&nbsp;element&nbsp;is&nbsp;displayed&nbsp;in&nbsp;your&nbsp;browser.&lt;/p&gt;
&lt;/body&gt;

&lt;/html&gt;`;

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

    // cmdRunCode
    cmdRunCode.addEventListener('click', () => {
        showOutput(inputCode.value)
    })

    document.getElementById('cmdDownload').addEventListener('click', () => {
        const fileName = prompt("Enter File Name:")
        download(fileName, "text/html", inputCode.value)
    })

    // cmdChangeOrientation
    document.getElementById('cmdChangeOrientation').addEventListener('click', () => {
        main.classList.toggle('view-orientation-2')
    })

    // cmdChangeTheme
    document.getElementById('cmdChangeTheme').addEventListener('click', () => {
        const container = document.querySelector('.container')
        container.classList.toggle('dark')
    })

    window.addEventListener('resize', responsive)
})

const pending = () => {
    alert('!!!Pending!!!')
}

const responsive = () => {
    if (window.matchMedia("(max-width: 600px)").matches) {
        main.classList.add('view-orientation-2')
    } else {
        main.classList.remove('view-orientation-2')
    }

    const header = document.querySelector('header')
    const footer = document.querySelector('footer')
    const voidSpaceBetween = header.clientHeight + footer.clientHeight
    main.style.height = window.innerHeight - voidSpaceBetween + 'px'
}

// Show output to #outputCode
const showOutput = (value) => {
    const iframeW = (outputCode.contentWindow) ? outputCode.contentWindow
        : (outputCode.contentDocument.document) ? outputCode.contentDocument.document
            : outputCode.contentDocument;
    iframeW.document.open();
    iframeW.document.write(value);
    iframeW.document.close();

    // (To reproduce the error: Select text in the result window with, and without, the contentEditable statements below.)  
    if (iframeW.document.body && !iframeW.document.body.isContentEditable) {
        iframeW.document.body.contentEditable = true;
        iframeW.document.body.contentEditable = false;
    }
}

// For downloading a file
const download = (filename, type, data) => {
    const a = document.createElement('a');
    a.download = filename;
    const blob = new Blob([data], { type: type });
    a.href = URL.createObjectURL(blob);
    a.click();
}