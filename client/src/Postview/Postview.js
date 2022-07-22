import { useEffect, useState } from "react";
import "./Postview.css";
import Header from "../Header/Header"
const Postview = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/post/getpost")
      .then((data) => {
        return data.json();
      })
      .then((userData) => {
        setUserData(userData.reverse());
      });
  }, []);
  return (
    <>
    <Header></Header>
      <div className="container">
        <div className="post">
          {userData.map((user, i) => {
            return (
              
              <div className='post_frame'>
                  <div className='user-information' key={i}>
                       <span id='dot'><img src="dots.svg" alt="dooots" /></span>
                  <h3 className="name">
                    {user.author}{" "}
                    
                  </h3>
                  
                  <span>{user.location}</span>
                </div>

                
                <div className='user-image'>
                        <img id="img" src={user.image} alt="user defined image"></img>
                </div>

                
                <div className='user-meta'>
                            <span id="heart"><img src="heart.svg" alt="heart" /></span>
                            <span id='send'><img src="send2.svg" alt="send" /></span>
                            <span>{user.date }</span>
                       </div><br />

                       <div className='user-likes'>
                        {user.likes} likes
                       </div>
                       <strong><div className='user-description'>
                        {user.description}
                       </div></strong>
                       </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Postview;











