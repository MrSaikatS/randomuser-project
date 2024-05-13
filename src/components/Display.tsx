import { useQuery } from "@tanstack/react-query";
import LoadingCard from "./LoadingCard";
import UserCard from "./UserCard";
import axios from "axios";
import { ApiArrType } from "@/utils/types";
import { useAtom } from "jotai";
import { numAtom } from "@/utils/atoms";

const Display = () => {
  const [num, setNum] = useAtom(numAtom);

  const { data, isLoading, isFetching, isFetched, isSuccess } = useQuery({
    queryKey: ["randomuser-api", num],
    queryFn: async () => {
      const url = process.env.NEXT_PUBLIC_APIURL as string;
      const apiRequest = await axios.get(url, {
        params: {
          results: num,
          nat: "AU,CA,DE,FR,GB,IE,IN,NZ,US",
        },
      });
      await new Promise<void>((r) => setTimeout(r, 2000));
      const data = apiRequest.data.results as ApiArrType;
      return data;
    },
    refetchOnWindowFocus: false,
    retry: 3,
  });

  if (isLoading || isFetching) {
    return (
      <>
        <div className="my-4 grid grid-cols-3 gap-8">
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </div>
      </>
    );
  }

  if (isFetched && isSuccess) {
    return (
      <>
        <div className="my-4 grid grid-cols-3 gap-8">
          {data.map((item) => {
            return <UserCard key={item.login.uuid} info={item} />;
          })}
        </div>
      </>
    );
  }
};

export default Display;
