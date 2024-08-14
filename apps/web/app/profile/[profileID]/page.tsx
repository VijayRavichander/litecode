import { GetServerSideProps } from 'next';
import ProfileCard from "../../../components/ProfileCard";
import { getServerSession } from 'next-auth';
import { authOptions } from '../../lib/auth';
import { redirect } from 'next/navigation';

interface PageProps {
  params: {
    profileID: string;
  };
}


export default async function Page({params} : PageProps) {

  const session = await getServerSession(authOptions)

  if(!session?.user){
    redirect("/");
  }

  
  const {profileID} = params
  return (<div>
      <ProfileCard profileID={profileID}/>
    </div>
  );
}
