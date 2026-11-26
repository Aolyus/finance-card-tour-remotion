import {useEffect, useState, type ReactNode} from 'react';
import {AbsoluteFill, Easing, cancelRender, continueRender, delayRender, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {BreakdownCard, CategoriesCard, IncomeCard, InvoiceCard, TransactionsCard} from './cards';
import {breakdownPoses, categoriesPoses, incomePoses, invoicePoses, poseAt, transactionPoses, type Pose} from './motion';

const useInter = () => {
  const [handle] = useState(() => delayRender('Loading bundled Inter font'));
  useEffect(() => {
    const font = new FontFace('Inter', `url("${staticFile('fonts/Inter-Variable.ttf')}")`, {weight: '100 900'});
    font.load().then(loaded => {
      document.fonts.add(loaded);
      continueRender(handle);
    }).catch(cancelRender);
  }, [handle]);
};

/** A shallow cylindrical surface, rendered as deterministic SVG strips.
 * The SVG symbol is vector artwork, never a frame from the reference video.
 */
const CurvedCard = ({id, width, height, poses, children}: {
  id: string; width: number; height: number; poses: Pose[]; children: ReactNode;
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  const p = poseAt(t, poses);
  const pieces = 72;
  return <div style={{position: 'absolute', left: p.x, top: p.y, width, height,
    transform: `translate(-50%, -50%) perspective(1800px) rotateX(${p.rx}deg) rotateY(${p.ry}deg) rotateZ(${p.rz}deg) scale(${p.scale}) scaleY(${p.sy})`,
    transformOrigin: '50% 50%', filter: 'drop-shadow(0 13px 22px rgba(0,22,13,.10))',
  }}>
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{overflow: 'visible'}}>
      <defs>
        <g id={`${id}-art`}>{children}</g>
        {Array.from({length: pieces}, (_, i) => <clipPath id={`${id}-clip-${i}`} key={i}>
          <rect x={i * width / pieces - .35} y={-30} width={width / pieces + .7} height={height + 60}/>
        </clipPath>)}
      </defs>
      {Array.from({length: pieces}, (_, i) => {
        const u = ((i + .5) / pieces - .5) * 2;
        const sy = 1 - .045 * u * u;
        return <g key={i} transform={`translate(0 ${height * (1 - sy) / 2}) scale(1 ${sy})`}>
          <g clipPath={`url(#${id}-clip-${i})`}><use href={`#${id}-art`}/></g>
        </g>;
      })}
    </svg>
  </div>;
};

const WordTitle = ({words, start, end, x, y, size, rotate = 0, lineBreak = false}: {
  words: string[]; start: number; end: number; x: number; y: number; size: number; rotate?: number; lineBreak?: boolean;
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  if (t < start || t >= end) return null;
  const out = interpolate(t, [end - .10, end], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return <div style={{position: 'absolute', left: x, top: y, transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
    color: '#d5fb76', fontFamily: 'Inter', fontSize: size, fontWeight: 800, letterSpacing: -2.1,
    lineHeight: 1.25, whiteSpace: 'nowrap', textAlign: 'center', opacity: out,
    textShadow: '0 0 5px #c0f46f66, 0 0 15px #b9ed5b77, 0 0 32px #b8f65344',
  }}>
    {words.map((word, i) => {
      const p = interpolate(t, [start + i * .12, start + .2 + i * .12], [0, 1], {
        extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(.18, .8, .25, 1),
      });
      return <span key={word} style={{display: lineBreak ? 'block' : 'inline-block', marginLeft: i && !lineBreak ? 12 : 0,
        opacity: p, transform: `translateY(${(1 - p) * 38}px)`, filter: `blur(${(1 - p) * 4}px)`}}>{word}</span>;
    })}
  </div>;
};

export const FinanceCardTour = () => {
  useInter();
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  const glowX = interpolate(t, [0, 1.5, 2.7, 3.7, 4.8, 6], [110, 210, 310, 320, 540, 545]);
  const glowY = interpolate(t, [0, 1.5, 2.7, 3.7, 4.8, 6], [160, 370, 260, 310, 540, 545]);
  return <AbsoluteFill style={{background: '#032c20', overflow: 'hidden'}}>
    <AbsoluteFill style={{background: `radial-gradient(ellipse 620px 560px at ${glowX}px ${glowY}px, #527d1d99 0%, transparent 100%), radial-gradient(ellipse 420px 670px at 770px 1080px, #55772155 0%, transparent 100%), radial-gradient(ellipse 370px 480px at -60px 1160px, #42651d66 0%, transparent 100%)`}}/>
    <CurvedCard id="breakdown" width={250} height={300} poses={breakdownPoses}><BreakdownCard/></CurvedCard>
    <CurvedCard id="categories" width={390} height={210} poses={categoriesPoses}><CategoriesCard/></CurvedCard>
    <CurvedCard id="income" width={660} height={360} poses={incomePoses}><IncomeCard/></CurvedCard>
    <CurvedCard id="invoice" width={620} height={590} poses={invoicePoses}><InvoiceCard/></CurvedCard>
    <CurvedCard id="transactions" width={640} height={520} poses={transactionPoses}><TransactionsCard/></CurvedCard>
    {t < 1.12 && <div style={{position: 'absolute',
      left: interpolate(t, [0, .5, 1.12], [185, 280, 600]),
      top: interpolate(t, [0, .5, 1.12], [425, 505, 280]),
      width: 83, height: 29, borderRadius: 20, background: '#d6f376', rotate: '24deg',
      opacity: interpolate(t, [0, .9, 1.12], [.96, .96, 0]),
      boxShadow: '0 0 9px #d6f376, 0 0 27px #c9ef5bbb, 0 0 45px #afd94255',
    }}/>}
    <WordTitle words={['Track', 'Income']} start={1.02} end={2.01} x={335} y={368} size={61} rotate={-3}/>
    <WordTitle words={['Manage', 'Invoices']} start={2.40} end={3.10} x={320} y={243} size={60} rotate={3}/>
    <WordTitle words={['Organize', 'Transactions']} start={3.40} end={4.16} x={321} y={288} size={58} rotate={-8}/>
    <WordTitle words={['Understand', 'Business']} start={4.43} end={6.15} x={352} y={627} size={55} lineBreak/>
  </AbsoluteFill>;
};
