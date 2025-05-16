import { Request, Response } from "express";
import { Todo } from "../models/Todo";

export const cretaeNewTodo = async(req : Request ,res: Response)=>{
    try {
        const {title} = req.body
        const createTodo = await Todo.create({
            title
        })
        res.status(201).json({message: "Todo create Success",data:createTodo})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something was wrong"})
    }
}

export const getTodos = async(req:Request,res: Response)=>{
    try {
        const gettodos = await Todo.find()
        res.status(200).json({message:"All todo fetched",data:gettodos})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong at get Todos data"})
    }
}
export const getTodo = async(req:Request,res: Response)=>{
    try {
        const {todoId}=  req.params
        const gettodo = await Todo.findById(todoId)
        res.status(200).json({message:"success todo fetched",data:gettodo})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong at get Todos data"})
    }
}
export const deleteTodo = async(req:Request,res: Response)=>{
    try {
        const {todoId}=  req.params
        await Todo.findByIdAndDelete(todoId)
        res.status(500).json({message:"Delete todo success"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong at delete todo"})
    }
}

export const updateTodo = async(req:Request,res: Response)=>{
    try {
        const {todoId}=req.params
        const {title} = req.body
        const updateData = await Todo.findByIdAndUpdate(todoId,{
            title
        })
        res.status(201).json({message: "Success update",data:updateData })
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong at update"})
    }
}