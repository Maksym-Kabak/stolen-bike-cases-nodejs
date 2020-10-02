import {createTransaction} from './create.transaction';

export const transactionWrapper = (method: any) => async (...arg: any): Promise<void> => {
  const transaction = await createTransaction();

  try {
    await method(...arg, transaction);
    await transaction.commit();
  } catch (e) {
    await transaction.rollback();
  }
};
