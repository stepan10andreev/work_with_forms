export const getOnlyPhoneNumber = (phoneNumber: string) => {
    return phoneNumber.slice(5)
                      .replace(/_+/g, '')
                      .replace(/ +/g, '')
                      .replace(/-+/g, '')
}
