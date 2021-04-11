import React, { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { theme } from '../theme'

export const Heading: FC<HeadingProps> = ({ children, ...props }) => {
  const _className = props.className
    ? `avocado-heading ${props.className}`
    : `avocado-heading`

  switch (props.level) {
    case 'h1':
      return (
        <StyledH1 {...props} className={_className}>
          {children}
        </StyledH1>
      )
    case 'h2':
      return (
        <StyledH2 {...props} className={_className}>
          {children}
        </StyledH2>
      )
    case 'h3':
      return (
        <StyledH3 {...props} className={_className}>
          {children}
        </StyledH3>
      )
    case 'h4':
      return (
        <StyledH4 {...props} className={_className}>
          {children}
        </StyledH4>
      )
    case 'h5':
      return (
        <StyledH5 {...props} className={_className}>
          {children}
        </StyledH5>
      )
    case 'h6':
      return (
        <StyledH6 {...props} className={_className}>
          {children}
        </StyledH6>
      )
    default:
      throw new Error('Please pass a heading level')
  }
}

const StyledHeadingBase = css`
  margin-top: 0;
  margin-bottom: 0.5em;
  line-height: 1;
`

const StyledH1 = styled.h1`
  font-size: ${theme.typography['6xl']};
  ${StyledHeadingBase};
`
const StyledH2 = styled.h2`
  font-size: ${theme.typography['5xl']};
  ${StyledHeadingBase};
`
const StyledH3 = styled.h3`
  font-size: ${theme.typography['4xl']};
  ${StyledHeadingBase};
`
const StyledH4 = styled.h4`
  font-size: ${theme.typography['3xl']};
  ${StyledHeadingBase};
`
const StyledH5 = styled.h5`
  font-size: ${theme.typography['2xl']};
  ${StyledHeadingBase};
`
const StyledH6 = styled.h6`
  font-size: ${theme.typography.xl};
  ${StyledHeadingBase};
`

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

Heading.displayName = 'Heading'