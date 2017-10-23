
/**
 * Applies entropy to `x`.
 *
 * @export
 * @param   {number}    x
 *          The number to apply entropy to.
 * @param   {number}    a
 *          The maximum amount of entropy.
 * @return  {number}
 *          `x` after entropy is applied.
 */
export function entropize(x: number, a: number): number {
    const rand = (Math.random() * a * 2) - a;
    return x + rand;
}
