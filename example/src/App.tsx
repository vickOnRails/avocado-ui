import React, { useState, useRef } from 'react'
import {
  theme,
  CSSReset,
  Modal,
  Button,
  ModalTitle,
  ModalOverlay,
  ModalContent,
  Flex
} from 'avocado-ui'
import { ThemeProvider } from '@emotion/react'

const App = () => {
  const [modalOpen, setMoalOpen] = useState(false)
  const initialBtnRef = useRef(null)
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
        aspernatur voluptates veniam odit quam commodi amet tempora sunt?
        Blanditiis sapiente eos reiciendis mollitia incidunt eaque impedit,
        architecto illo dolores beatae.
      </p>
      <Button size='sm' onClick={() => setMoalOpen(true)}>
        Hey
      </Button>
      <Modal
        open={modalOpen}
        onClose={() => <p>hey</p>}
        initialFocus={initialBtnRef}
      >
        <ModalOverlay>
          <ModalContent>
            <ModalTitle as='h5'>Children</ModalTitle>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              veritatis provident esse recusandae veniam harum tenetur, placeat
              ea similique nemo et illo ut odit repellendus animi sapiente
              architecto doloremque quidem.
            </p>
            <Flex gap={5} justifyContent='flex-start'>
              <Button size='sm'>One Thing</Button>

              <Button
                size='sm'
                onClick={() => setMoalOpen(false)}
                variant='error'
                ref={initialBtnRef}
                buttonType='ghost'
              >
                Close
              </Button>
            </Flex>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </ThemeProvider>
  )
}

export default App
