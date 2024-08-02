
// 3. ADDING CSS

// import Button from './Button/Button.jsx'
// function App() {
  

//   return (
//     <Button/>
 
//   );
// }

// export default App




//  4. PROPS


// import Student from './Student.jsx'
// function App() {
//   return (
//     <>
//     <div className="STUDENT">
//     <Student name="MK" age={21} isStudent={true}></Student>
//     <Student name="JK" age={22} isStudent={false}></Student>
//     </div>
//     </>
//   )
// }
// Student.defaultProps={
//   name:"Guest",
//   age:0,
//   isStudent:false,
// }

// export default App


// BOILER PLATE CODE OF App.jsx
// function App()
// {
//     return (
//         <>
        
//         </>

//     );

// }
// export default App
 
// 5.CONDITIONAL RENDERING

// import UserGreeting from './UserGreeting.jsx'
// function App()
// {
//     return (
//         <>
//         <UserGreeting isLoggedIn={true}
//         username="BroCode"/>
        
        

//         </>

//     );

// }
// export default App

// 6.RENDER LISTS
// import List from './List.jsx' 
// function App()
// {
//     const fruit=[{id:1,name :"apple",calories:95},
//                  {id:2,name:"orange",calories:45},
//                  {id:3,name:"banana",calories:105},
//                  {id:4,name:"cocnut",calories:159},
//                  {id:5,name:"pineapple",calories:37}];


//     const vegetable=[{id:1,name :"potatoes",calories:110},
//                 {id:2,name:"celery",calories:15},
//                 {id:3,name:"carrots",calories:25},
//                 {id:4,name:"corn",calories:63},
//                 {id:5,name:"broccoli",calories:50}];             
    
//     return (
//         <>
//             {fruit.length>0 &&<List items={fruit} category="fruit"/>}
//             {fruit.length>0 &&<List items={vegetable} category="Vegetables"/>}
//         </>
//         );

// }

// export default App

// 7.CLICK EVENT
// import Button from'./Button'

// import ProfilePic from './profilepic.jsx';

// function App() {
//     return (
//         <div>
//             <ProfilePic />
//         </div>
//     );
// }

// export default App;


//8 And 9.use state

// import MyComponent from './MyComponent.jsx'
// function App()
// {
//     return(
//         <MyComponent/>

//     );
// }
// export default App

// 10.COLOR PICKER
// import ColorPicker from './Colorpicker.jsx'
// function App()
// {
//     return(
    
    
//     <ColorPicker/>
        

//     );
// }
// export default App

// 11.UPDATER FUNCTION

//12. ,13. , 14.  UPDATE OBJECT,UPDAYTE ARRAY OF OBJECT,
// import MyComponent from './MyComponent.jsx'
// function App()
// {
//     return(
//         <MyComponent/>

//     );
// }
// export default App

import ToDoList from './ToDoList.jsx'
function App()
{
    return(
        <ToDoList/>

    );
}
export default App





