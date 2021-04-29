export default function Card(props){
    return <div class="col-lg-4">
    <div class="card mb-5 mb-lg-0">
      <div class="card-body">
        <h5 class="card-title text-muted text-uppercase text-center">{props.obj.title}</h5>
        <h6 class="card-price text-center">{props.obj.price}<span class="period">{props.obj.period}</span></h6>
        <hr></hr>
        <ul class="fa-ul">
          {
            (props.obj.list1).map((lists1)=>{
              return <>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{lists1}</li>
              </>
            })
            
          }
          {
              (props.obj.list2).map((lists2)=>{
              return <>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{lists2}</li>
              </>
            })
          }
          
        </ul>
        <a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
}