## Tab Anywhere Obsidian Plugin

By default, pressing tab in edit mode will indent the current line only if the cursor is in the beginning of the line. This plugin simply configures the tab key to indent the current line regardless of where in the line focus is set.

Note: you may have to relaunch Obsidian after activating the plugin.

Technically, this plugin uses Code Mirror's `extraKeys` option to set tab
to the
[indentMore](https://codemirror.net/doc/manual.html#command_indentMore)
command.
