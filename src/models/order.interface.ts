import { IPayment } from './paymentInfo.interface';
import {IUser} from './user.interface';
export interface IOrder {
    id: number
    userId: IUser
    payment: IPayment
    orderExId: string
    deliveryDate: Date
    createdAt: Date
    updatedAt: Date
}
