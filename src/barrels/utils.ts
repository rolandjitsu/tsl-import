export function doSomeRolls(p: Params) {
    console.log(`Rolling for ${p.revs} revs`);
}

export interface Params {
    revs?: number;
}
