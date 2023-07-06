import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Header from "../../../LayOut/Component/Header"
import { Box, Button, Link } from '@mui/material';
import { useProductQuery, useProduct_DeleteMutation } from '../../../Redux/API/API';
import {useEffect, useState} from "react";
import { Iproduct } from '../../../Interface/product';

export default function Show_Product() {
    const [row, setrow] = useState<Iproduct[]>([]);
    const {data, refetch} = useProductQuery();
    const [Delete] = useProduct_DeleteMutation();
    useEffect(() => {
        data && setrow(data?.data);
    }, [data]);
    
    const handleButtonClick = (row :Iproduct) => {
        Delete(row._id)
        refetch();
      };
      const columns: GridColDef[] = [
        { field: '_id', headerName: '_id', flex : 1 ,  headerAlign: 'center',align: 'center' },
        { field: 'Product_Name', headerName: 'Name', flex : 1 ,  headerAlign: 'center',align: 'center'},
        { field: 'Product_Price', headerName: 'Price', flex : 1,  headerAlign: 'center',align: 'center' },
        {
          field: 'Product_KG',
          headerName: 'Kilograms',
          type: 'number',
          headerAlign: 'center',
          align: 'center',
          flex : 1
        },
      {
          field : "Image",
          headerAlign: 'center',
          align: 'center',
          renderCell : (params) => {
              return <img src={params.row.Product_Image} alt="Item" style={{ width: 50, height: 50 }} />;
          }
      },
      
      {
          field: 'Product_Desc',
          headerName: 'Description',
          type: 'text',
          flex : 1,
          headerAlign: 'center',
          align: 'center'
        },
        {
          field : "Action",
          renderCell : (CellValue) => {
              return <Button sx={{ backgroundColor : "#FF6666", color : "white" , ":hover" : {
                  backgroundColor : "#FF6666", color : "white"
              } }} onClick={() => handleButtonClick(CellValue.row)} >Delete</Button>
              
          }
        }
        ,
        {
          field : "Link",
          renderCell : (CellValue) => {
            
              return <Link sx={{
                width : "75px",
                height : "38px",
                backgroundColor : "#4CCEAC",
                color : "white",
                borderRadius : 1,
                textDecoration : "none",
                textAlign : "center",
                alignItems : "center",
                lineHeight : 3
              }} href={`/Admin/Update_Product/${CellValue.row._id}`} >Update</Link>
              
          }
        }
      ];
  return (
    <Box sx={{ height: 600 , width : "100%" , display : "grid" }} >
 <Header title="Show Product" subtitle="Well Come to my Product" />
      <DataGrid
         sx={{
            "& .css-1iyq7zh-MuiDataGrid-columnHeaders" : {
                backgroundColor : "#4CCEAC",
                color : "white"
            },
            "& .css-wop1k0-MuiDataGrid-footerContainer" : {
                backgroundColor : "#4CCEAC",
                color : "white"
            },
            "& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolba" : {
                color : "white"
            },
            "& .css-axafay-MuiDataGrid-virtualScroller" : {
                color : "white",
            },
            textAlign : "center"
         }}
        rows={row}
        columns={columns}
        getRowId={(row:Iproduct) =>  row.Product_Name + row.Product_Price}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Box>
  );
}