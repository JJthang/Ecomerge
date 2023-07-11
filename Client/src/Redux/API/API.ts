import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Iproduct } from "../../Interface/product";
import { ICate } from "../../Interface/category";
import { IFLogin, Regiter } from "../../Interface/All";

export const API = createApi({
    reducerPath : "Product_API",
    tagTypes : ["product", "Category", "Cart"],
    baseQuery : fetchBaseQuery( { baseUrl : "http://localhost:8080/api/" }),
    endpoints : (buider) => ({
        //todo query< 1 , 2 > : 1 là type giá trị xuất ra còn 2 là giá trị khi truyền vào fuction
        product : buider.query<any , void >({
            query : () => "product",
            providesTags : ["product"],
        }),
        products : buider.query({
            query : (id) => `product/${id}`,
            providesTags : ["product"],
        }),
        Product_ADD : buider.mutation<void , Iproduct>({
            query : (data) => ({
                url : "product",
                method : "POST",
                body : data
            }),
            invalidatesTags : ['product']

        }),
        Product_PUT : buider.mutation<void , Iproduct>({
            query : ({_id , ...rest}) => ({
                url : `product/${_id}`,
                method : "PUT",
                body : rest,
            }),
            invalidatesTags : ['product']
        }),
        Product_Delete : buider.mutation({
            query : (id) => ({
                url : `product/${id}`,
                method : "DELETE"
            }),
            invalidatesTags : ['product']
        }),


        //todo Category

        Category : buider.query<any , void>({
            query : () => "category",
            providesTags : ['Category']
        }),
        Categorys : buider.query({
            query : (id) => `category/${id}`,
            providesTags : ['Category']
        }),
        Category_ADD : buider.mutation<void , ICate>({
            query : (data) => ({
                url : 'category',
                method : "POST",
                body : data,
            }),
            invalidatesTags : ['Category'] 
        }),
        Category_DELETE : buider.mutation<void , ICate>({
             query : (_id) => ({
                url : `category/${_id}`,
                method : 'DELETE',
             }),
             invalidatesTags : ['Category']
        }),
        Category_PUT : buider.mutation<void , ICate>({
            query : ({_id , ...rest}) => ({
                url : `category/${_id}`,
                method : 'PUT',
                body : rest
            }),
            invalidatesTags : ['Category']
        }),
        //todo  User
        Register : buider.mutation<object , Regiter>({
            query : (body) => ({
                url : "SignUp",
                method : 'POST',
                body,
            })
        }),
        Login : buider.mutation<object, IFLogin>({
            query : (body) => ({
                url : "SignIn",
                method : 'POST',
                body,
            })
        }),

        //todo Cart
        Post_Cart : buider.mutation({
            query : (body) => ({
                url : "cart",
                method : 'POST',
                body,
            }),
            invalidatesTags : ['Cart'],
        }),
        Get_One_Cart : buider.query({
            query : (id) => `cart/${id}`,
            providesTags : ['Cart'],
        })
    })
})

export const { useCategoryQuery , useCategory_ADDMutation, 
    useCategory_DELETEMutation , useCategory_PUTMutation,
    useCategorysQuery, useProductQuery , useProduct_ADDMutation,
    useProduct_DeleteMutation, useProduct_PUTMutation, useProductsQuery,
    useRegisterMutation, useLoginMutation, usePost_CartMutation , useGet_One_CartQuery
    } = API