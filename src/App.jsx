import {useState} from "react";
function App() {
  const [weight,setWeight]=useState(0);       /*BMI Weight*/
  const [height, setHeight] = useState(0);    /*BMI Height*/
  const [result, setresult] = useState(0);    /*BMI Result*/
  const [baseAmount, setbaseAmount] = useState(0);   /*Interest baseAmount*/
  const [rate, setRate] = useState(0);             /*Interest Rate*/
  const [time, setTime] = useState(0);             /*Interest Time*/
  const [total, setTotal] = useState(0);           /*Interest Total Amount*/ 
  const [inputShape, setInputShape] = useState(""); /*Area Input Shape*/ 
  const [shape, setShape] = useState("");           /*Area  Shape*/
  const [radius, setRadius] = useState(0);        /*Radius for circle*/
  const [area, setArea] = useState(0);            /*Area output*/
  const [length, setLength] = useState(0);           /*length for rectangle*/
  const [width, setWidth] = useState(0);             /*Width for rectangle*/
  const [base, setBase] = useState(0);              /*Base for Triangle*/

  function interest(e) {
    e.preventDefault();
    const ratee=rate/100;
    const interest = (baseAmount*ratee*time);
    const Totalamount = baseAmount + interest;
    setTotal(Totalamount);
  }
  function handleSubmit(e) {
    e.preventDefault();

    setShape(inputShape.toLowerCase());
  }

  function calculateArea() {
    if (shape === "circle") {
      const result = Math.PI * radius * radius;
      setArea(result);
    }
    if (shape === "rectangle") {
      const result = length*width;;
      setArea(result);
    }
    if (shape === "triangle") {
      const result = (height*base)/2;
      setArea(result);
    }
  }
  function CalculateBMI(e) {
  e.preventDefault();
    if (weight <= 0 || height<=0 ) {
    alert("Please enter valid weight and height")
  }
    const Calculate = (weight / (height * height));
    setresult(Calculate);
 }
  return(
    <div>
      {/* BMI Calculator */}
      <div>
        <h1>
          BMI Calculator
        </h1>
        <form onSubmit={CalculateBMI}>
          <div>
            <input type="number" step="any" name="weight" id="weight" placeholder="Enter Your Weight in Kg"
              onChange={(e)=>setWeight(e.target.value)} />
          </div>
          <div>
            <input type="number" step="any" name="height" id="height" placeholder="Enter Your height in meter" 
              onChange={(e)=>setHeight (e.target.value)}/>
          </div>
          <button type="submit">Calculate</button>
        </form>
        <p>Your Calculated BMI is {result.toFixed(2)}</p>
      </div>
      {/* Interest */}
      <div> 
        <h1>Interest Calculator</h1>
        <form onSubmit={interest}> 
          <div>
          <input type="number" step="any" name="baseAmount" id="baseAmount" placeholder="Enter Amount you Borrow" onChange={(e) => setbaseAmount(Number(e.target.value))} />
          </div>
          <div>
          <input type="number" step="any" name="rate" id="rate" placeholder="Enter annual rate of interest"
           onChange={(e)=>setRate(Number(e.target.value))}/>
          </div>
          <div>
          <input type="number" step="any" name="time" id="time" placeholder="Enter time in which you return"
            onChange={(e) =>setTime(Number(e.target.value))} />
          </div>
              <button type="submit">Calculate</button>
          </form>
          <p>Your total amount need to return {total.toFixed(2)}</p>
      </div>
      {/* Area Calculator */}
      <div>
        <h1>Shape Area Calculator</h1>

        <form onSubmit={handleSubmit}>

          {/* This input NEVER disappears */}
          <input
            type="text"
            placeholder="Circle,Rectangle,Triangle"
            value={inputShape}
            onChange={(e) => setInputShape(e.target.value)}
          />

          <button type="submit">
            Select Shape
          </button>

        </form>

        {/* Circle */}
        {/* This appears after submitting the shape */}
        {shape === "circle" && (
          <div>
            <input
              type="number"
              step="any"
              name="radius"
              id="radius"
              placeholder="Enter radius"
              onChange={(e) => setRadius(Number(e.target.value))}
            />

            <button onClick={calculateArea}>
              Calculate Area
            </button>
          </div>
        )}
        {/* Rectangle */}
        {shape === "rectangle" && (
          <div>
            <div>
            <input
              type="number"
              step="any"
              name="length"
              id="length"
              placeholder="Enter Length"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            </div>
            <div>
              <input
                type="number"
                step="any"
                name="width"
                id="width"
                placeholder="Enter Width"
                onChange={(e) => setWidth(Number(e.target.value))}
              />
            </div>
            <button onClick={calculateArea}>
              Calculate Area
            </button>
          </div>
        )}

  {/* Triangle */}
        {shape === "triangle" && (
          <div>
            <div>
              <input
                type="number"
                step="any"
                name="base"
                id="base"
                placeholder="Enter Base"
                onChange={(e) => setBase(Number(e.target.value))}
              />
            </div>
            <div>
              <input
                type="number"
                step="any"
                name="height"
                id="height"
                placeholder="Enter height"
                onChange={(e) => setHeight(Number(e.target.value))}
              />
            </div>
            <button onClick={calculateArea}>
              Calculate Area
            </button>
          </div>
        )}
        {area > 0 && (
          <h2>
            Area of {inputShape} = {area.toFixed(2)}
          </h2>
        )}
      </div>
    </div>
  )
}
export default App;