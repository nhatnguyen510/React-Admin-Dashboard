import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ currentColor, id, type, height, width, data, color }) => {
  return (
    <SparklineComponent
      id={id}
      type={type}
      lineWidth={1}
      valueType="Numeric"
      height={height}
      width={width}
      dataSource={data}
      fill={color}
      border={{ color: currentColor, width: 2 }}
      xName="x"
      yName="yval"
      tooltipSettings={{
        visible: true,
        format: "${x}: data ${yval}",
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
