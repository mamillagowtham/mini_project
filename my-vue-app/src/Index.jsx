import React from "react";

const Index = ({name,phone,mail}) => {
  return (
    <>
      <div style={{display:"flex"}}>
        <div>
          <img src="https://media.istockphoto.com/id/1220701258/photo/sit-less-and-walk-more.jpg?s=612x612&w=0&k=20&c=uQvi4uvthrhPNFv3knxlJNTg5jtLptynTDZBxMzIPVs=" style={{height:"300px", width:"300px"}}/>
          <h1>{name}</h1>
          <h4>{phone}</h4>
          <p>{mail}</p>
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/1220701258/photo/sit-less-and-walk-more.jpg?s=612x612&w=0&k=20&c=uQvi4uvthrhPNFv3knxlJNTg5jtLptynTDZBxMzIPVs=" style={{height:"300px", width:"300px"}} />
          <h1>{name}</h1>
          <h4>{phone}</h4>
          <p>{mail}</p>
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/1220701258/photo/sit-less-and-walk-more.jpg?s=612x612&w=0&k=20&c=uQvi4uvthrhPNFv3knxlJNTg5jtLptynTDZBxMzIPVs=" style={{height:"300px", width:"300px"}} />
          <h1>{name}</h1>
          <h4>{phone}</h4>
          <p>{mail}</p>
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/1220701258/photo/sit-less-and-walk-more.jpg?s=612x612&w=0&k=20&c=uQvi4uvthrhPNFv3knxlJNTg5jtLptynTDZBxMzIPVs=" style={{height:"300px", width:"300px"}} />
          <h1>{name}</h1>
          <h4>{phone}</h4>
          <p>{mail}</p>
        </div>
      </div>
    </>
  );
};

export default Index;
