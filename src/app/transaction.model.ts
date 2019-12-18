export interface Transaction {
    payment_instrument_token: string;
    transaction_type: string;
    funding_source: string;
    funding_method: string;
    transaction_source: string;
    order_reference: string;
    business_date: string;
    response_code: string;
    authorization_code: string;
    processor_response_code: string
}

export interface Transactions{
    transactions: Transaction[];
}