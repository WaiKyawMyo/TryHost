"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.deleteTodo = exports.getTodo = exports.getTodos = exports.cretaeNewTodo = void 0;
const Todo_1 = require("../models/Todo");
const cretaeNewTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title } = req.body;
        const createTodo = yield Todo_1.Todo.create({
            title
        });
        res.status(201).json({ message: "Todo create Success", data: createTodo });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something was wrong" });
    }
});
exports.cretaeNewTodo = cretaeNewTodo;
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const gettodos = yield Todo_1.Todo.find();
        res.status(200).json({ message: "All todo fetched", data: gettodos });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong at get Todos data" });
    }
});
exports.getTodos = getTodos;
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { todoId } = req.params;
        const gettodo = yield Todo_1.Todo.findById(todoId);
        res.status(200).json({ message: "success todo fetched", data: gettodo });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong at get Todos data" });
    }
});
exports.getTodo = getTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { todoId } = req.params;
        yield Todo_1.Todo.findByIdAndDelete(todoId);
        res.status(500).json({ message: "Delete todo success" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong at delete todo" });
    }
});
exports.deleteTodo = deleteTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { todoId } = req.params;
        const { title } = req.body;
        const updateData = yield Todo_1.Todo.findByIdAndUpdate(todoId, {
            title
        });
        res.status(201).json({ message: "Success update", data: updateData });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong at update" });
    }
});
exports.updateTodo = updateTodo;
