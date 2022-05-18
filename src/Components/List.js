import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
// import CommentIcon from '@mui/icons-material/Comment';
// import AlarmIcon from '@mui/icons-material/Alarm';
// import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function ListFunc() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } 
    else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
let newArray=[];
let i=0;
let taskArray=["לקנות חלב","לתקן שעון","להתקשר לסבתא","לקנות נעליים"];//הנתונים שיציג
taskArray.forEach(element => {
  newArray.push(i++);
});
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {newArray.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                {/* <CommentIcon />אייקון בצד ימין */}
                {/* <AlarmIcon id='alarm'/> */}
                <MoreVertIcon/>
              </IconButton>
            }
            disablePadding
          >

            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              {/* שם המשימה */}
              <ListItemText id='text' /*id={labelId}*/ primary={/*`משימה ${value}`*/`${taskArray[value]}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
