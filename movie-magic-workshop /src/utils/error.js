export const getErrorMessage = (error) => {

    if (error.name === 'ValidationError') {
        return Object.values(error.errors)[0].message;
    } else {
        return error.message;
    }

}


