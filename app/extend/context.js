'use strict';
module.exports = {
    get getLog() {
      console.log('======')
      console.log(this.request.query)
      console.log('======')
      return 'jy.xj'
    }
};
