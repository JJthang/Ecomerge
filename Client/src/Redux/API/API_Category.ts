import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICate } from "../../Interface/category";


export const Category_API = createApi({
    reducerPath : "Category_API",
    tagTypes : ['Category'],
    baseQuery : fetchBaseQuery({ baseUrl : "http://localhost:8080/api/" }),
    endpoints : (builder) => ({
        Categorys : builder.query<ICate , void>({
            query : () => "category",
            providesTags : ['Category']
        }),
        Category : builder.query<ICate , void>({
            query : (id) => `category/${id}`,
            providesTags : ['Category']
        }),
        Category_ADD : builder.query<void , ICate>({
            query : (data) => ({
                url : 'category',
                method : "POST",
                body : data,
            })
        }),
        Category_DELETE : builder.mutation<void , ICate>({
             query : (id) => ({
                url : `category/${id}`,
                method : 'DELETE',
             })
        }),
        Category_PUT : builder.mutation<void , ICate>({
            query : ({id , ...rest}) => ({
                url : `category/${id}`,
                method : 'PUT',
                body : rest
            }) 
        })
    })
})