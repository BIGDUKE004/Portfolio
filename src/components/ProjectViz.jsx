const S = "#96978F", C = "#BD805D", G = "#252927", O = "#141615", I = "#F3F0E8";

const Box = ({ x, y, w, h, fill = "none", stroke = "none", ...rest }) => (
  <rect x={x} y={y} width={w} height={h} fill={fill} stroke={stroke} strokeWidth="1" rx="2" {...rest} />
);
const Bar = ({ x, y, w, c }) => (
  <rect x={x} y={y} width={w} height="3" fill={c || S} opacity={c ? 1 : 0.5} />
);
const Label = ({ x, y, c = S, children }) => (
  <text x={x} y={y} fill={c} fontSize="11" fontFamily="monospace" textAnchor="middle">{children}</text>
);

const LABELS = [
  "Abstract ticket card composition",
  "Diagram of backend modules around a FastAPI core",
  "Abstract inventory table composition",
  "Abstract product grid composition",
];

const MODULES = [["auth", 90, 50], ["events", 310, 50], ["bookings", 60, 130], ["payments", 340, 130], ["tickets", 110, 215], ["ticket types", 290, 215]];

function Ticket() {
  return <>
    <Box x={120} y={20} w={160} h={220} fill={O} stroke={S} />
    <Box x={135} y={35} w={130} h={70} fill={G} stroke={S} />
    <Bar x={135} y={122} w={90} c={I} /><Bar x={135} y={136} w={60} /><Bar x={135} y={150} w={110} />
    <Box x={135} y={196} w={130} h={28} fill={C} /><Bar x={165} y={208} w={70} c={O} />
    <path d="M120 170h-8M288 170h-8" stroke={S} strokeDasharray="3 3" />
  </>;
}
function Api() {
  return <>
    {MODULES.map(([, x, y]) => <path key={x + "-" + y} d={`M200 130L${x} ${y}`} stroke={S} strokeDasharray="3 4" opacity=".6" className="flowline" />)}
    <Box x={160} y={108} w={80} h={44} fill={C} /><Label x={200} y={135} c={O}>FastAPI</Label>
    {MODULES.map(([t, x, y]) => <g key={t}><Box x={x - 42} y={y - 16} w={84} h={32} fill={O} stroke={S} /><Label x={x} y={y + 4}>{t}</Label></g>)}
  </>;
}
function Inventory() {
  return <>
    <Box x={30} y={24} w={340} h={28} fill={O} stroke={S} /><Bar x={44} y={36} w={60} c={C} />
    {[0, 1, 2, 3, 4].map((k) => {
      const y = 70 + k * 34;
      return <g key={k}>
        <Box x={30} y={y} w={340} h={28} fill={k === 1 ? G : "none"} stroke={S} />
        <Bar x={44} y={y + 12} w={90 + k * 10} c={I} /><Bar x={220} y={y + 12} w={40} />
        <Box x={290} y={y + 8} w={60 * (1 - k * 0.14)} h={12} fill={k === 1 ? C : S} className="grow" style={{ "--i": k }} />
      </g>;
    })}
  </>;
}
function Grid() {
  return <>
    <Box x={30} y={20} w={340} h={26} fill={O} stroke={S} /><Box x={40} y={29} w={60} h={8} fill={C} />
    {[0, 1, 2, 3, 4, 5].map((k) => {
      const x = 30 + (k % 3) * 116, y = 64 + Math.floor(k / 3) * 100;
      return <g key={k} className="pop" style={{ "--i": k }}>
        <Box x={x} y={y} w={108} h={64} fill={G} stroke={S} />
        <Bar x={x} y={y + 74} w={70} c={I} /><Bar x={x} y={y + 86} w={40} c={k === 0 ? C : undefined} />
      </g>;
    })}
  </>;
}

export default function ProjectViz({ index }) {
  const Art = [Ticket, Api, Inventory, Grid][index];
  return (
    <svg viewBox="0 0 400 260" role="img" aria-label={LABELS[index]}>
      <Art />
    </svg>
  );
}
