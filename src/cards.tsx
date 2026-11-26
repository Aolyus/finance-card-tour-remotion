import type {ReactNode} from 'react';

export const ink = '#17201b';
const muted = '#949b8c';
const paper = '#fffffb';
const lime = '#89d718';

export const CardBody = ({width, height, children}: {width: number; height: number; children: ReactNode}) => (
  <g fill={ink} fontFamily="Inter" fontSize={18}>
    <rect width={width} height={height} rx={28} fill={paper} />
    {children}
  </g>
);

export const IncomeCard = () => (
  <CardBody width={660} height={360}>
    <text x={28} y={48} fontWeight={700} fontSize={20}>Top Income Sources</text>
    <text x={626} y={48} textAnchor="end" fontSize={15} fill="#a8b48a">View All ›</text>
    {[
      {name: 'Acme Corp', amount: '+$50,268', progress: 1},
      {name: 'Gamma LLC', amount: '+$41,631', progress: 0.825},
      {name: 'Beta Studio', amount: '+$34,572', progress: 0.67},
    ].map((row, i) => (
      <g key={row.name} transform={`translate(28 ${99 + i * 77})`}>
        <text y={0}>{row.name}</text>
        <text x={604} y={0} textAnchor="end" fontSize={20}>{row.amount}</text>
        <rect y={15} width={604} height={7} rx={3.5} fill="#edf0e7" />
        <rect y={15} width={604 * row.progress} height={7} rx={3.5} fill={lime} />
        <text y={38} fontSize={10} fill={muted}>Total received</text>
      </g>
    ))}
  </CardBody>
);

export const InvoiceCard = () => (
  <CardBody width={620} height={590}>
    <text x={24} y={45} fontSize={24} fontWeight={750}>Rivera Creative</text>
    <text x={596} y={45} fontWeight={700} fontSize={22} textAnchor="end">INVOICE</text>
    <text x={596} y={70} fontSize={12} fill="#9da38b" textAnchor="end">INV-2025-001 • Pending</text>
    <rect x={22} y={101} width={576} height={145} fill="#f7f8f5" />
    <g fontSize={15}>
      <text x={37} y={137}>Bill to</text>
      <text x={37} y={163} fontWeight={700}>Acme Corp</text>
      <text x={37} y={189}>New York, NY</text>
      <text x={37} y={215}>contact@acme.com</text>
      <text x={320} y={137}>From</text>
      <text x={320} y={163} fontWeight={700}>Alex Rivera</text>
      <text x={320} y={189}>San Francisco, CA</text>
      <text x={320} y={215}>alex@rivera.co</text>
      <text x={24} y={288}>Issue date</text>
      <text x={24} y={315}>2025-06-01</text>
      <text x={222} y={288}>Due date</text>
      <text x={222} y={315}>2025-06-30</text>
    </g>
    <g stroke="#ecefe7" strokeWidth={1}>
      <path d="M24 351H596 M24 393H596 M24 458H596" />
    </g>
    <g fill={muted} fontSize={14}>
      <text x={24} y={379}>Description</text>
      <text x={355} y={379}>Qty</text>
      <text x={442} y={379}>Rate</text>
      <text x={584} y={379} textAnchor="end">Amount</text>
    </g>
    <g fontSize={16}>
      <text x={24} y={431}>Brand identity design</text>
      <text x={301} y={431}>1</text>
      <text x={469} y={431} textAnchor="end">$3,500</text>
      <text x={596} y={431} textAnchor="end">$3,500</text>
    </g>
    <g fontSize={14}>
      <text x={494} y={493} textAnchor="end">Subtotal</text>
      <text x={596} y={493} textAnchor="end">$3,500</text>
      <text x={494} y={520} textAnchor="end">Tax (0%)</text>
      <text x={596} y={520} textAnchor="end">$0</text>
    </g>
    <text x={494} y={556} textAnchor="end" fontSize={20} fontWeight={750}>Total</text>
    <text x={596} y={556} textAnchor="end" fontSize={20} fontWeight={750}>$3,500</text>
  </CardBody>
);

