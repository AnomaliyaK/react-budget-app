import { StylesConfig } from 'react-select';
import { CurrencyValue } from '../../types/types';

export const selectStyles: StylesConfig<CurrencyValue> = {
  control: (baseStyles) => ({
    ...baseStyles,
    height: '30px',
    borderRadius: '5px',
    borderWidth: '1px',
    borderColor: '#EEEEEE',
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    textAlign: 'center',
    fontSize: '12px',
    color: '#000000',
    backgroundColor: '#FFFFFF',
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    // display: 'none',
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    // border: 'none',
    boxShadow: 'none',
  }),
  option: (baseStyles) => ({
    ...baseStyles,
    display: 'grid',
    placeItems: 'center',
  }),
};
