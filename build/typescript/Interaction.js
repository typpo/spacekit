"use strict";
exports.__esModule = true;
exports.findClosestPickCandidate = exports.findParentPickMatch = exports.getNormalizedPointer = void 0;
function getNormalizedPointer(screen, width, height) {
    return {
        x: (screen.x / width) * 2 - 1,
        y: -(screen.y / height) * 2 + 1
    };
}
exports.getNormalizedPointer = getNormalizedPointer;
function findParentPickMatch(target, objectsByUuid) {
    var _a;
    var current = target;
    while (current) {
        var matched = objectsByUuid.get(current.uuid);
        if (matched) {
            return matched;
        }
        current = (_a = current.parent) !== null && _a !== void 0 ? _a : undefined;
    }
    return undefined;
}
exports.findParentPickMatch = findParentPickMatch;
function findClosestPickCandidate(screen, candidates) {
    var bestMatch;
    candidates.forEach(function (candidate) {
        var dx = candidate.screen.x - screen.x;
        var dy = candidate.screen.y - screen.y;
        var distancePx = Math.hypot(dx, dy);
        if (distancePx > candidate.radiusPx) {
            return;
        }
        if (!bestMatch || distancePx < bestMatch.distancePx) {
            bestMatch = {
                candidate: candidate,
                distancePx: distancePx
            };
        }
    });
    return bestMatch;
}
exports.findClosestPickCandidate = findClosestPickCandidate;
