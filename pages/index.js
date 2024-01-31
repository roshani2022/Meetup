import MeetupList from '../components/meetups/MeetupList';


function HomePage () {

    const DUMMY_MEETUPS = [
        {
            id:"m1",
            title:"A first meet up",
            image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/05/20/684461-urban-city.jpg",
            address:"some address1",
            description:"this is our first meet up",
        },
        {
            id:"m2",
            title:"A second meet up",
            image:"https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/12/shutterstock_7024083491.jpg",
            address:"nagpur",
            description:"this is our second meet up",
        }
    ]
 return(
   
       <MeetupList meetups={DUMMY_MEETUPS}/>
    
    
 )
}

export default HomePage;