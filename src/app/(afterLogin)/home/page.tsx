import style from './home.module.css';
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import TabDecider from './_component/TabDecider';
import RQProvider from "../_component/RQProvider";

export default function Home() {
  return (
    <main className={style.main}>
      <RQProvider>
      <TabProvider>
        <Tab/>
        <PostForm />
        <TabDecider/>
      </TabProvider>
      </RQProvider>
    </main>
  )
}
