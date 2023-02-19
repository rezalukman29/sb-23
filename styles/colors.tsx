/* eslint-disable prettier/prettier */
const SUN_FLOWER = '#f1c40f';
const ASBESTOS = '#7f8c8d';
const MIDNIGHT_BLUE = '#2c3e50';
const EMERALD = '#2ecc71';
const ALIZARIN = '#e74c3c';
const CLOUDS = '#fafafa';
const SILVER = '#bdc3c7';
const NERO = '#4a4a4a';
const ROYAL_BLUE = '#246EE9';
const SEA_BLUE = '#006994';
const DARK_ONYX = '#080D0E';
const BRIGHT_BLUE = '#0096FF';
const BEST_BLUE = '#2d65a4';
const BLUE_SECONDARY = '#A5DEF2';
const ORANGE = '#F7A400';
const ORANGE_JUICE = '#fd7702';
const ORANGE_DARK = '#ff5003';
const PUMPKIN = '#F37413';
const DISABLED = '#d3d3d3';
const LIGHT_ORANGE = '#ffd8a7';
const LIGHT_GREY = '#C8C8C8';
const LIGHT_BLACK = '#353535';
const DARK_GREY = '#757575';
const DANGER = '#FF6B6B';
const WHITE = '#FFFFFF';
const PLACEHOLDER = '#F5F5F5';
const RED = '#FE2C2C';

const common = {
  SUCCESS: EMERALD,
  ERROR: DANGER,
  TRANS_WHITE: '#FFFFFF50',
  TRANS_BLACK: 'rgba(0,0,0,0.45)',
  LIGHT: WHITE,
  DANGER: RED,
  PLACEHOLDER: PLACEHOLDER,
  DARK: '#323232',
  B6: '#969696',
  B7: '#6B6B6B',
  CARD_BACKGROUND1: '#F4F4F4',
  CARD_BACKGROUND2: '#F9F9F9',
  TEXT_QTY: '#969696',
  B1: '#232323',
};

const light = {
  ...common,
  BACKGROUND1: '#FFFFFF',
  BACKGROUND2: '#FDFDFD',
  TEXT_PRIMARY: LIGHT_BLACK,
  TEXT_SECONDARY: LIGHT_GREY,
  TEXT_LABEL: DARK_GREY,
  PRIMARY: '#00A793',
  SECONDARY: '#FF5C00',
  TEXT_BUTTON: CLOUDS,
  DISABLED: DISABLED,
  ICON: '#374957',
};

const dark = {
  ...common,
  BACKGROUND1: '#171F24',
  BACKGROUND2: '#E5E5E5',
  TEXT_PRIMARY: CLOUDS,
  TEXT_SECONDARY: SILVER,
  TEXT_LABEL: SILVER,
  PRIMARY: PUMPKIN,
  SECONDARY: LIGHT_ORANGE,
  TEXT_BUTTON: DARK_ONYX,
  DISABLED: DISABLED,
  ICON: '#374957',
};

export const colors = {light, dark};
