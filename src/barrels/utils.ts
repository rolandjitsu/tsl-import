export function doSomeRolls(p: Params) {
    return `Rolling for ${p.revs} revs`;
}

export interface Params {
    revs?: number;
}
