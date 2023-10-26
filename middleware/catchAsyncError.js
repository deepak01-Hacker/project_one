module.exports = (theFunc) => (req, res, next) => {
    Promise.resolve(theFunc(req, res, next)).catch((error) => {
        console.error('Internal Server Error:', error); 
        res.status(500).send('Internal Server Error'); 
    });
};