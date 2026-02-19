import BackButton from "../_component/BackButton";
import SearchForm from "../_component/SearchForm";
import style from "./search.module.css";
import Tab from "./_component/Tab";
import Post from "@/app/(afterLogin)/_component/Post";

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ q: string; f?: string; pf?: string }>;
}) {
  const { q } = await searchParams;
  return (
    <main className={style.main}>
      <div className={style.searchTop}>
        <div className={style.searchZone}>
          <div className={style.buttonZone}>
            <BackButton />
          </div>
          <div className={style.formZone}>
            <SearchForm q={q} />
          </div>
        </div>
        <Tab />
      </div>
      <div className={style.list}>
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
        {/*<SearchResult searchParams={searchParams} />*/}
      </div>
    </main>
  );
}
