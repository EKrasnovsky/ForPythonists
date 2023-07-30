const executeCodeBtn = document.querySelector('.editor__run');
const resetCodeBtn = document.querySelector('.editor__reset');

let codeEditor = ace.edit("editorCode");
let defaultCode = 'console.log("Hello World!")';

let editorLib = {
    init() {
			codeEditor.setTheme("ace/theme/tomorrow_night");

        codeEditor.session.setMode("ace/mode/javascript");

        codeEditor.setOptions({
            fontFamily: 'monospace',
            fontSize: '12pt',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
        });

        codeEditor.setValue(defaultCode);
    }
}

executeCodeBtn.addEventListener('click', () => {
    const userCode = codeEditor.getValue();

    try {
        new Function(userCode)();
    } catch (err) {
        console.error(err);
    }
});

resetCodeBtn.addEventListener('click', () => {
    codeEditor.setValue(defaultCode);
})

editorLib.init();