import MeetupList from "../components/meetups/MeetupList";

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

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    return {
      props: {
        meetups: DUMMY_MEETUPS,
      },
      
    };
  }

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate:10
//   };
// }
export default HomePage;
