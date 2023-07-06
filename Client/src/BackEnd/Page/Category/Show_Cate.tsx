import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Header from "../../../LayOut/Component/Header"
import { Box, Button, Link } from '@mui/material';
import { useCategoryQuery, useCategory_DELETEMutation } from '../../../Redux/API/API';
import {useEffect, useState} from "react";
import { ICate } from '../../../Interface/category';

export default function Show_cate() {
    const [row, setrow] = useState<Iproduct[]>([]);
    const {data, refetch} = useCategoryQuery();
    const [Delete] = useCategory_DELETEMutation();
    console.log(row);
    
    useEffect(() => {
        data && setrow(data?.data);
    }, [data]);
    
    const handleButtonClick = (row : ICate) => {
        Delete(row._id)
        refetch();
      };
      const columns: GridColDef[] = [
        { field: '_id', headerName: '_id', flex : 1 ,  headerAlign: 'center',align: 'center' },
        { field: 'Cate_Name', headerName: 'Name', flex : 1 ,  headerAlign: 'center',align: 'center'},
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
              }} href={`/Admin/Update_Cate/${CellValue.row._id}`} >Update</Link>
              
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
        getRowId={(row: ICate) =>  row._id + ''}
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