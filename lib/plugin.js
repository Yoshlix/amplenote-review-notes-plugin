// --------------------------------------------------------------------------------------
// API Reference: https://www.amplenote.com/help/developing_amplenote_plugins
// Tips on developing plugins: https://www.amplenote.com/help/guide_to_developing_amplenote_plugins
const plugin = {


  dailyJotOption: {
    check(app, noteHandle)
    {
      if (app.settings["LastDayReviewed"] === new Date().toLocaleDateString()) {
        return false
      }
      return "Review notes";
    },
    async run(app, noteHandle) {
      app.alert("Review notes");

      await app.setSetting("LastDayReviewed", new Date().toLocaleDateString());
    }
  },

  async noteOption(app, noteUUID) {
    const markdown = await app.getNoteContent({uuid: noteUUID});
    console.log(markdown);
    let table = markdown.split("|");
    table.length = table.length - 10;
    console.log(table);
    app.alert("FRAGE: " + table[0]);
  }
  // There are several other entry points available, check them out here: https://www.amplenote.com/help/developing_amplenote_plugins#Actions
  // You can delete any of the insertText/noteOptions/replaceText keys if you don't need them
};


export default plugin;