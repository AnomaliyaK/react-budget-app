import { BagetCard } from '../BagetCard/BagetCard';
import { CurrencySelect } from '../CurrencySelect/CurrencySelect';
import { RemainingCard } from '../RemainingCard/RemainingCard';
import { SpentCard } from '../SpentCard/SpentCard';
import { Title } from '../Title/Title';
import { StyledBagetApp, StyledHandlerBagetApp } from './styles';

export const BagetApp = () => {
  return (
    <StyledBagetApp>
      <StyledHandlerBagetApp>
        <Title title="Baget App" />
        <CurrencySelect />
      </StyledHandlerBagetApp>
      <BagetCard />
      <RemainingCard />
      <SpentCard />
    </StyledBagetApp>
  );
};
