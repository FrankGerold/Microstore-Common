export enum OrderStatus {
  // When the order is creaded but ticket hasn't been reserved yet
  Created = 'created',

  // When the ticket is already reserved, or the user has cancelled
  // the order, or order expired before payment.
  Cancelled = 'cancelled',

  // THe order has successfully reserved the ticket
  AwaitingPayment = 'awaiting:payment',

  // The order has reserved the ticket, and user provided payment
  // successfully.
  Complete = 'complete'
};
