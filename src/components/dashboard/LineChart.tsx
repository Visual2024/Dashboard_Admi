'use client';
import { ResponsiveLine, LineSvgProps, Serie } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "@/utils/theme";
import { mockLineData as data } from "@/data/mockData";

interface LineChartProps {
  isDashboard?: boolean;
}

const LineChart = ({ isDashboard = false }: LineChartProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const chartProps: LineSvgProps = {
    data: data as Serie[],
    margin: { top: 50, right: 110, bottom: 50, left: 60 },
    xScale: { type: 'point' },
    yScale: { type: 'linear', min: 'auto', max: 'auto', stacked: true },
    axisBottom: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: isDashboard ? undefined : 'transportation',
      legendOffset: 36
    },
    axisLeft: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: isDashboard ? undefined : 'count',
      legendOffset: -40
    },
    theme: {
      axis: {
        domain: { line: { stroke: colors.grey[100] } },
        legend: { text: { fill: colors.grey[100] } },
        ticks: {
          line: { stroke: colors.grey[100], strokeWidth: 1 },
          text: { fill: colors.grey[100] }
        }
      },
      legends: { text: { fill: colors.grey[100] } }
    }
  };

  return <ResponsiveLine {...chartProps} />;
};

export default LineChart;
