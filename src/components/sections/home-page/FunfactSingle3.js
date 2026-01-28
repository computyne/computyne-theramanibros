"use client";
import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";

const FunfactSingle3 = ({currentValue, symbol, sup, type}) => {
    const [value, setValue] = useState(0);
    const [Odometer, setOdometer] = useState(null);

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    useEffect(() => {
        import("react-odometerjs").then(mod => setOdometer(() => mod.default));
    }, []);

    useEffect(() => {
        if (inView) {
            const timeoutId = setTimeout(() => {
                if (currentValue != null) {
                    setValue(currentValue);
                }
            }, 250);
            return () => clearTimeout(timeoutId);
        }
    }, [inView, currentValue]);

    return (
        <div ref={ref} className="inline-content-mod-3">
            {/* ONLY number hidden */}
            {currentValue != null && Odometer && (
                <Odometer
                    className={`odometer ${
                        type === 2 || type === 3 ? "" : "countup-number"
                    }`}
                    value={value}
                />
            )}

            {/* Symbol always visible */}
            {sup ? <sup className="count-plus">{sup}</sup> : null}

            {symbol ? (
                <span
                    className={`${
                        type === 3 ? "h5-about-counter-symbol" : "count-plus"
                    }`}
                >
					{symbol}
				</span>
            ) : null}
        </div>
    );
};

export default FunfactSingle3;
