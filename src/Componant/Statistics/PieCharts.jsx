import { PieChart, Pie,  Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import PropTypes from 'prop-types';


const PieCharts = ({ totalDonation, yourDonation }) => {

    const data = [
        { name: 'Total Donation ', value: totalDonation },
        { name: 'Your Donation ', value: yourDonation }
    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const { name, value } = payload[0];
            return (
                <div className="bg-blue-100 shadow-md p-2  rounded-md">
                    <p>{name}: <span className='font-bold text-md'>$</span>{value} </p>
                </div>
            );
        }
        return null;
    };


    return (
       
        <div className="w-64 md:w-96 h-96"> {/* Adjust width and height as needed */}
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value" // DataKey prop added here
                >
                    {data.map((name, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} /> 
                <Legend   />
            </PieChart>
        </ResponsiveContainer>
    </div>
      
    );
};

PieCharts.propTypes = {
    totalDonation: PropTypes.number,
    yourDonation: PropTypes.number,
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.number
        })
    )
}

export default PieCharts;