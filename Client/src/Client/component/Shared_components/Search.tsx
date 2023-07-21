import { Box, Dialog, DialogContent, ListItem, ListItemButton, ListItemText, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Iproduct } from "../../../Interface/product";
type props={
    data : Iproduct[],
}
const Search = ({data} : props) => {
    const [open, setOpen] = React.useState(false);
    console.log(data);
    
    const [input , setinput] = React.useState<Iproduct[]>([]);
    const HandChanged = (value : React.ChangeEvent<HTMLInputElement>) => {
        console.log(value);
        const Find_data : any = data && data?.data.filter((item : any) => value && item && item.Product_Name && item.Product_Name.toLowerCase().includes(value.target.value));
        setinput(Find_data);
    }
    console.log(input);
    
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  return <>
    <IconButton onClick={handleClickOpen} sx={{mr :1}}>
        <SearchIcon  ></SearchIcon>
    </IconButton>
  <Dialog style={{backgroundColor: 'transparent'}} sx={{
    "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper" : {
        backgroundColor : "white",
    }
  }} onClose={handleClose} open={open} >
    <DialogContent  >
    <Box sx={{width : 400  }}>
    <TextField
         onChange={HandChanged}
         sx={{ input: { color: 'black' }, 
         '& .MuiInput-underline:before': { borderBottomColor: 'black' },
         '& .MuiInput-underline:after': { borderBottomColor: 'black' }, }}
         InputLabelProps={{
            sx: { color: "black", "&.Mui-focused": { color: "black" } },
          }}
            margin="dense"
            id="name"
            label="Search product..."
            type="email" 
            fullWidth
            variant="standard"
          />
    </Box>
    <Box sx={{width : 400, maxHeight : 300, overflowY : "scroll" , mt : 2 }} >

            {
                input.length > 0 && input.map((item : Iproduct) =>
                <ListItem >
                    <ListItemButton key={item._id} >
                    <Link style={{ textDecoration : "none", color : "black" }} to={`/Product_Detail/${item._id}`} ><ListItemText primary={item.Product_Name} /></Link>
                    </ListItemButton>
                </ListItem>
                 )
            }
    </Box>
    </DialogContent>

  </Dialog>
  </>
}
export default Search;