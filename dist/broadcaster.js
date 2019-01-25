import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
var Broadcaster = /** @class */ (function () {
    function Broadcaster() {
        this._eventBus = new Subject();
    }
    Broadcaster.prototype.broadcast = function (key, data) {
        this._eventBus.next({ key: key, data: data });
    };
    Broadcaster.prototype.on = function (key) {
        return this._eventBus.asObservable().pipe(filter(function (event) { return event.key === key; }), map(function (event) { return event.data; }));
    };
    return Broadcaster;
}());
export { Broadcaster };
//# sourceMappingURL=broadcaster.js.map