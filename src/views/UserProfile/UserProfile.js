import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Chart from "./Chart";
import PieGraph from "./PieGraph";
import { AutoScaleAxis } from "chartist";
import Stats from "./Stats";
import Interest from "./Interest";

const useStyles = makeStyles((theme) => ({
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  Alignment: {
    alignItems: "left",
    justifyContent: "left",
    textAlign: "left",
  },
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 1),
  },
  card: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  centerPie: {
    justifyContent: "center",
    alignItems: "center",
    display: 'flex',
  }
}));

    
function useInterest() {
  const [interest, setInterest] = useState();
  
  function hello(){
      setInterest(e.target.value/100)
  }
      return [interest, setInterest];
  
  };
function useAge() {
    const [age, setAge] = useState();
    
    function hello(){
        setInterest(e.target.value/100)
    }
        return [age, setAge];
    
    };

export default function (props) {
const [interest, setInterest] = useInterest();
 const [amount, setAmount] = useState();
 const [age, setAge] = useAge();
 const [income, setIncome] = useState();
 const [expenses, setExpenses] = useState();
 const [retirement, setRetirement] = useState();
 const [savings, setSavings] = useState();
 const [final, setFinal] = useState();
 const [collapse, setCollapse] = useState(true);
 const [pieChart, setPieChart] = useState(true);
 const spending = income-final-expenses;
 const classes = useStyles();

    
  function calculate() {
  const result = (interest/12*(amount-savings*(1+interest/12)**((retirement-age)*12)))/((1+interest/12)**((retirement-age)*12)-1).toFixed(2)
    // (r/12*(1000000-I*(1+r/12)**(t*12)))/((1+r/12)**(t*12)-1)
    const test = (income-savings)

    setPieChart(false)
    setFinal(result.toFixed(2)) 
  if (result>0){
    setCollapse(false)
  }
  // invalid response 
  else if(age< 0 || age>100){
    alert("Invalid Response: Current Age must be greater than 0 age and less than 100")
  }
  else if(savings< 0){
    alert("Invalid Response: System cannot acccept negative savings")
  }
  else if(income< 0){
    alert("Invalid Response: system cannot accept negative income")
  }
  else if(retirement> 100 || retirement<age){
    alert("Invalid Response: Retirement Age must be greater than current age and less than 100")
  }
  // display based on feilds that were not filled
  if (income<1 ){
    setPieChart(true)
  }
  if (Number(expenses)>Number(income) ){
    setPieChart(true)
    console.log("howdy")
  }
  if (income<Number(result)){
    setPieChart(true)
    console.log("ho")
  }
  if (expenses<0){
    setPieChart(true)
  }
  };

  return (
    <div className="root">
      <GridContainer>
        <GridItem xs={12} sm={12} md={15}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Monthly Contribution Calculator</h4>
              <p className={classes.cardCategoryWhite}>Calculate how much money you need to invest per month to reach your longterm goals</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Current Age?"
                    id="username"
                    change={(e) => setAge(e.target.value)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Current Savings?"
                    id="email-address"
                    type="number"
                    change={(e) => setSavings(e.target.value)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Monthly Salary?"
                    id="Monthly Salary"
                    type="number"
                    change={(e) => setIncome(e.target.value)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Expenses?"
                    id="Expenses"
                    type="number"
                    change={(e) => setExpenses(e.target.value)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Ideal age of retirement?"
                    id="last-name"
                    change={(e) => setRetirement(e.target.value)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="How much do you want?"
                    id="city"
                    change={(e) => setAmount(e.target.value)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Annual Interest rate?"
                    id="country"
                    change={(e) => setInterest(e.target.value/100)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem xs={6} sm={6} md={6}>
                  <Button color="primary" onClick={calculate}>Calculate</Button>
                  <Typography style={{display: collapse ? 'none' : '' }}>Monthly Contibution: ${final}</Typography>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    
    <GridContainer >
      <Card style={{display: collapse ? 'none' : '' }}>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Bar Chart Breakdown</h4>
              <p className={classes.cardCategoryWhite}>Scroll over each bar to see projected value by year</p>
            </CardHeader>
            <CardBody>
      <Chart age={age} retirement={retirement}  savings={savings} amount={amount} contributions={final} interest={interest}/>
    </CardBody>
    </Card>
    <Card style={{display: pieChart ? 'none' : '' }}>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Important Nubers</h4>
              <p className={classes.cardCategoryWhite}></p>
            </CardHeader>
            <CardBody>
      <Stats income={income} spending={spending} expenses={expenses} final={final}/>
    </CardBody>
    </Card>
    </GridContainer>
    <GridContainer>
    <Grid container spacing={3}>
    <Grid item xs={12}>
      <Card style={{display: pieChart ? 'none' : '' }}>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Budget Distribution</h4>
              <p className={classes.cardCategoryWhite}>salary breakdown</p>
            </CardHeader>
    <CardBody className={classes.centerPie}>

      <PieGraph contributions={final} income={income} spending={spending} expenses={expenses}/>

    </CardBody>
    </Card>
    </Grid>
    {/* <Grid item xs={12}>
      <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Bar Chart Breakdown</h4>
              <p className={classes.cardCategoryWhite}>Scroll over each bar to see projected value by year</p>
            </CardHeader>
    <CardBody className={classes.centerPie}>

      <PieGraph contributions={final} income={income} spending={spending} expenses={expenses}/>

    </CardBody>
    </Card>
    </Grid> */}
    </Grid>
    </GridContainer>
    </div>


  );
  // export const interest
}

