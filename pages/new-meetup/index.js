import { useRouter } from "next/router"
import { Fragment } from "react"
import Head from "next/head"
import NewMeetupForm  from "../../components/meetups/NewMeetupForm"
function NewMeetupPage() {

    const router = useRouter()

   async function addMeetupHandler(enterdMeetupData){
       const response = await fetch('/api/new-meetup',{
        method:"POST",
        body:JSON.stringify(enterdMeetupData),
        headers:{
            'Content-Type':'application/json'
        }
       })
       const data = await response.json()
       console.log(data)

      router.push('/')
    }

    return (
        <Fragment>
            <Head>
                <title>Add a new meetup</title>
                <meta
                name="description"
                 content="Add your own meetups and create amazing networking opportunities"
                />
            </Head>
          <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </Fragment>
        
    )

}
export default NewMeetupPage;