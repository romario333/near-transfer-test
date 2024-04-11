// Find all our documentation at https://docs.near.org
import { NearBindgen, NearPromise, call } from 'near-sdk-js';

@NearBindgen({})
class TransferTest {
  @call({ payableFunction: true })
  deposit() {    
  }

  @call({ })
  withdraw({receiverAccountId}: {receiverAccountId: string}) {
    const amount = BigInt(Math.pow(10, 24));

    let promise = NearPromise.new(receiverAccountId).transfer(amount);

    // this doesn't work:
    promise.then(NearPromise.new(receiverAccountId).transfer(amount));
    
    // this works: 
    // promise = promise.then(NearPromise.new(receiverAccountId).transfer(amount));

    return promise;
  }
}