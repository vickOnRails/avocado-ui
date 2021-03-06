# Avatar

Shows a clickable element to the user.

## Quick use

```jsx
import { Avatar } from 'avocado-ui'
import AvatarImg from './image'

function App() {
  return <Avatar src={AvatarImg} name='Mathew EK' alt='Mathew EK' />
}
```

## Props

| property | description                                                                           | type                            | default |
| -------- | ------------------------------------------------------------------------------------- | ------------------------------- | ------- |
| size     | size of button                                                                        | `xs`, `sm`, `md`,`lg`, `number` | `md`    |
| shape    | shape of button                                                                       | `round`, `square`,`curve`       | `round` |
| alt      | Text to read out to screen readers. If not available, the value of the `name` is used | `string`                        |         |
| name     | Name to show if image is not available                                                | `string`                        |         |
| src      | Source for avatar image                                                               | `string`                        |         |
| color    | color of avatar background when `src` is not specified                                | `string`                        |         |
| icon     | icon to show when the `src` prop is not provided                                      | `React.ReactNode`               |         |

## Todo

- [x] size
- [x] shape
- [x] alt
- [x] name
- [x] color
- [x] src
- [x] icon
- [x] write tests

## Tests suites

- [x] renders correctly
- [x] renders correct size
- [x] renders initials correctly
- [x] renders an image when `src` is valid
- [x] renders an icon when `src` is not provided
- [x] renders `name` as value of `alt` when `alt` value is not provided
