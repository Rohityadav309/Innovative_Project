import express from 'express'

const Router=express.Router()


Router.get('/',(req,res)=>{
    res.send("hello sever running")
})




export default Router;