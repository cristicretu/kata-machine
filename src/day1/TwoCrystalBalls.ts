export default function two_crystal_balls(breaks: boolean[]): number {
    let lo = 0,
        hi = breaks.length;

    let ans = -1;

    while (lo < hi) {
        let mid = Math.floor(lo + (hi - lo) / 2);

        if (breaks[mid] === false) {
            lo = mid + 1;
        } else {
            hi = mid;
            ans = hi;
        }
    }

    return ans;
}
