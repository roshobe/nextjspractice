import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SideNavBar from "../components/SideNavBar";
import PostCarousel from "../components/PostCarousel";
import PostCard from "../components/PostCard";
import PostCardwv from "../components/PostCardwv";
import PostCardwp from "../components/PostCardwp";

export default function Home() {
  return (
    <>
      <div className='flex items-start flex-row max-w-full space-x-56 '>
        <SideNavBar className='object-none object-center' />
        <div className='flex items-start flex-col w-5/6 space-y-2 '>
          <PostCarousel />
          <PostCardwv />
          <PostCard />
          <PostCardwp />
        </div>
      </div>
    </>
  );
}
