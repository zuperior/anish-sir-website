// BeYourOwnBoss/Content/Counter.tsx
import React from "react";
import { motion } from "motion/react";

export const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let start = 0;
        const end = target;
        const duration = 2000;
        const incrementTime = duration / end;

        const interval = setInterval(() => {
            start += 1;
            if (start <= end) {
                setCount(start);
            } else {
                clearInterval(interval);
            }
        }, incrementTime);

        return () => clearInterval(interval);
    }, [target]);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring", stiffness: 150, damping: 50 }}>
            {count}
            {suffix}
        </motion.div>
    );
};
