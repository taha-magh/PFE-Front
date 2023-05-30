import * as tslib_1 from "tslib";
// Angular
import { Pipe } from '@angular/core';
/**
 * Returns string from Array
 */
var JoinPipe = /** @class */ (function () {
    function JoinPipe() {
    }
    /**
     * Transform
     *
     * @param value: any
     * @param args: any
     */
    JoinPipe.prototype.transform = function (value, args) {
        if (Array.isArray(value)) {
            return value.join(' ');
        }
        return value;
    };
    JoinPipe = tslib_1.__decorate([
        Pipe({
            name: 'join'
        })
    ], JoinPipe);
    return JoinPipe;
}());
export { JoinPipe };
//# sourceMappingURL=join.pipe.js.map