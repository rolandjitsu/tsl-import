import {doSomeRolls, Params} from './utils';

export function roll(o: Options) {
    return doSomeRolls(o);
}

export type Options = Pick<Params, 'revs'>;
