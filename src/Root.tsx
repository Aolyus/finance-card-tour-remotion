import {Composition} from 'remotion';
import {FinanceCardTour} from './FinanceCardTour';

export const RemotionRoot = () => (
  <Composition id="FinanceCardTour" component={FinanceCardTour}
    durationInFrames={360} fps={60} width={720} height={1280} />
);
