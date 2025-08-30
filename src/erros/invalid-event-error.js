export default class InvalidEventError extends Error {

  constructor(event_type) {
    super(`Invalid event type: ${event_type}`)
    this.name = 'InvalidEventError'
  }
  
}
