# TryIt Editor Desktop

This is a unofficial desktop version of w3school tryit editor developed for practicing html coding. I have plan for adding more features like file system or others with other programming facilities.

Firstly, install all dependencies with:

> npm install

Then, run with command:

> npm run tauri dev

To build:

> npm run tauri build

## Features for Future Releases

Here are some features that I plan to include for the future releases:

- Tab action on code input

- Colorful syntax highlighting

- Toggling auto run (with saving toggled value is true or false into localStorage to remain same after closing the editor)

- Dynamic resizing of the code input and output is allowed with a drag-bar (where code input + output should equal 100%)

- Console for JS code

- Along with only HTML, HTML-CSS-JS like codepen.io
    - Downloading whole project
    - Saving the whole project as a project file

- Allow adding multiple files with a tree-structured view of files/folders.
    - Tab for the switching

- Drag and drop to open a file to edit

- Allow open with this code editor though context menu of the file explorer

- Build-in bash command prompt

- Built-in git

- Allow coding for other platforms like Node.js, PHP, Python, Java, C, C++, and others with allowing instant clickable downloads and installations of compilers and interpreters of different versions and authors.

- Zoom in/out for code and output

- Find/Replace

- Allowing to add current date/time with F5 or others

- Menubar

- Status bar
    - Line, Col
    - Character Counts
    - Zoom values of code and output

- Settings
    - Toggle on/off syntax highlighting
    - Managing versions and variants (authors) of the platforms

- Allowing to open and publish of a project of a git repository

- Web publishing
    - Free or limited free publishing with a subdomain
    - Free publishing as a GitHub page
    - Publishing directly like FileZilla which should be as easy as possible

- Optional login/logout for well managing

# TODOS for Before Next Release

- Revise whole code of this editor and re-write optimized version

- Try to add more features as possible, which should at least be for HTML or HTML-CSS-JS
