import style from "./post.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import Link from "next/link";
import ActionButtons from "./ActionButtons";

dayjs.locale("ko");
dayjs.extend(relativeTime);
export default function Post() {
  const target = {
    User: {
      id: "dhkim",
      nickname: "김동현",
      image: "/yRsRRjGO.jpg",
    },
    content: "하나하고 쉴거야? 쉬어도 되는데 아무도 안 쉬긴 해~",
    createdAt: new Date(),
    Images: [],
  };

  return (
    <article className={style.post}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          <div className={style.postImageSection}></div>
          <ActionButtons />
        </div>
      </div>
    </article>
  );
}
