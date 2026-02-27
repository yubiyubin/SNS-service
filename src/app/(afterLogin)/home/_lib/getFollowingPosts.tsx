import { useQuery } from "@tanstack/react-query";
import {getFollowingPosts} from "./getFollowingPosts";


export async function FollowingPosts() {
const {data}=useQuery({
  queryKey:['posts','followings'],
  queryFn: getFollowingPosts,
})

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/postRecommends`,
    {
      next: {
        tags: ["posts", "recommends"],
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
