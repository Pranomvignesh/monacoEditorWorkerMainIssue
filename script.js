window.addEventListener('DOMContentLoaded', (event) => {
    require.config({
        paths: {
            vs: "./node_modules/monaco-editor/min/vs"
        }
    })

    require(["vs/editor/editor.main"], function(){
        const sampleJs = `
            const value = function(){
                console.log('test');
            }
        `
        const jsModel = monaco.editor.createModel(sampleJs, "javascript");
        const jsContainer = monaco.editor.create(document.getElementById("editor"), {
            wordWrap: 'on'
        })
        jsContainer.setModel(jsModel);
    })
});