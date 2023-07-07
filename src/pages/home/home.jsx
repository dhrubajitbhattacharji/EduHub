import { Stack } from "@mui/material";
import { LeftBar } from "../../components/LeftBar";
import { PostFeed } from "../../components/PostFeed";
import { RightBar } from "../../components/RightBar";
// import { BottomNav } from "../../components/BottomNav"

export const Home = () => {
  return (
    <>
      {/* <BottomNav/> */}
      <Stack
        direction="row"
        // divider={<Divider/>}
        justifyContent="space-between"
      >
        <LeftBar />
        <PostFeed />
        <RightBar />
      </Stack>
    </>
  );
};