export const TransactionsCard = () => (
  <CardBody width={640} height={520}>
    <text x={28} y={48} fontWeight={700} fontSize={20}>Recent Transactions</text>
    <text x={610} y={48} textAnchor="end" fontSize={15} fill="#a8b48a">View All ›</text>
    {[
      ['Gamma LLC', 'Technology', '+$4,249'],
      ['Tools', 'Subscriptions', '−$143'],
      ['Beta Studio', 'Freelancing', '+$1,956'],
      ['Marketing', 'Advertising', '−$381'],
      ['Acme Corp', 'Consulting', '+$4,757'],
    ].map(([name, category, amount], i) => (
      <g key={name} transform={`translate(28 ${104 + i * 83})`}>
        <rect y={-10} width={35} height={38} rx={8} fill={i === 3 ? '#fff0f2' : '#f7f9f2'} />
        {i === 3 ? <path d="M18 0V18M9 9H27M13 4L23 14M13 14L23 4" stroke="#bc8193" strokeWidth={1.3} /> :
          <g stroke="#a2ad8a" fill="none"><circle cx={17.5} cy={9} r={6}/><circle cx={17.5} cy={9} r={2}/><path d="M17.5 0V3M17.5 15V18M9 9H12M23 9H26"/></g>}
        <text x={54} y={4} fontSize={20}>{name}</text>
        <text x={54} y={28} fill={muted} fontSize={12}>{category}</text>
        <text x={582} y={6} textAnchor="end" fontSize={20} fill={amount.startsWith('−') ? '#a66f81' : ink}>{amount}</text>
        <path d="M54 52H582" stroke="#f7f8f3" strokeWidth={1} />
      </g>
    ))}
  </CardBody>
);

export const BreakdownCard = () => (
  <CardBody width={250} height={300}>
    <text x={20} y={30} fontSize={13}>Expense Breakdown</text>
    <circle cx={125} cy={120} r={55} fill="none" stroke="#edf0e8" strokeWidth={13} />
    <g fill="none" strokeWidth={13} transform="rotate(-90 125 120)">
      <circle cx={125} cy={120} r={55} stroke="#ffac36" strokeDasharray="115 346" />
      <circle cx={125} cy={120} r={55} stroke="#8ace24" strokeDasharray="125 346" strokeDashoffset={-115} />
      <circle cx={125} cy={120} r={55} stroke="#4678ef" strokeDasharray="106 346" strokeDashoffset={-240} />
    </g>
    <text x={125} y={113} textAnchor="middle" fontSize={10} fill={muted}>Total expenses</text>
    <text x={125} y={133} textAnchor="middle" fontSize={18} fontWeight={750}>$13,271</text>
    {[
      ['Marketing', '$4,920', '#ffac36'], ['Tools', '$4,363', '#8ace24'], ['Software', '$3,988', '#4678ef'],
    ].map(([label, value, color], i) => <g key={label} transform={`translate(20 ${226 + i * 23})`}>
      <rect width={20} height={9} rx={3} fill={color} y={-9}/><text x={27} fontSize={11}>{label}</text>
      <text x={210} textAnchor="end" fontSize={11}>{value}</text>
    </g>)}
  </CardBody>
);

export const CategoriesCard = () => (
  <CardBody width={390} height={210}>
    <text x={25} y={45} fontSize={17} fill={muted} letterSpacing={1.5}>EXPENSE CATEGORIES</text>
    <rect x={24} y={78} width={342} height={66} rx={12} fill="#477cf2" />
    <path d="M195 78H291V144H195Z" fill="#9bd829" />
    <path d="M291 78H354Q366 78 366 90V132Q366 144 354 144H291Z" fill="#ffb53b" />
    <circle cx={31} cy={174} r={9} fill="#1991e4"/>
    <text x={48} y={179} fontSize={13} fill="#6b7468">Software 50%</text>
    <circle cx={175} cy={174} r={8} fill="#9bd829"/>
    <text x={190} y={179} fontSize={13} fill="#6b7468">Tools 28%</text>
  </CardBody>
);
