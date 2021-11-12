// if data in Array  format then
import Avatar from "./Avatar";
import "./bootstrap.css";
const AvatarList = () => {
  const data = [
    {
      id: 1,
      name: "Mayank",
      role: "Python developer",
    },
    {
      id: 2,
      name: "Aryan",
      role: "Full Stack developer",
    },
    {
      id: 3,
      name: "Rohit",
      role: "MernStack developer",
    },
    {
      id: 4,
      name: "Sourbh",
      role: "C developer",
    },
    {
      id: 4,
      name: "Sourbh",
      role: "C developer",
    },
    {
      id: 4,
      name: "Sourbh",
      role: "C developer",
    },
    {
      id: 5,
      name: "kamran",
      role: "all Rounder developer",
    },
  ];
  const Ndata = data.map((avtarcard, i) => {
        return(
    <div class="col-sm-3">
     <Avatar id={data[i].id} name={data[i].name} role={data[i].role} />;
    </div>
        )
  });

  return (
    <div>
      <h1>WellCome To Avtar World</h1>
      <div class="row">
      {Ndata}
      <button>subcsdribe</button>
    </div>
    </div>
  )
};
export default AvatarList;
