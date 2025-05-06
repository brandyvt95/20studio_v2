// typography.ts
import type { PropType } from 'vue';

export type TypographyColor =
  | 'blue40'
  | 'blue50'
  | 'blue60'
  | 'sliver'
  | 'gray'
  | 'graphite'
  | 'hightBlue'
  | 'mediumDark'
  | 'mediumWhite'
  | 'inherit'
  | 'white'
  | 'black'
  | 'greyBlue'
  | 'lightGrey'
  | 'mediumGrey'
  | 'darkGrey'
  | 'dark';



export const propsTypoParagraph = {
  tag: {
    type: String as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'h5'>,
    default: 'h1',
  },
  font: {
    type: String as PropType<
      | 'BD-Regular'
      | 'BD-Medium'
      | 'BD-Bold'
      | 'BS-Regular'
      | 'BS-Medium'
      | 'BS-Bold'
    >,
    default: '',
  },
  className: {
    type: String,
    default: '',
  },
}