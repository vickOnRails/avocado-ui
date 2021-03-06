import React, { FC, InputHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css, useTheme } from '@emotion/react'
import { ThemeProps } from '../theme'
import { getBorderRadius, getInputIconSize } from '../../utils/input'
import InputIcon from './input-icon'
import { AvocadoThemeProps, Shape } from '../../utils/types'

// const { inputTheme } = theme.components

// Something about this input component. We really want this component to only be used for inputs
// Any other component apart from an input (checkbox, radiobutton, etc) should not even be allowed
// FIXME: Disable passing in of other type values (radio, checkbox, etc)
const Input: FC<InputProps> = ({
  prefixIcon,
  suffixIcon,
  borderRadius,
  inputSize,
  labelText,
  variant,
  fullWidth,
  ...props
}) => {
  const avocadoTheme = useTheme() as ThemeProps

  // return vanilla input for unstyled variant
  if (variant === 'unstyled') return <input {...props} />

  const _className = props.className
    ? `${props.className} avocado-input__control avocado-input__control--${variant}`
    : `avocado-input__control avocado-input__control--${variant}`

  // wrap the input in a label if labelText is provided
  if (labelText)
    return (
      <StyledInput
        className='avocado-input'
        variant={variant}
        theme={avocadoTheme}
        inputSize={inputSize}
        borderRadius={borderRadius}
        fullWidth={fullWidth}
        prefixIcon={prefixIcon}
        suffixIcon={suffixIcon}
      >
        <label>
          <span className='avocado-input__label-text'>{labelText}</span>
          <span className='avocado-input__control-container'>
            {prefixIcon && <InputIcon className='left'>{prefixIcon}</InputIcon>}
            <input {...props} className={_className} />
            {suffixIcon && (
              <InputIcon className='right'>{suffixIcon}</InputIcon>
            )}
          </span>
        </label>
      </StyledInput>
    )

  return (
    <StyledInput
      className='avocado-input'
      variant={variant}
      theme={avocadoTheme}
      inputSize={inputSize}
      borderRadius={borderRadius}
      fullWidth={fullWidth}
      prefixIcon={prefixIcon}
      suffixIcon={suffixIcon}
    >
      {prefixIcon && <InputIcon className='left'>{prefixIcon}</InputIcon>}
      <input {...props} className={_className} />
      {suffixIcon && <InputIcon className='right'>{suffixIcon}</InputIcon>}
    </StyledInput>
  )
}

export type Variant = 'fill' | 'outline' | 'unstyled'
export type BorderRadius = 'curve' | 'square' | 'round'

type InputSize = 'sm' | 'md' | 'lg'

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    AvocadoThemeProps {
  /**
   * set variant of input. Can be "filled", "unstyled", "outline"
   */
  variant?: Variant
  /**
   * set width of input. Input fills the entire block when set to `true`
   */
  fullWidth?: boolean
  /**
   * input is marked as required when set to `true`
   */
  required?: boolean
  /**
   * renders a react node to the right of the input element
   */
  suffixIcon?: JSX.Element
  /**
   * renders a react node to the left of the input element
   */
  prefixIcon?: JSX.Element
  /**
   * setting to `true` makes the input inactive
   */
  disabled?: boolean
  /**
   * set the size of the input. Can be "sm", "md", "lg"
   */
  inputSize?: InputSize

  // FIXME: Change to shape prop
  borderRadius?: Shape

  /**
   * labelText - text to show at the top of Input
   */
  labelText?: string
}

const StyledBaseInput = ({
  disabled,
  inputSize,
  borderRadius,
  prefixIcon,
  fullWidth,
  theme,
  suffixIcon
}: InputProps) => css`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: ${fullWidth ? '100%' : 'auto'};

  .avocado-input__label-text {
    display: block;
    margin-bottom: 0.3em;
  }

  .avocado-input__control-container {
    display: flex;
    align-items: center;
    position: relative;
  }

  .avocado-input__control {
    border: 1px solid ${theme?.colors.gray[5]};
    font: inherit;
    // FIXME: switch this up for internal fontsize later
    font-size: ${inputSize === 'sm' ? '87%' : `inherit`};
    padding: ${inputSize &&
      theme?.components.inputTheme.size[inputSize].verticalPadding}
      ${inputSize &&
      theme?.components.inputTheme.size[inputSize].horizontalPadding};

    padding-left: ${prefixIcon &&
    (inputSize === 'sm'
      ? theme?.spacing['3x-large']
      : theme?.spacing['3.3x-large'])};

    padding-right: ${suffixIcon &&
    (inputSize === 'sm'
      ? theme?.spacing['3x-large']
      : theme?.spacing['3.3x-large'])};

    transition: border-color, background;
    transition-duration: 0.25s;
    border-radius: ${borderRadius && getBorderRadius(borderRadius)};
    width: ${fullWidth ? '100%' : 'auto'};

    transition-timing-function: ease-out;

    :hover {
      // border: ${!disabled && `1px solid ${theme?.colors.blue[500]}`};
      border: ${!disabled &&
      `1px solid ${theme?.components.inputTheme.outlineColor}`};
    }

    :focus {
      outline: none;
      box-shadow: 0 0 0 2px ${theme?.components.inputTheme.focusColor};
    }

    :disabled {
      cursor: not-allowed;
      background: ${theme?.colors.gray[3]};
      border: none;
      user-select: none;
    }
  }

  .avocado-input__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;

    width: ${inputSize && getInputIconSize(inputSize)};
    height: ${inputSize && getInputIconSize(inputSize)};

    pointer-events: none;
    color: ${theme?.colors.gray[6]};
    > * {
      margin: auto;
    }
    font-size: 0.875em;
  }
  .avocado-input__icon.left {
    left: 0;
    padding-left: 0.5em;
  }
  .avocado-input__icon.right {
    right: 0;
    padding-right: 0.5em;
  }

  svg {
    height: 100%;
    width: 100%;
    margin: auto;
  }
`

const StyledFilledInput = ({ variant, disabled, theme }: InputProps) =>
  variant === 'fill' &&
  css`
    .avocado-input__control {
      border: none;
      background: ${theme?.colors.gray[4]};
      border: 1px solid transparent;

      &:hover {
        border: none;
        border: ${!disabled && `1px solid ${theme?.colors.gray[5]}`};
      }

      &:active,
      &:focus {
        background: ${!disabled && `inherit`};
      }
    }
  `

const StyledOutlineInput = ({ variant }: InputProps) =>
  variant === 'outline' && css``

const StyledInput = styled.span<InputProps>`
  ${StyledBaseInput};
  ${StyledFilledInput};
  ${StyledOutlineInput};
`

Input.defaultProps = {
  variant: 'outline',
  inputSize: 'md',
  borderRadius: 'round'
}

Input.displayName = 'Input'
export { Input }
