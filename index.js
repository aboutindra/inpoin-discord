'use strict';
require('./bin/helpers/discord').init();
module.exports = {
  channel : new require('./bin/modules/discord/handler/handler')
}
