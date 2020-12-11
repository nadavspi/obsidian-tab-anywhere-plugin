import {
  Plugin,
} from "obsidian";

export default class MyPlugin extends Plugin {
  onload() {
    this.registerEvent(
      this.app.on("codemirror", (cm: CodeMirror.Editor) => {
        cm.setOption("extraKeys", { "Tab": "indentMore" });
      })
    );
  }
}

