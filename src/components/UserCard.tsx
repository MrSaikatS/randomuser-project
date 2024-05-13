import { ApiObjType } from "@/utils/types";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

type UserCardProps = {
  info: ApiObjType;
};

const UserCard = ({ info }: UserCardProps) => {
  return (
    <>
      <Card>
        <CardBody>
          <div className="grid grid-flow-row place-items-center gap-4 p-4">
            <Image
              src={info.picture.large}
              alt={info.name.first}
              radius="full"
              width={128}
              height={128}
              isBlurred
            />

            <div className="text-2xl font-semibold">
              {info.name.title} {info.name.first} {info.name.last}
            </div>
            <div className="text-wrap text-center text-xl">{info.email}</div>

            <div className="text-wrap text-lg">
              {info.location.city}, {info.location.country}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default UserCard;
