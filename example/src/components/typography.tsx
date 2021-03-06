import React from 'react'
import { Heading } from 'avocado-ui'

const Typography = () => {
  return (
    <>
      <Heading level='h1' size='7xl' trim={3} align='center'>
        Heading 1
      </Heading>
      <Heading level='h2' align='right'>
        Heading 2
      </Heading>
      <Heading level='h3' trim={1}>
        Heading 3
      </Heading>
      <Heading level='h4' align='center'>
        Heading 4
      </Heading>
      <Heading level='h5'>Heading 5</Heading>
      <Heading level='h6' size='7xl'>
        Heading 6
      </Heading>
    </>
  )
}

export { Typography }
