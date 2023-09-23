
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
import ReusableFrom from './Components/ReusableFrom/ReusableFrom'
// import HookFrom from './Components/HookFrom/HookFrom'
// import RefFrom from './Components/RefFrom/RefFrom'
// import StatefulFrom from './Components/StatefulFrom/StatefulFrom'
// import SimpleFrom from './Components/SimpleFrom/SimpleFrom'

function App() {


  
  // const handleSingUpSubmit = data => {
  //   console.log('sing up data', data);
  // }
  // const handleUpdateProfile = data => {
  // console.log('update profile', data);
  // }
  return (
    <>
   
      <h1>FROM_MASTER</h1>
      <Grandpa></Grandpa>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StatefulFrom></StatefulFrom> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookFrom></HookFrom> */}
{/* 
      <ReusableFrom formTitle={'sing up'} handleSubmit={handleSingUpSubmit}>
        <div>
          <h2>Sing Up</h2>
          <p>Please sing up right now</p>
        </div>
      </ReusableFrom>
      <ReusableFrom formTitle={'profile Update'} handleSubmit={handleUpdateProfile} SubmitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableFrom> */}
    </>
  )
}

export default App
