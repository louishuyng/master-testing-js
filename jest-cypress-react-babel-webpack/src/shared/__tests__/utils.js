import {getFormattedValue} from '../utils'

test('formats the value', () => {
  expect(getFormattedValue('123.0')).toMatchSnapshot()
  expect(getFormattedValue('123.0')).toMatchInlineSnapshot(`"123.0"`)
})
