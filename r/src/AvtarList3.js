import Avatar from "./Avatar";
import "./bootstrap.css";
const AvatarList = () => {
  return (
    <div class="container">
      <h1>Wellcome To Avtar_World</h1>
      <div class="row">
        <div class="col-sm-3">
          <Avatar name="Aryaan" role="Full Stack Devloper" />
        </div>
        <div class="col-sm-3">
          <Avatar name="Mayank" role="React And Django Devlopper" />
        </div>
        <div class="col-sm-3">
          <Avatar name="Rohit" role="Mern Stack Devlopper" />
        </div>
        <div class="col-sm-3">
          <Avatar name="Shubham" role="java Backend Devlopper" />
        </div>
      </div>
      <button>subcribe</button>
    </div>
  );
};
export default AvatarList;
