import { Request, Response } from "express";

export function listProducts(req:Request, resp:Response) {
    resp.send('listProducts');
}

export function getProductsById(req:Request, resp:Response) {
    resp.send('getProductsById');
}

export function createProduct(req:Request, resp:Response) {
    resp.send('createProduct');
}

export function updateProduct(req:Request, resp:Response) {
    resp.send('updateProduct');
}

export function deleteProduct(req:Request, resp:Response) {
    resp.send('deleteProduct');
}