import Post from "../_component/Post";
import PostForm from "../home/_component/PostForm";
import Tab from "../home/_component/Tab";
import TabProvider from "../home/_component/TabProvider";
import style from "./home.module.css";
export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
