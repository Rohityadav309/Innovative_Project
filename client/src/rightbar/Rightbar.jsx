// import "./rightbar.css";
// import { Paper } from "@mui/material";

// export default function Rightbar() {
//   return (
//     <Paper elevation={3} style={{ padding: "15px", marginTop: "30px",marginRight:"10px" }}>
//       <h4 className="rightbarTitle">User information</h4>
//       <div className="rightbarInfo">
//         <div className="rightbarInfoItem">
//           <span className="rightbarInfoKey">City:</span>
//           <span className="rightbarInfoValue">Kolkata</span>
//         </div>
//         <div className="rightbarInfoItem">
//           <span className="rightbarInfoKey">From:</span>
//           <span className="rightbarInfoValue">Newtown</span>
//         </div>
//         <div className="rightbarInfoItem">
//           <span className="rightbarInfoKey">Relationship:</span>
//           <span className="rightbarInfoValue">Single</span>
//         </div>
//       </div>
//       <h4 className="rightbarTitle">User friends</h4>
//       <div className="rightbarFollowings">
//         <div className="rightbarFollowing">
//           <img
//             src="assets/person/img11.jpg"
//             alt=""
//             className="rightbarFollowingImg"
//             style={{ height: 135 }}
//           />
//           <span className="rightbarFollowingName">Rahul Singh</span>
//         </div>
//         <div className="rightbarFollowing">
//           <img
//             src="assets/person/img12.jpg"
//             alt=""
//             className="rightbarFollowingImg"
//             style={{ height: 135 }}
//           />
//           <span className="rightbarFollowingName">Maloti Mondal</span>
//         </div>
//         <div className="rightbarFollowing">
//           <img
//             src="assets/person/img13.jpg"
//             alt=""
//             className="rightbarFollowingImg"
//             style={{ height: 135 }}
//           />
//           <span className="rightbarFollowingName">Praveen Das</span>
//         </div>
//         <div className="rightbarFollowing">
//           <img
//             src="assets/person/img14.jpg"
//             alt=""
//             className="rightbarFollowingImg"
//             style={{ height: 135 }}
//           />
//           <span className="rightbarFollowingName">Sayantan Haz</span>
//         </div>
//         <div className="rightbarFollowing">
//           <img
//             src="assets/person/img15.jpg"
//             alt=""
//             className="rightbarFollowingImg"
//             style={{ height: 135 }}
//           />
//           <span className="rightbarFollowingName">Ankita Kundu</span>
//         </div>
//         <div className="rightbarFollowing">
//           <img
//             src="assets/person/img16.jpg"
//             alt=""
//             className="rightbarFollowingImg"
//             style={{ height: 135 }}
//           />
//           <span className="rightbarFollowingName">Saptrishi Saha</span>
//         </div>
//       </div>
//       <h4 className="rightbarTitle">People you may know</h4>
//       <div className="rightbarFollowings">
//         <div className="rightbarFollowing">
//           <img
//             src="assets/person/img17.jpg"
//             alt=""
//             className="rightbarFollowingImg"
//             style={{ height: 135 }}
//           />
//           <span className="rightbarFollowingName">Anup Samanta</span>
//         </div>
//         <div className="rightbarFollowing">
//           <img
//             src="assets/person/img18.jpg"
//             alt=""
//             className="rightbarFollowingImg"
//             style={{ height: 135 }}
//           />
//           <span className="rightbarFollowingName">Deva Giri</span>
//         </div>
//         <div className="rightbarFollowing">
//           <img
//             src="assets/person/img19.jpg"
//             alt=""
//             className="rightbarFollowingImg"
//             style={{ height: 135 }}
//           />
//           <span className="rightbarFollowingName">Mona khair</span>
//         </div>
//         <div className="rightbarFollowing">
//           <img
//             src="assets/person/img20.jpg"
//             alt=""
//             className="rightbarFollowingImg"
//             style={{ height: 135 }}
//           />
//           <span className="rightbarFollowingName">Souvik Maity</span>
//         </div>
//         <div className="rightbarFollowing">
//           <img
//             src="assets/person/1.jpeg"
//             alt=""
//             className="rightbarFollowingImg"
//             style={{ height: 135 }}
//           />
//           <span className="rightbarFollowingName">Kirti Yadav</span>
//         </div>
//         <div className="rightbarFollowing">
//           <img
//             src="assets/person/2.jpeg"
//             alt=""
//             className="rightbarFollowingImg"
//             style={{ height: 135 }}
//           />
//           <span className="rightbarFollowingName">Debakar Ghosh</span>
//         </div>
//       </div>
//     </Paper>
//   );
// }
import React from "react";

export default function Rightbar() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-6 mr-2">
      <h4 className="text-lg font-semibold mb-4">User information</h4>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">City:</span>
          <span className="text-gray-800">Kolkata</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">From:</span>
          <span className="text-gray-800">Newtown</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Relationship:</span>
          <span className="text-gray-800">Single</span>
        </div>
      </div>

      <h4 className="text-lg font-semibold mt-6 mb-4">User friends</h4>
      <div className="grid grid-cols-3 gap-4">
        {[
          { name: "Rahul Singh", img: "assets/person/img11.jpg" },
          { name: "Maloti Mondal", img: "assets/person/img12.jpg" },
          { name: "Praveen Das", img: "assets/person/img13.jpg" },
          { name: "Sayantan Haz", img: "assets/person/img14.jpg" },
          { name: "Ankita Kundu", img: "assets/person/img15.jpg" },
          { name: "Saptrishi Saha", img: "assets/person/img16.jpg" },
        ].map((friend, index) => (
          <div key={index} className="text-center">
            <img
              src={friend.img}
              alt=""
              className="w-full h-32 object-cover rounded-lg"
            />
            <span className="block mt-2 text-sm text-gray-700">{friend.name}</span>
          </div>
        ))}
      </div>

      <h4 className="text-lg font-semibold mt-6 mb-4">People you may know</h4>
      <div className="grid grid-cols-3 gap-4">
        {[
          { name: "Anup Samanta", img: "assets/person/img17.jpg" },
          { name: "Deva Giri", img: "assets/person/img18.jpg" },
          { name: "Mona Khair", img: "assets/person/img19.jpg" },
          { name: "Souvik Maity", img: "assets/person/img20.jpg" },
          { name: "Kirti Yadav", img: "assets/person/1.jpeg" },
          { name: "Debakar Ghosh", img: "assets/person/2.jpeg" },
        ].map((person, index) => (
          <div key={index} className="text-center">
            <img
              src={person.img}
              alt=""
              className="w-full h-32 object-cover rounded-lg"
            />
            <span className="block mt-2 text-sm text-gray-700">{person.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
