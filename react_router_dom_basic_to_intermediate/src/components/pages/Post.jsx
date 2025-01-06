import { useParams, useSearchParams } from "react-router-dom";

function Post() {
  let { category, id } = useParams();
  // console.log(category, id);

  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  // console.log(searchParams.get("price"));
  // console.log(searchParams.get("sort"));

  return (
    <div>
      <h1>Category: {category}</h1>
      <h1>ID: {id}</h1>
    </div>
  );
}

export default Post;
