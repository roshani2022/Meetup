import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/05/20/684461-urban-city.jpg"
      title="the first meetup"
      address="Nagpur"
      description="this is the best place"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback:true,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
      
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId)

  return {
    props: {
      meetupData: {
        image:
          "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/05/20/684461-urban-city.jpg",
        id: meetupId,
        title: "the first meetup",
        address: "Nagpur",
        description: "this is the best place",
      },
    },
  };
}
export default MeetupDetails;
