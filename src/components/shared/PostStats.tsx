import { Models } from "appwrite";

type PostStatsProps = {
  post: Models.Document;
  userId: string;
};

const PostStats = ({ post, userId }: PostStatsProps) => {
  return (
    <div className="flex justify-between items-center z-20">
      <div className="flex gap-2 mr-5">
        <img
          src={true ? "/assets/icons/liked.svg" : "/assets/icons/liked.svg"}
          alt="like"
          height={20}
          width={20}
          onClick={() => {}}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">0</p>
      </div>

      <div className="flex gap-2">
        <img
          src={true ? "/assets/icons/save.svg" : "/assets/icons/save.svg"}
          alt="save"
          height={20}
          width={20}
          onClick={() => {}}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default PostStats;
