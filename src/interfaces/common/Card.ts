export interface CardProps {
    cardType: CardType;
    bankName: string;
    hasNfc: boolean;
    cardNumber: string;
    cardHolderName: string;
    cardProvider: CardProvider;
    issueDate: string;
    expiryDate: string;
    tagName: string;
}

export enum CardType {
    Credit = 0,
    Debit = 1
}

export enum CardProvider {
    MasterCard = 0,
    Visa = 1,
    Amex = 2,
    Rupay = 3
}