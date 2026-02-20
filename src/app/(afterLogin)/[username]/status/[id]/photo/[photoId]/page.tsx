import Home from "@/app/(afterLogin)/_component/Home";

type Props = {
  params: Promise<{ username: string; id: string; photoId: string }>;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function Page({ params }: Props) {
  //   const { username, id, photoId } = await params;
  return <Home />;
}
