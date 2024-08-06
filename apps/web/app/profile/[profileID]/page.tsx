import { GetServerSideProps } from 'next';
import ProfileCard from "../../../components/ProfileCard";


interface PageProps {
  params: {
    profileID: string;
  };
}


export default async function Page({params} : PageProps) {
  const {profileID} = params
  return (<div>
      <ProfileCard profileID={profileID}/>
    </div>
  );
}
