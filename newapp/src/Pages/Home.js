import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: () =>
      axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });

  if (isError) {
    return <h2>Sorry, there was an error</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>This is Home Page</h1>
      <button onClick={refetch}>Refetch</button>
      <p>{catData?.fact}</p>
    </div>
  );
};
