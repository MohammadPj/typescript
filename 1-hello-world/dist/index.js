"use strict";
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 1.2;
    return +weight * 1.2;
}
kgToLbs(100);
kgToLbs("10kg");
//# sourceMappingURL=index.js.map