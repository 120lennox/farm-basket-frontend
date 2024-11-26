import { useState, useEffect } from "react";

type MonthlyData = {
    totalSales: number;
    previousMonthSales: number;
    bestSellingCategory: string;
    totalOrders: number;
    customerGrowthRate: number;
};

export default function Statistics() {
    const [novemberData, setNovemberData] = useState<MonthlyData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data: MonthlyData = {
                totalSales: 32000,
                previousMonthSales: 30000,
                bestSellingCategory: "Pesticides",
                totalOrders: 580,
                customerGrowthRate: 12.2,
            };
            setNovemberData(data);
        };

        fetchData();
    }, []);

    if (!novemberData) {
        return (
            <div className="flex h-screen items-center justify-center">
                <p className="text-xl text-gray-600">Loading November Statistics...</p>
            </div>
        );
    }

    const { totalSales, previousMonthSales, bestSellingCategory, totalOrders, customerGrowthRate } = novemberData;

    const salesGrowth = totalSales - previousMonthSales;
    const growthIndicator = salesGrowth > 0 ? "up" : "down";

    return (
        <div className="h-screen p-8 bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Sales Statistics - November</h1>

            <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-h-80 overflow-y-auto">
                {/* Child container */}
                <h2 className="text-xl font-semibold text-gray-700">Sales Details</h2>
                <div className="text-lg text-gray-800">
                    <p>Total Sales: ${totalSales.toLocaleString()}</p>
                    <p
                        className={`text-sm ${
                            growthIndicator === "up" ? "text-green-600" : "text-red-600"
                        }`}
                    >
                        {growthIndicator === "up" ? "↑" : "↓"} ${Math.abs(salesGrowth).toLocaleString()} compared to last month
                    </p>
                    <p>Best-Selling Category: {bestSellingCategory}</p>
                    <p>Total Orders: {totalOrders}</p>
                    <p
                        className={`${
                            customerGrowthRate > 0 ? "text-green-600" : "text-red-600"
                        }`}
                    >
                        Customer Growth Rate: {customerGrowthRate}%
                    </p>
                </div>

                {/* Simulate overflowing content */}
                <div className="mt-4">
                    <p>Extra content line 1</p>
                    <p>Extra content line 2</p>
                    <p>Extra content line 3</p>
                    <p>Extra content line 4</p>
                    <p>Extra content line 5</p>
                    <p>Extra content line 6</p>
                    <p>Extra content line 7</p>
                </div>
            </div>
        </div>
    );
}
