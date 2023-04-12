const main = document.querySelector('main')
const cmdRunCode = document.getElementById("cmdRunCode")
const codeArea = document.getElementById("codeArea")
const outputArea = document.getElementById("outputArea")

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

// Show output to #outputArea
const showOutput = (value) => {
    outputArea.srcdoc = value
}

// while document is ready
window.addEventListener('DOMContentLoaded', () => {
    responsive()

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

    // cmdRunCode
    cmdRunCode.addEventListener('click', () => {
        showOutput(codeArea.value)
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

const download = (filename, type, data) => {
    const a = document.createElement('a');
    a.download = filename;
    const blob = new Blob([data], { type: type });
    a.href = URL.createObjectURL(blob);
    a.click();
}