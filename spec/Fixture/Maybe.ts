import { Maybe, throwIfNothing } from "../../../core/Data/Maybe"

export function _fromJust<T>(m: Maybe<T>): T {
  return throwIfNothing(m, `${m} should not be Nothing`)
}
