//import AdminDash from "../AdminDash";
import AdminDash from "../AdminDash/page";
import RegularUserDash from "../RegularUserDash/page";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      {session.user.role === "admin" || session.user.role === "ITSupport" ? (
        <AdminDash />
      ) : null}
      {session.user.role === "regular" ? <RegularUserDash /> : null}
    </div>
  );
};

export default page;
