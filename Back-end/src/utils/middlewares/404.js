//middleware for handling 404 errors
export const error404 =((req, res , next) => {
    res.send('Route not found');
});