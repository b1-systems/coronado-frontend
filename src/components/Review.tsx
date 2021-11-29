import React from 'react';

import { Button, Stack } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

var QRCode = require('qrcode.react');
const termin = {
  name: '__PLATZHALTERBennö Benson',
  vac: '__PLATZHALTERBiontec',
  date: '__PLATZHALTER10-12-21-10:30',
  id: '__PLATZHALTERqwertzuioplkjhgfdsayxcvbn',
};

export default function Review() {
  const downloadQR = () => {
    const canvas = document.getElementById('QR-Code-img') as HTMLCanvasElement;
    if (canvas !== null) {
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      let downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'QR-Code-img.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <React.Fragment>
      <Stack sx={{pt: 4}} direction='row' spacing={2} justifyContent='center'>
        <List dense>
          <ListItem sx={{py: 0, px: 0}}>
            <ListItemText primary='Impftermin für: ' secondary={termin.name} />
          </ListItem>
          <ListItem sx={{py: 0, px: 0}}>
            <ListItemText primary='Impftermin am: ' secondary={termin.date} />
          </ListItem>
          <ListItem sx={{py: 0, px: 0}}>
            <ListItemText primary='Impfstoff: ' secondary={termin.vac} />
          </ListItem>
        </List>
        <List dense>
          <ListItem sx={{py: 0, px: 0}}>
            <ListItemText primary='ID: ' secondary={termin.id} />
          </ListItem>
          <ListItem sx={{py: 0, px: 0}}>
            <QRCode
              value={termin.id}
              id='QR-Code-img'
              size={200}
              level={'H'}
              includeMargin={true}
            />
          </ListItem>
        </List>
      </Stack>
      <Button variant='contained' sx={{mt: 3, ml: 1}} onClick={downloadQR}>
        Download QR
      </Button>
    </React.Fragment>
  );
}
