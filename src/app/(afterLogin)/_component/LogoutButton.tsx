"use client"

import style from "./logoutButton.module.css";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const me = { // 임시로 내 정보 있는것처럼
    id: 'zerohch0',
    nickname: '제로초',
    image: '/5Udwvqim.jpg',
  }

  const onLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.image} alt={me.id}/>
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  )
}