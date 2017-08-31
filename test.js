import test from 'ava'
import { handler as m } from './'

test('works', t => {
  t.true(true)
})

test('returns http 200', t => {
  m(null, null, (err, result) => {
    t.is(result.statusCode, 200)
  })
})

