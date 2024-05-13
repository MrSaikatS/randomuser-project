import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";

const LoadingCard = () => {
  return (
    <Card>
      <CardBody>
        <div className="grid grid-flow-row place-items-center gap-4 p-4">
          <Skeleton className="rounded-full">
            <Image
              src={"https://randomuser.me/api/portraits/women/75.jpg"}
              radius="full"
              isBlurred
            />
          </Skeleton>

          <div className="text-2xl font-semibold">
            <Skeleton className="rounded-full"> Miss Jennie Nichols</Skeleton>
          </div>
          <div className="text-xl">
            <Skeleton className="rounded-full">
              jennie.nichols@example.com
            </Skeleton>
          </div>
          <div className="text-xl">
            <Skeleton className="rounded-full">Vijayanagaram, India</Skeleton>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default LoadingCard;
