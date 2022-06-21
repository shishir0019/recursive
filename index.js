let isBillThisYear = (account, adjust = 0) =>  new Date().getFullYear() > new Date(account.billed).getFullYear() + adjust;
let isBillThisMonth = (account, adjust = 0) => new Date().getMonth() > new Date(account.billed).getMonth() + adjust;
let isBeforeTheBillDate = (account, adjust = 0) => new Date().getDate() > new Date(account.billed).getDate() + adjust;

export const willBeCreated = (account) => {
    switch (account.plan) {
        case 'daily':
            return isBeforeTheBillDate(account, 0);
        case 'week':
            return isBeforeTheBillDate(account, 6);
        case 'month':
            return isBillThisMonth(account, 0) && isBeforeTheBillDate(account, 0);
        case 'quater':
            return isBillThisMonth(account, 2) && isBeforeTheBillDate(account, 0);
        case 'year':
            return isBillThisYear(account, 0) && isBillThisMonth(account, -1) &&  isBeforeTheBillDate(account, 0);
        default:
            return false
    }
}