import Card from "./card";
export default function App(){
  let item=[{
    title: "Free",
    price: "$0",
    period: "/month",
    list1 : ["Single User","5GB Storage","Unlimited Public Projects","Community Access"],
    list2 : ["Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"],
  },{
    title: "Plus",
    price: "$9",
    period: "/month",
    list1: ["5 Users","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain"],
    list2: ["Monthly Status Reports"]
  },{
    title: "Pro",
    price: "$49",
    period:"/month",
    list1: ["Unlimited Users","150GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Unlimited Free Subdomains","Monthly Status Reports"],
    list2:[]
  }
]
  return <section class="pricing py-5">
  <div class="container">
  <div class="row">
      {
        item.map((obje)=>{
          return <Card obj={obje}></Card> 
        })
      }
  </div>
</div>
</section>
}