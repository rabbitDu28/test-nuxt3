import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';

const hello = defineEventHandler((event) => {
  return {
    message: "hello,nuxt3!"
  };
});

export { hello as default };
//# sourceMappingURL=hello.mjs.map
