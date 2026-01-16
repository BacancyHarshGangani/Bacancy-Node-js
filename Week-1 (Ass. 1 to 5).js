// WEEK - 1 ASSIGNMENT

// 1. Number Check

function numcheck(num) {
    if(num > 0 )
    {
        console.log("Positive Number");
    }

    else if(num < 0)
    {
        console.log("Negative Number");
    }

    else
    {
        console.log("Zero");
    }
}

// 2. Even/Odd in Range

function numcheck(num) {
    for(let i=0; i<=num; i++){
        if(i % 2 === 0){
            console.log(i + " -> Even");
        }
        else{
            console.log(i + " -> Odd");
        }
    }
}

// 3. Role Access using switch-case

function roleassignment(user) {
    switch(user) {
        case 'ADMIN':
            return 'Full access';
        case 'USER':
            return 'Limited access';
        case 'viewer':
            return 'Moderate access';
        default:
            return 'Invalid role';
    }
}

// 4. Total Price Function

function calculateTotalPrice(price, quantity)
{
    return price * quantity;
}

// 5. Coupon Discount Function

function applycoupon(amount, couponCode)
{
    if (couponCode === 'SAVE10') {
        return amount * 0.9;
    } else if (couponCode === 'SAVE20') {
        return amount * 0.8;
    } else {
        return amount;
    }
}