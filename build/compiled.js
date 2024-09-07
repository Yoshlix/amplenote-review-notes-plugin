(() => {
  // lib/plugin.js
  var plugin = {
    dailyJotOption: {
      check(app, noteHandle) {
        if (app.settings["LastDayReviewed"] === (/* @__PURE__ */ new Date()).toLocaleDateString()) {
          return false;
        }
        return "Review notes";
      },
      async run(app, noteHandle) {
        app.alert("Review notes");
        await app.setSetting("LastDayReviewed", (/* @__PURE__ */ new Date()).toLocaleDateString());
      }
    },
    async noteOption(app, noteUUID) {
      const markdown = await app.getNoteContent({ uuid: noteUUID });
      app.alert(markdown);
    }
    // There are several other entry points available, check them out here: https://www.amplenote.com/help/developing_amplenote_plugins#Actions
    // You can delete any of the insertText/noteOptions/replaceText keys if you don't need them
  };
  var plugin_default = plugin;
})();
