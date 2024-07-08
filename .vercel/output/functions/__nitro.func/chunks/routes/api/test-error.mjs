import { d as defineEventHandler, c as createError } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';

const testError = defineEventHandler((event) => {
  const id = parseInt(event.context.params.id);
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      message: "ID \u5E94\u8BE5\u662F\u4E00\u4E2A\u6574\u6570"
    });
  }
  return "ok";
});

export { testError as default };
//# sourceMappingURL=test-error.mjs.map
