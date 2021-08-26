import './App.css';
import {useState,useEffect} from 'react'
let grosswhilepurchase="";
var oldprice="";
var todaysgross;
let todaysprice="";
var quantity="";
var status="";
var margin="";
var marginpercent;
function App() {
  var [margin,setmargin]=useState();
  var [marginpercent,setmaginpercent]=useState();
  var [status,setstatus]=useState()
function HandleSubmit()
{
  
  oldprice=document.getElementById("old-price").value;
  quantity=document.getElementById("quantity").value;
  todaysprice=document.getElementById("todaysprice").value;
  grosswhilepurchase=oldprice*quantity;
  todaysgross=todaysprice*quantity;
  margin=(todaysgross-grosswhilepurchase);
  if(margin<0)
  {
    status="Loss";
    margin=Math.abs(margin)
  }
  else{
    status="Profit"
  }
  marginpercent=((margin)/grosswhilepurchase)*100;
  
  setmargin(margin)
  setmaginpercent(marginpercent)
  setstatus(status)
  // useEffect(
  //   ()=>{margin=margin}
  // )
  console.log(`${grosswhilepurchase} todays gross=${todaysgross} margin=${margin} marginpercent=${marginpercent}`)
}
  return (
    <div className="App">
      <table>
        <tbody>
        <tr>
          <td>
          <label for="old-price"> Stock Price While Purchasing</label>
            <input type="number" id='old-price' ></input>
          </td>
          <td>
            <label for="quantity"> Quantity of Shares</label>
            <input type="number" id='quantity' ></input>
          </td>
          <td>
            <label for="todaysprice"> Todays Stock Price</label>
            <input type="number" id='todaysprice' ></input>
          </td>
        </tr>
        <tr>
          <td><button onClick={()=>HandleSubmit()}>Submit</button>
          </td>
        </tr>
        <tr>
          <td>
          <p>Gross Value While Purchasing :{grosswhilepurchase}</p>
          </td>
          <td>
          <p>Todays Gross Value :{todaysgross}</p>
          </td>
        </tr>
        </tbody>
      </table>
      <h1>Current Status :{status} </h1>
      <h1>Margin :{margin}</h1>
      <h1>Margin Percent:{marginpercent}</h1>
    </div>
  );
}

export default App;
