import { Avatar } from "@radix-ui/themes";
import { financialAvatarsData } from "./financialAvatarsData";

const FinancialAvatarsList = () => {
  return (
    <div className="flex items-center">
      {financialAvatarsData.map((avatar) => {
        return (
          <Avatar
            key={avatar.id}
            radius="full"
            className="-ml-2 border-2 w-6 h-6 border-white first:ml-0"
            src={avatar.image}
            fallback={avatar.fallback}
          />
        );
      })}
    </div>
  );
};

export default FinancialAvatarsList;
