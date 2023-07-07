import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import post1 from "../assets/post1.jpg";
import { MoreVert, ShareLocation } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Post = () => {
  return (
    <>
      <Card sx={{margin: "5px"}}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ height: "40px", width: "40px" }}
              src="https://icon-library.com/images/male-avatar-icon/male-avatar-icon-15.jpg"
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={<Typography>Aritra Chaterjee</Typography>}
          subheader={
            <Typography sx={{ fontSize: "10px" }}>6 Hours ago</Typography>
          }
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            atque, aliquam facilis magni, laboriosam blanditiis, itaque fuga
            repellat assumenda consequuntur recusandae id iure non tenetur
            aperiam eveniet possimus quos alias.
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="194"
          image={post1}
          alt="Paella dish"
        />

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
            />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};
