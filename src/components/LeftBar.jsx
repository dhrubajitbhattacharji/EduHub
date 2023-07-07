import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ReorderIcon from '@mui/icons-material/Reorder';

export const LeftBar = () => {
  return (
    <Box sx={{display: {xs: "none", sm: "block"}}} p={2} flex={1.5}>
      <Box sx={{position: "fixed"}}>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ChatIcon/>
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BookmarkIcon />
              </ListItemIcon>
              <ListItemText primary="Saved Posts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary="Bookstore" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReorderIcon />
              </ListItemIcon>
              <ListItemText primary="Study Materials" />
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
    </Box>
  )
}
