browser.commands.onCommand.addListener((name) => {
  if (name == "next" || name == "prev") {
    browser.tabs
      .query({ currentWindow: true, discarded: false })
      .then((/** @type {any[]} */ tabs) => {
        let max = tabs.length;
        let i = tabs.findIndex((e) => e.active);
        if (i == -1) {
          return
        }

        let target = name == "next" ? (++i % max) : ((max + i - 1) % max);

        browser.tabs.update(tabs[target].id, { active: true });
      });
  }
});

