// import { Height } from "@mui/icons-material";
import { Box } from "@mui/material";

import { Post } from "./post";

export const PostFeed = () => {
  return (
    <Box p={2} flex={4}>
      <Post />
      <Post />
      <Post />
    </Box>
  );
};
