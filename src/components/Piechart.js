import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'

const Piechart = ({ score }) => {
    return (
        <div>
            <PieChart
                animate
                animationDuration={500}
                animationEasing="ease-out"
                center={[50, 50]}
                data={[
                {
                color: "#2c68e8",
                title: "Positive",
                value: score,
                },
                {
                color: "#bd4242",
                title: "Negative",
                value: 100 - score,
                }
                ]}
                label={({ dataEntry }) => String(dataEntry.value).concat('%')}
                labelStyle={(index) => ({
                fontSize: '5px',
                fontFamily: 'sans-serif',
                })}
                labelPosition={50}
                lengthAngle={360}
                paddingAngle={0}
                radius={50}
                startAngle={0}
                viewBoxSize={[100, 100]}
            />
        </div>
    )
}

export default Piechart
