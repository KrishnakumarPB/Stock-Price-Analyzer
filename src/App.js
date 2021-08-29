import './App.css';
import {useState} from 'react'
let grosswhilepurchase="";
var oldprice="";
var todaysgross;
let todaysprice="";
var quantity="";
function App() {
  var [margin,setmargin]=useState();
  var [marginpercent,setmaginpercent]=useState();
  var [status,setstatus]=useState()
function HandleSubmit(e)
{
  oldprice=document.getElementById("old-price").value;
  quantity=document.getElementById("quantity").value;
  todaysprice=document.getElementById("todaysprice").value;
  grosswhilepurchase=oldprice*quantity;
  todaysgross=todaysprice*quantity;
  margin=(todaysgross-grosswhilepurchase);
  if(margin<0)
  {
    document.querySelector(".result").style.backgroundColor="rgb(255, 0, 106)";
    status="Loss";
    margin=Math.abs(margin)
  }
  else{
    status="Profit";
    document.querySelector(".result").style.backgroundColor="#34eb55";
  }
  marginpercent=Math.round(((margin)/grosswhilepurchase)*100);
  if(marginpercent>=50 && status==="Loss")
  {
    document.body.style.backgroundColor="#ed4928"
  }
  else{
    document.body.style.backgroundColor="white"
  }
  setmargin(margin)
  setmaginpercent(marginpercent)
  setstatus(status)
  
  e.preventDefault();
  // useEffect(
  //   ()=>{margin=margin}
  // )
  console.log(`${grosswhilepurchase} todays gross=${todaysgross} margin=${margin} marginpercent=${marginpercent}`)
}
  return (
    <div className="App body d-flex justify-content-center align-items-center">
      <div className="container  mt-3 mb-3 ">
        <header className="header  ">
          <h1>Stock Prize Analyzer</h1>
        </header>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 col-md-8 col-10  input">
            <h2>Inputs</h2>
            <form onSubmit={HandleSubmit} className="form-inline d-block mt-3"  >
            <table className="table table-striped">
              <tbody align="left">
                <tr>
                  <td align ="left" >
                  <label for="old-price" className="label "><p> Stock Price While Purchasing</p></label>
                  </td>
                  <td align="left">
                  <input type="number" className="form-control" id='old-price'required ></input>
                  </td>
                </tr>
                <tr>
                  <td align ="left" >
                  <label for="quantity" className="label "> Quantity of Shares</label>
                  </td>
                  <td>
                  <input type="number" className="form-control " id='quantity' required></input>
                  </td>
                </tr>
                <tr>
                  <td align ="left" >
                  <label for="todaysprice" className="label "> Todays Stock Price</label>
                  </td>
                  <td>
                  <input type="number" className="form-control " id='todaysprice' required></input>
                  </td>
                </tr>
              </tbody>
            </table>
            <button  type="submit" class="btn btn-primary" >Submit</button>
            </form>
          </div>
          <div className="col-lg-5 col-md-8 col-10  result ">
            <h2>Results</h2>
            <table className="table table-striped mt-3" >
              <tbody align="left">
              <tr>
              <td>
              <p>Current Status</p>
              </td>
              <td>
              <p><span className="status">{status}</span></p>
              </td>
            </tr>
            <tr>
              <td>
              <p>Margin</p>
              </td>
              <td>
              <p>{margin}</p>
              </td>
            </tr>
            <tr>
              <td>
              <p>Margin Percent</p>
              </td>
              <td>
              <p>{marginpercent}</p>
              </td>
            </tr>
            <tr>
              <td>
              <p>Gross Value While Purchasing</p>
              </td>
              <td>
              <p>{grosswhilepurchase}</p>
              </td>
            </tr>
            <tr>
              <td>
              <p>Todays Gross Value</p>
              </td>
              <td>
              <p>{todaysgross}</p> 
              </td>
            </tr>
            </tbody>
            </table>
          </div>
         
    </div>
    {/* <div class="animation-area">
		<ul class="box-area">
			<li className="emoji"><h1>😍</h1></li>
			<li className="emoji"><h1>😍</h1></li>
			<li className="emoji"><h1>😍</h1></li>
			<li className="emoji"><h1>😍</h1></li>
			<li className="emoji"><h1>😍</h1></li>
			<li className="emoji"><h1>😍</h1></li>
		</ul>
	</div> */}
  </div>
    </div>
  );
}

export default App;
