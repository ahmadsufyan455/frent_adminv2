var motorNumber = 99;
export class Motor {
    id?: string;
    motorId?: String = (motorNumber = motorNumber + 1).toString();
    image?: string;
    type?: string;
    description?: string;
    price?: number;
    quantity?: number;
    status?: boolean = true;
}