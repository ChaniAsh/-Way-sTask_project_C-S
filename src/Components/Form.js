// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function Form() {
//   const [value, setValue] = React.useState();

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <div id='title'>
//         {/* כותרת משימה */}
//         <TextField
//           id="outlined-multiline-flexible"
//           label="נושא"
//           multiline
//           maxRows={4}
//           value={value}
//           onChange={handleChange}
//         />
//         </div>
//         <div id='discription'>
//         <TextField
//           id="outlined-multiline-static"
//           label="תאור"
//           multiline
//           rows={4}
//         />
//         </div>
      
//     </Box>
//   );
// }
