"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 0, name: 'Віктор' },
            { id: 1, name: 'Сашко' },
            { id: 2, name: 'Петро' },
            { id: 3, name: 'DDDD' },
            { id: 4, name: 'VVVV' },
            { id: 5, name: 'KKKK' },
            { id: 12, name: 'Петро' },
            { id: 23, name: 'DDDD' },
            { id: 34, name: 'VVVV' },
            { id: 45, name: 'KKKK' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map