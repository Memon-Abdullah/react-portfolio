import React, { useState, useEffect } from "react";

export const Typewriter = ({ strings }) => {
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (charIndex < strings[index].length) {
            const timer = setTimeout(() => {
                setCharIndex(charIndex + 1);
            }, 60);
            return () => clearTimeout(timer);
        } else if (index < strings.length - 1) {
            const timer = setTimeout(() => {
                setIndex(index + 1);
                setCharIndex(0);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [index, charIndex, strings]);

    return (
        <div>
            {strings.slice(0, index + 1).map((str, i) => (
                <span key={i}>
                    {str.substring(0, i === index ? charIndex : str.length)}
                    <span>&nbsp;</span>
                </span>
            ))}
        </div>
    );
};
