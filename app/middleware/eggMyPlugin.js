
const assert = require('assert');
const mkdirp = require('mkdirp');

const tpl = '<!DOCTYPE html>\n' +
    '        <html>\n' +
    '        <head>\n' +
    '            <title>${code}</title>\n' +
    '            <meta charset="utf-8"/>\n' +
    '        </head>\n' +
    '        <body>\n' +
    '            qqq\n' +
    '        </body>\n' +
    '        </html>'

module.exports = (options, app) => {
    // 干预渲染
   return async function eggMwTest(ctx, next) {
      console.log('==========+++')
      console.log(ctx.body)
      ctx.set('Content-Type', 'text/html; charset=utf-8');
      ctx.body = tpl;

      //ctx.moUser.empName = 'xj';

      await next();
   }
};
