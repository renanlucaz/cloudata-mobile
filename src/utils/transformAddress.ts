interface AddressInterface {
    street: string;
    number: string;
    neightborhood: string;
}

export function transformAddress(address: AddressInterface) {
    return `${address.street}, ${address.number} - ${address.neightborhood}`
}