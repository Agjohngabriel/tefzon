import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

export default function Auth(props: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.replace({
        pathname: "/account/auth/login",
        query: {
          callbackUrl: `${location.pathname}${location.search}`,
        },
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, session]);

  return <>{props.children}</>;
}
