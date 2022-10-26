export const plurielInCart = (cartTotalQuantity) => {
    if (cartTotalQuantity > 1) {
        return "s"
    }
}

export const plurielCategory = (category) => {
    if (category.length > 1) {
        return "s"
    }else{
        return ""
    }
}

export const plurielMark = (marks) => {
    if (marks.length > 1) {
        return "s"
    }else{
        return ""
    }
}

export const plurielUsers = (users) => {
    if (users.length > 1) {
        return "s"
    }else{
        return ""
    }
}
export const plurielProducts = (products) => {
    if (products.length > 1) {
        return "s"
    }else{
        return ""
    }
}