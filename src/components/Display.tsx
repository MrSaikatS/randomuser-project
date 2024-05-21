import { numAtom } from "@/utils/atoms";
import { ApiArrType } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";
import LoadingCard from "./LoadingCard";
import UserCard from "./UserCard";

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
        <div className="mx-auto my-4 grid max-w-xs grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
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
        <div className="mx-auto my-4 grid max-w-xs grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => {
            return <UserCard key={item.login.uuid} info={item} />;
          })}
        </div>
      </>
    );
  }
};

export default Display;
