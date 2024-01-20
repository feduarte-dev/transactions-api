import { Transaction } from "src/types/Transaction"
const existingTransaction: Transaction = {
    id: 1,
    name: 'mock-transaction',
    price: 99,
    type: 'Saque' ,
    userId: 1,
  }

const transactionBody = {
    name: 'teste',
    price: 10,
    type: 'Saque',
    userId: 1
}

export default {
    existingTransaction,
    transactionBody
}