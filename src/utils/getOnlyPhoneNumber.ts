export const getOnlyPhoneNumber = (phoneNumber: string) => {
    return phoneNumber.slice(5)
                      .replace(/ +/g, '')
                      .replace(/-+/g, '')
}
