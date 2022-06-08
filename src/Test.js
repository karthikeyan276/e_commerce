import * as React from 'react';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';


export default function Test() {
  return (
      <div>
          <HomeIcon color="primary" style={{fontSize:"70px"}} onClick={this.click4}>

</HomeIcon>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" >
        Link
      </Button>
      </div>
  );
}