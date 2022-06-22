const validateEmail = () => {

}

const validatePhoneNumber  =(phoneNumber) => {
    const regex = /\d/i;
    return regex.test(phoneNumber);
}

export {
    validateEmail,
    validatePhoneNumber
}