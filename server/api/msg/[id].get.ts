import { ApiResponse } from "./res/ApiResponse";

export default defineEventHandler(async (event) => {
  return new ApiResponse<{ msg: string }>({
    msg: `Hello ${event.context.params.id}`
  });
});
