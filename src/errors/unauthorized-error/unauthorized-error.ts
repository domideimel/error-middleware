import { BaseError } from '../base-error/base-error'

export class UnauthorizedError extends BaseError {
  constructor(message: any = 'Unauthorized.') {
    super(message, 401, 'Unauthorized')
  }
}
