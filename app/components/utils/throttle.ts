export const throttle = <T extends (...args: unknown[]) => void>(
    func: T,
    limit: number
): (this: void, ...args: Parameters<T>) => void => {
    let lastFunc: ReturnType<typeof setTimeout> | undefined;
    let lastRan: number | undefined;

    return function (this: void, ...args: Parameters<T>) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            if (lastFunc) clearTimeout(lastFunc);

            lastFunc = setTimeout(() => {
                if (Date.now() - (lastRan as number) >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - (lastRan as number)));
        }
    };
};
