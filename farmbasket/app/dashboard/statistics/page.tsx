import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, ResponsiveContainer } from "recharts";

export default function Statistics() {
    const number = 25;

    // Example reviews data
    const reviews = [
        { id: 1, product: "Tractor", rating: 4.5, comment: "Great quality and durable!" },
        { id: 2, product: "Plough", rating: 4.0, comment: "Works well but a bit heavy." },
        { id: 3, product: "Neem Oil", rating: 5.0, comment: "Highly effective and eco-friendly." },
        { id: 4, product: "Corn", rating: 3.8, comment: "Fresh but slightly overpriced." },
    ];

    // Sales trends data for the graph
    const salesTrendsData = [
        { month: "January", sales: 5000 },
        { month: "February", sales: 7000 },
        { month: "March", sales: 8000 },
        { month: "April", sales: 6000 },
        { month: "May", sales: 9000 },
        { month: "June", sales: 10000 },
    ];

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <div className="w-1/6">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex flex-col w-5/6">
                <Header />
                <div className="p-4 bg-gray-100 h-full overflow-y-auto">
                    <h2 className="text-2xl font-bold mb-4">Statistics</h2>

                    {/* Sales Number */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold">Total Sales:</h3>
                        <p className="text-gray-700 text-xl">${number}</p>
                    </div>

                    {/* Sales Trends Graph */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <h3 className="text-lg font-semibold mb-4">Sales Trends</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={salesTrendsData}>
                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Legend />
                                <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Customer Reviews */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                        <div className="space-y-4">
                            {reviews.map((review) => (
                                <div key={review.id} className="p-4 border rounded-lg bg-gray-50">
                                    <h4 className="font-semibold text-gray-800">{review.product}</h4>
                                    <p className="text-sm text-gray-600">Rating: {review.rating} / 5</p>
                                    <p className="text-gray-700">{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
