
import Box from '@mui/material/Box';
import { Link } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGet_All_CheckOutQuery } from '../../../Redux/API/API';
import { useEffect, useState } from 'react';
import Header from '../../../LayOut/Component/Header';

export default function Show_Cart() {
  const {data} = useGet_All_CheckOutQuery();
  const [row, setrow] = useState([]);
  useEffect(() => {
      data && setrow(data?.data);
  }, [data]);

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 90, flex : 1, },
  {
    field: 'name',
    headerName: 'First name',
    flex : 1,
    headerAlign: 'center',
    align: 'center',
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    flex : 1,
    headerAlign: 'center',
    align: 'center',
    editable: true,
  },
  {
    field: 'number',
    headerName: 'Number',
    type: 'number',
    flex : 1,
    headerAlign: 'center',
    align: 'center',
    editable: true,
  },
  {
    field: 'id_user',
    headerName: 'Age',
    type: 'number',
    flex : 1,
    headerAlign: 'center',
    align: 'center',
    editable: true,
  },
  {
    field: 'address',
    headerName: 'Address',
    type: 'number',
    flex : 1,
    headerAlign: 'center',
    align: 'center',
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'number',
    flex : 1,
    headerAlign: 'center',
    align: 'center',
    editable: true,
  },
  {
    field: 'payment',
    headerName: 'Payment',
    type: 'number',
    flex : 1,
    headerAlign: 'center',
    align: 'center',
    editable: true,
  },
  {
    field : "List_Product",
    flex : 1,
    headerAlign: 'center',
    renderCell : (CellValue) => {
      return CellValue.row.List_Product.length;
    }
  },
  {
    field : "Action",
    flex : 1,
    headerAlign: 'center',
    align: 'center',
    renderCell : (CellValue) => {
      return <Link href={`Admin/Show_Cart/${CellValue.row._id}`} sx={{
        padding : "10px 5px",
        backgroundColor : "#4CCEAC",
        borderRadius : "4px",
        color :  "white",
        ":hover" : {
          color : "white",
          opacity : 0.95,
        }
      }} >Detail Order</Link>
    }
  }
];
  return (
    <Box sx={{ height: 400, width: '100%' }}>
     <Header title="Show Order" subtitle="Well Come to my Order" />
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
        "& .css-204u17-MuiDataGrid-main" : {
          color : "white",
        },
        "& .MuiDataGrid-cell--textCenter " :{
          alignItems : "center"
        },
        textAlign : "center",
      }}
        rows={row}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        getRowId={(row) =>  row.name + row.status}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}