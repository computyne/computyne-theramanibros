"use client";
import {usePathname} from "next/navigation";
import FunfactSingle2 from "./FunfactSingle2";
import getServiceData from "@/libs/service/getServiceData";
import getHireServiceData from "@/libs/service/getHireServiceData";

const Counter = () => {
    const pathname = usePathname();
    const slug = pathname.split("/").filter(Boolean).pop();
    const counters = getHireServiceData(slug);

    const counterData =
        !counters || Object.keys(counters).length === 0
            ? getServiceData("data-extraction-services")
            : counters;

    // 🔒 Guard clause — hide section completely if no counters
    if (
        !Array.isArray(counterData?.counter) ||
        counterData.counter.length === 0
    ) {
        return null;
    }

    return (
        <div
            className={`tj-client-section-4 mb-0    section-gap-x wow fadeInUp`}
            data-wow-delay=".4s" style={{backgroundColor: "#0c1d36"}}
        >
            <div className="container-fluid client-container">
                <div className="row">
                    <div className="col-12">
                        <div className="countup-wrap" style={{backgroundColor: "#0c1d36"}}>
                            {counterData.counter.map((item, index) => (
                                item.value != null && item.value !== 0 && (
                                    <div className="countup-item-mod-hireresouce" key={index}>
                                        <FunfactSingle2
                                            currentValue={item.value}
                                            symbol={item.symbol}
                                        />

                                        <span className="count-text-mod-2">
                                            {item.label}
                                        </span>

                                        {index !== counterData.counter.length - 1 && (
                                            <span
                                                className="count-separator"
                                                style={{
                                                    backgroundImage: "url('/images/shape/separator.svg')",
                                                }}
                                            ></span>
                                        )}
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
