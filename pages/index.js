import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meet up",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/05/20/684461-urban-city.jpg",
    address: "some address1",
    description: "this is our first meet up",
  },
  {
    id: "m2",
    title: "A second meet up",
    image:
      "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/12/shutterstock_7024083491.jpg",
    address: "nagpur",
    description: "this is our second meet up",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//     const req = context.req
//     const res = context.res
//     return {
//       props: {
//         meetups: DUMMY_MEETUPS,
//       },
      
//     };
//   }

export async function getStaticProps() {

  const client = await MongoClient.connect('mongodb+srv://roshgupta17:Anika123456@cluster0.dlnrdlu.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();
  client.close()

  return {
    props: {
      meetups: meetups.map(meetup=>({
        title:meetup.title,
        address:meetup.address,
        image:meetup.image,
        id:meetup._id.toString()

      }))
    },
    revalidate:10
  };
}
export default HomePage;
