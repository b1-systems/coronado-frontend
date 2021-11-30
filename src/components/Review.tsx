import React from 'react';

import {Button, Stack} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

var QRCode = require('qrcode.react');
const termin = {
  error: '__error Platzhalter',
  data: {
    name: '__PLATZHALTERBennö Benson',
    vac: '__PLATZHALTERBiontec',
    date: '__PLATZHALTER10-12-21-10:30',
    id: '__PLATZHALTERqwertzuioplkjhgfdsayxcvbn',
  },
};

export default function Review(props: {
  respName: string;
  respDate: string;
  respVac: string;
  respId: string;
}) {
  const downloadQR = () => {
    const canvas = document.getElementById('QR-Code-img') as HTMLCanvasElement;
    if (canvas !== null) {
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      let downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `time_${props.respDate}_QR-Code-img.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <React.Fragment>
      <Stack
        sx={{pt: 4}}
        direction='row'
        spacing={2}
        justifyContent='center'
        id='id-for-downloade'
      >
        <List dense>
          <ListItem sx={{py: 0, px: 0}}>
            <ListItemText
              primary='Impftermin für: '
              secondary={props.respName}
            />
          </ListItem>
          <ListItem sx={{py: 0, px: 0}}>
            <ListItemText
              primary='Impftermin am: '
              secondary={props.respDate}
            />
          </ListItem>
          <ListItem sx={{py: 0, px: 0}}>
            <ListItemText primary='Impfstoff: ' secondary={props.respVac} />
          </ListItem>
        </List>
        <List dense>
          <ListItem sx={{py: 0, px: 0}}>
            <ListItemText primary='ID: ' secondary={props.respId} />
          </ListItem>
          <ListItem sx={{py: 0, px: 0}}>
            <QRCode
              value={props.respId}
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
