import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from './AppBar';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import RequestPageIcon from '@mui/icons-material/RequestPage';

import { IconButton } from '@mui/material'



function Header() {



  return (
    <div>
      <AppBar position="fixed" sx={{backgroundColor:"#111111"}}>
          <Box sx={{ flex: 1 , justifyContent:'space-between'}} />
   
            <Link
              variant="h6"
              underline="none"
              color="#E9AB17"
              href="/"
              sx={{ fontSize: 24, alignContent:'center', alignSelf:'center' }}
            >
              {'Notícias J8'}
            </Link>
           
            <Box sx={{ flex: 1, display: 'flex' , justifyContent:'space-between'}}>
         

            <Link
              variant="h6"
              underline="none"
              color="#E9AB17"
              href="/"
              sx={{ fontSize: 24, alignContent:'center', alignSelf:'center' }}
            >
              {'blogs'}
            </Link>
           
           
             
         
            </Box>
            
      </AppBar>
     
    </div>
  );
}

export default Header;