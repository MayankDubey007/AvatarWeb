// if data in Array  format then  
import Avatar from "./Avatar";
import "./bootstrap.css";
const AvatarList = ()=>{

    const data = [
        {
            id:1,
            name:"Mayank",
            role:"Python developer"
        },
        {
            id:2,
            name:"Aryan",
            role:"Full Stack developer"
        },
        {
            id:3,
            name:"Rohit",
            role:"MernStack developer"
        },
        {
            id:4,
            name:"Sourbh",
            role:"C developer"
        }
    ]

    return(

        
<div class="container">
    <h1>Wellcome To Avtar_World</h1>
<div class="row">
  <div class="col-sm-3">
  <Avatar name={data[0].name} role={data[0].role} />
  </div>
  <div class="col-sm-3">
  <Avatar name={data[1].name} role={data[1].role} />
  </div>
  <div class="col-sm-3">
  <Avatar name={data[2].name} role={data[2].role} />
  </div>
  <div class="col-sm-3">
  <Avatar name={data[3].name} role={data[3].role} />
  </div>
</div>
<button>subcribe</button>
</div>

    )

}
export default AvatarList;
