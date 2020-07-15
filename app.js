'use strict';
class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  configWillLoad() {
    // Ready to call configDidLoad,
    // Config, plugin files are referred,
    // this is the last chance to modify the config.
  }

  configDidLoad() {
    // Config, plugin files have been loaded.
    const index = this.app.config.coreMiddleware.length;

    this.app.config.coreMiddleware.splice(index, 0, 'eggMyPlugin');
    console.log(this.app.config.coreMiddleware)
  }

  async didLoad() {
    // All files have loaded, start plugin here.

  }

  async willReady() {
    // All plugins have started, can do some thing before app ready
  }

  async didReady() {
    // Worker is ready, can do some things
    // don't need to block the app boot.
  }

  async serverDidReady() {
    // Server is listening.
  }

  async beforeClose() {
    // Do some thing before app close.
  }
}

module.exports = AppBootHook;