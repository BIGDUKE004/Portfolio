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

const LABELS = {
  ticket: "Abstract ticket card composition",
  workflow: "Diagram of the service request workflow stages",
  inventory: "Abstract inventory table composition",
  bank: "Diagram of banking API modules around a Spring Boot core",
  grid: "Abstract product grid composition",
  dash: "Abstract dashboard and task list composition",
};

const BANK = [["transfers", 90, 50], ["airtime", 310, 50], ["history", 60, 130], ["discounts", 340, 130], ["validation", 110, 215], ["audit log", 290, 215]];
const STAGES = ["pending", "accepted", "inspecting", "approval", "in progress", "completed"];

function Ticket() {
  return <>
    <Box x={120} y={20} w={160} h={220} fill={O} stroke={S} />
    <Box x={135} y={35} w={130} h={70} fill={G} stroke={S} />
    <Bar x={135} y={122} w={90} c={I} /><Bar x={135} y={136} w={60} /><Bar x={135} y={150} w={110} />
    <Box x={135} y={196} w={130} h={28} fill={C} /><Bar x={165} y={208} w={70} c={O} />
    <path d="M120 170h-8M288 170h-8" stroke={S} strokeDasharray="3 3" />
  </>;
}
function Bank() {
  return <>
    {BANK.map(([, x, y]) => <path key={x + "-" + y} d={`M200 130L${x} ${y}`} stroke={S} strokeDasharray="3 4" opacity=".6" className="flowline" />)}
    <Box x={150} y={108} w={100} h={44} fill={C} /><Label x={200} y={135} c={O}>Spring Boot</Label>
    {BANK.map(([t, x, y]) => <g key={t}><Box x={x - 42} y={y - 16} w={84} h={32} fill={O} stroke={S} /><Label x={x} y={y + 4}>{t}</Label></g>)}
  </>;
}
function Workflow() {
  return <>
    {STAGES.map((t, k) => {
      const x = 20 + (k % 3) * 124, y = 40 + Math.floor(k / 3) * 100;
      return <g key={t}>
        <Box x={x} y={y} w={108} h={56} fill={k === 2 ? G : O} stroke={k === 2 ? C : S} />
        <Label x={x + 54} y={y + 32} c={k === 2 ? I : S}>{t}</Label>
        {k % 3 < 2 && <path d={`M${x + 108} ${y + 28}h16`} stroke={S} strokeDasharray="3 3" className="flowline" />}
      </g>;
    })}
    <Box x={20} y={220} w={364} h={22} fill="none" stroke={S} /><Bar x={30} y={229} w={120} c={C} />
  </>;
}
function Dash() {
  return <>
    <Box x={30} y={24} w={160} h={100} fill={G} stroke={S} /><Bar x={44} y={40} w={70} c={I} /><Bar x={44} y={60} w={110} /><Bar x={44} y={76} w={90} /><Bar x={44} y={92} w={50} c={C} />
    <Box x={210} y={24} w={160} h={100} fill={O} stroke={S} /><Bar x={224} y={40} w={60} c={I} /><Bar x={224} y={60} w={100} /><Bar x={224} y={76} w={80} />
    {[0, 1, 2, 3].map((k) => <g key={k}>
      <Box x={30} y={146 + k * 26} w={340} h={20} fill="none" stroke={S} /><Box x={40} y={151 + k * 26} w={10} h={10} fill={k < 2 ? C : "none"} stroke={S} />
      <Bar x={62} y={154 + k * 26} w={120 + k * 20} c={k < 2 ? undefined : I} />
    </g>)}
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

export default function ProjectViz({ kind }) {
  const Art = { ticket: Ticket, workflow: Workflow, inventory: Inventory, bank: Bank, grid: Grid, dash: Dash }[kind];
  return (
    <svg viewBox="0 0 400 260" role="img" aria-label={LABELS[kind]}>
      <Art />
    </svg>
  );
}
