
/**
 * Applies an offset to `x`.
 *
 * @export
 * @param   {number}    x
 *          The number to apply the offset to.
 * @param   {number}    a
 *          The maximum offset.
 * @return  {number}
 *          `x` after the offset is applied.
 */
export function offset(x: number, a: number): number {
    const rand = (Math.random() * a * 2) - a;
    return x + rand;
}
