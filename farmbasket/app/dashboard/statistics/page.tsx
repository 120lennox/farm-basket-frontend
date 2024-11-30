"use client"
import { useState, useEffect } from "react";

type MonthlyData = {
    month: string;
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
                month: "November",
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

    const { month, totalSales, previousMonthSales, bestSellingCategory, totalOrders, customerGrowthRate } = novemberData;

    const salesGrowth = totalSales - previousMonthSales;
    const growthIndicator = salesGrowth > 0 ? "up" : "down";

    return (
        <div className="h-screen overflow-y-auto bg-gray-100">
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Sales Statistics - {month}</h1>

                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">Total Sales</h2>
                    <p className="text-2xl font-bold text-gray-800">${totalSales.toLocaleString()}</p>
                    <p
                        className={`text-sm mt-2 ${
                            growthIndicator === "up" ? "text-green-600" : "text-red-600"
                        }`}
                    >
                        {growthIndicator === "up" ? "↑" : "↓"} ${Math.abs(salesGrowth).toLocaleString()} compared to last month
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">Best-Selling Category</h2>
                    <p className="text-lg font-bold text-gray-800">{bestSellingCategory}</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">Total Orders</h2>
                    <p className="text-2xl font-bold text-gray-800">{totalOrders}</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-700">Customer Growth Rate</h2>
                    <p className="text-2xl font-bold text-gray-800">{customerGrowthRate}%</p>
                    <p
                        className={`text-sm mt-2 ${
                            customerGrowthRate > 0 ? "text-green-600" : "text-red-600"
                        }`}
                    >
                        {customerGrowthRate > 0 ? "Growing" : "Declining"}
                    </p>
                </div>
            </div>
        </div>
    );
}
