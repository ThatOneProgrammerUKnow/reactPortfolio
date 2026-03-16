import { useState, useEffect } from "react";
import "./heading.css";

function counter(startDate) {
    const now = new Date();
    const start = new Date(startDate);
    const diff = now - start;

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
}

export default function Heading({ heading, subHeadingEnd }) {
    const startDate = "2006-04-29";
    const [remaining, setRemaining] = useState(() => counter(startDate));
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth < 768 : false
    );

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", onResize);

        const interval = setInterval(() => {
            setRemaining(counter(startDate));
        }, 1000);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", onResize);
        };
    }, [startDate]);

    return (
        <header>
            <h1>{heading}</h1>
            <h2>
                {remaining.days} days
                {!isMobile && (
                    <>
                        {" "}
                        {remaining.hours} hours {remaining.minutes} minutes and {remaining.seconds} {subHeadingEnd}
                    </>
                )}
                {isMobile && subHeadingEnd}
            </h2>
        </header>
    );
}