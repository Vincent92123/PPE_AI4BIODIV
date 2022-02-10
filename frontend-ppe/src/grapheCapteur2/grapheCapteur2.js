import "./grapheCapteur2.css";
import Axios from "axios";

import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid,
    Legend,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";


const data = [];
for (let num = 30; num >= 0; num--) {
    data.push({
        date: subDays(new Date(), num).toISOString().substr(0, 10),
        Température: 21 + (Math.random() * 3),
    });
}

export default function Home2() {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2451B7" stopOpacity={0.6} />
                        <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
                    </linearGradient>
                </defs>

                <Area dataKey="Température" stroke="#2451B7" fill="url(#color)" />

                <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(str) => {
                        const date = parseISO(str);
                        if (date.getDate() % 7 === 0) {
                            return format(date, "MMM, d");
                        }
                        return "";
                    }}
                />

                <YAxis
                    datakey="Température"
                    axisLine={false}
                    tickLine={false}
                    tickCount={8}
                />

                <Tooltip />

                <CartesianGrid opacity={0.1} vertical={false} />

                <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </AreaChart>
        </ResponsiveContainer>
    )
}