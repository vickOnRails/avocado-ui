import React from 'react'
import { Text } from 'avocado-ui'

const TextComponent = () => {
  return (
    <div>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Exercitationem, adipisci laudantium! Aliquid autem velit fugiat, cumque
        eius necessitatibus ullam tempora quam pariatur nisi laboriosam,
        voluptate adipisci odit voluptas, explicabo sint!
      </Text>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Exercitationem, adipisci laudantium! Aliquid autem velit fugiat, cumque
        eius necessitatibus ullam tempora quam pariatur nisi laboriosam,
        voluptate adipisci odit voluptas, explicabo sint!
      </Text>
      <Text trim={20}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Exercitationem, adipisci laudantium! Aliquid autem velit fugiat, cumque
        eius necessitatibus ullam tempora quam pariatur nisi laboriosam,
        voluptate adipisci odit voluptas, explicabo sint!
      </Text>
    </div>
  )
}

export { TextComponent as Text }
