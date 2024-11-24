/*import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from "chart.js";

// Register the required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Statistics() {
    // Define the chart data
    const salesTrendsData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Monthly Sales",
                data: [5000, 7000, 8000, 6000, 9000, 10000],
                backgroundColor: "rgba(136, 132, 216, 0.8)", // Bar color with transparency
            },
        ],
    };

    // Simplified chart options
    const Options = {
        responsive: true,
        plugins: {
            legend: {
                display: true, // Show legend
                position: "top", // Position the legend
            },
            tooltip: {
                enabled: true, // Enable tooltips on hover
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Months", // Label for X-axis
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Sales (in USD)", // Label for Y-axis
                },
                beginAtZero: true, // Start Y-axis at 0
            },
        },
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-1/6">
                <Sidebar />
            </div>
            <div className="flex flex-col w-5/6">
                <Header />
                <div className="p-4 bg-gray-100 h-full overflow-y-auto">
                    <h2 className="text-2xl font-bold mb-4">Statistics</h2>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <Bar data={salesTrendsData} options={Options} />
                    </div>
                </div>
            </div>
        </div>
    );
}*/

