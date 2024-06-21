export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'small'
export type NativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  nativeType?: NativeType
  autofocus?: boolean
  icon?: string;
  loading?: boolean;
}

export interface ButtonInstance {
  ref: HTMLButtonElement
}

// import { PropType } from 'vue'
// export const buttonProps = {
//   type: {
//     type: String as PropType<ButtonProps>
//   },
//   size: {
//     type: String as PropType<ButtonSize>
//   },
//   plain: {
//     type: Boolean
//   },
//   circle: {
//     type: Boolean
//   },
//   disabled: {
//     type: Boolean
//   }
// }
