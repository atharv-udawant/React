import './Demo.css'
import logo192 from './logo192.png'
function  Demo()
{

    let  uesrsArray =  [
        {"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":logo192,"star":2},
        {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg","star":1},
        {"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg","star":4},
        {"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg","star":3},
        {"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg","star":5},
        {"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg","star":4},
        ];
const generatestar = (star )=> {
    const stars = [];
    for (let i=0; i <star ; i++){
        stars.push(<span key={i} className="fa fa-star checked" ></span>)
    }
    return stars;
    
}

        let  resultsArray = uesrsArray.map((item, index) => 
        {
            return <div  className='card' key={index}>                       
                        <img src={item.avatar}   /> <br/>
                        <span>{item.first_name + " " + item.last_name}</span>  <br/>
                        <span className="email">{item.email}</span>  <br/>
                       {generatestar(item.star)}
                        {/* <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span> <br/> */}
                        <br/>
                        <button type="button" class="btn">Book Appointment</button>
                    </div>;
        });


    return (
        <>
			 <h3 style={  {color:"blue", border: "2px solid blue", padding:"5px", textAlign:"center"}  }>Applying Styles to React Components</h3>
             <hr/>


            {resultsArray}    

            
        </>
    );
}

export default Demo;