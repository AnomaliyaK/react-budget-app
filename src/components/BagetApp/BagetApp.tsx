import {
  BagetCard,
  CurrencySelect,
  RemainingCard,
  SpentCard,
  Title,
} from 'components';
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
