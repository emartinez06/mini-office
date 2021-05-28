import express from 'express';
const router = express.Router();

const getDocument = router.get('/', (req,res)=>{
    // let text = req.body.msg;
    res.send('we get it done well, excellent');
});

export {
    getDocument
}