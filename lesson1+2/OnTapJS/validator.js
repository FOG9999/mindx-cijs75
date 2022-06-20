export * from "./math.js"; // export all from math.js
import * as math from "./math.js";

let validateBeforeSum = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return math.sum(a, b);
  } else throw new Error("Input invalid");
};

export { validateBeforeSum };
// sau dòng export này toàn bộ các function sẽ được export ra từ đây và chỉ cần import file này là sử dụng được
