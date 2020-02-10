export const reviewBudget = (budget, budgetLeft) => {
    let colorClass;

    if ((budget / 4) > budgetLeft) {
        colorClass = 'alert alert-danger'
    } else if( (budget / 2) > budgetLeft) {
        colorClass = 'alert alert-warning'
    } else {
        colorClass = 'alert alert-success';
    }

    return colorClass;
}