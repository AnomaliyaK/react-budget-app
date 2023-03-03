import { Currency } from '../config/currency';

export interface CurrencyValue {
  value: Currency;
  label: keyof typeof Currency;
}
