import PostCardList from "./components/PostCard/PostCardList";
import SearchBar from "./components/SearchBar/SearchBar";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4  h-52 ">
          <SearchBar title="Post" />
        </div>
        <div className=" w-full md:w-3/4 bg-secondary ">
          <PostCardList />
        </div>
      </div>
    </div>
  );
}
