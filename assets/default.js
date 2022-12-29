const main = document.querySelector('main')
const cmdRunCode = document.getElementById("cmdRunCode")
const codeArea = document.getElementById("codeArea")

const autoAdjustMain = () => {
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')
    const voidSpaceBetween = header.clientHeight + footer.clientHeight
    main.style.height = window.innerHeight - voidSpaceBetween + 'px'
}

// Show output to #outputArea
const showOutput = (value) => {
    const outputArea = document.getElementById("outputArea")
    outputArea.src = "data:text/html;charset=uft-8," + encodeURI(value)
}

// while document is ready
document.addEventListener('DOMContentLoaded', () => {
    autoAdjustMain()

    // Load init code
    codeArea.innerHTML = `&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;body&gt;
The content of the body element is displayed in your browser.
&lt;/body&gt;

&lt;/html&gt;`;

    // document.getElementById('chkAutoRun').addEventListener('change', e => {
    //     if (e.target.checked) {
    //         codeArea.addEventListener('keyup', e => {
    //             showOutput(e.target.value)
    //         })
    //         cmdRunCode.disabled = true
    //     } else {
    //         cmdRunCode.disabled = false
    //     }
    // })

    cmdRunCode.addEventListener('click', () => {
        showOutput(codeArea.value)
    })

    // cmdChangeOrientation
    document.getElementById('cmdChangeOrientation').addEventListener('click', () => {
        if (main.classList.contains('view-orientation-2')) {
            main.classList.remove('view-orientation-2')
        } else {
            main.classList.add('view-orientation-2')
        }
    })

    window.addEventListener('resize', autoAdjustMain)
})