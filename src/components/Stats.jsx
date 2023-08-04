import React from "react";
import { useSelector } from "react-redux";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    SimpleGrid,
    Heading,
    Text,
    Button,
  } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);



const Stats = () => {
  const products = useSelector((state) => state.products);
  const shirt = products.filter((el) => el.Category == "Shirts");
  const Jeans = products.filter((el) => el.Category == "Jeans");
  const Trousers = products.filter((el) => el.Category == "Trousers");
  const Suits = products.filter((el) => el.Category == "Suits");
  const Saree = products.filter((el) => el.Category == "Saree");
  console.log(Saree);
  const Kurti = products.filter((el) => el.Category == "Kurti");
  const Lehenga = products.filter((el) => el.Category == "Lehenga");
  const Jackets = products.filter((el) => el.Category == "Jackets");

  //gender
  const male = products.filter((el) => el.Gender == "Male");
  const female = products.filter((el) => el.Gender == "Female");

  //chart data

  const catData = {
    labels: [
      "Shirts",
      "Jeans",
      "Trousers",
      "Suits",
      "Saree",
      "Kurti",
      "Lehenga",
      "Jackets",
    ],
    datasets: [
      {
        data: [
          shirt.length,
          Jeans.length,
          Trousers.length,
          Suits.length,
          Saree.length,
          Kurti.length,
          Lehenga.length,
          Jackets.length,
        ],
        backgroundColor: ["#4CAF50", "#ff0000", "#0000ff", "#3cb371"],
      },
    ],
  };

  const genderData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [male.length, female.length],
        backgroundColor: ["#4CAF50", "#ff0000"],
      },
    ],
  };
  console.log(genderData);

  return (
    <div>
      {/* crads  */}

      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <Card>
          <CardHeader>
            <Heading size="md"> Shirt</Heading>
          </CardHeader>
          <CardBody>
            <Text>
             {shirt.length}
            </Text>
          </CardBody>
          
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Jeans</Heading>
          </CardHeader>
          <CardBody>
            <Text>
             {Jeans.length}
            </Text>
          </CardBody>
         
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Trousers</Heading>
          </CardHeader>
          <CardBody>
            <Text>
            {Trousers.length}
            </Text>
          </CardBody>
        
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Suits</Heading>
          </CardHeader>
          <CardBody>
            <Text>
            {Suits.length}
            </Text>
          </CardBody>
        
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Saree</Heading>
          </CardHeader>
          <CardBody>
            <Text>
            {Saree.length}
            </Text>
          </CardBody>
        
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Lehenga</Heading>
          </CardHeader>
          <CardBody>
            <Text>
            {Lehenga.length}
            </Text>
          </CardBody>
        
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Kurti</Heading>
          </CardHeader>
          <CardBody>
            <Text>
            {Kurti.length}
            </Text>
          </CardBody>
        
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Jackets</Heading>
          </CardHeader>
          <CardBody>
            <Text>
            {Jackets.length}
            </Text>
          </CardBody>
        
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Female</Heading>
          </CardHeader>
          <CardBody>
            <Text>
            {female.length}
            </Text>
          </CardBody>
        
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Male</Heading>
          </CardHeader>
          <CardBody>
            <Text>
            {male.length}
            </Text>
          </CardBody>
        
        </Card>
      </SimpleGrid>
<div style={{display:"flex",justifyContent:"space-around"}}>

      <h2>Category Chart</h2>
      <div style={{width:"60%"}}>
        <Pie data={catData} />
      </div>
      <h2>Category Chart</h2>
      <div style={{width:"60%"}}>
        <Pie data={genderData} />
      </div>
</div>
    </div>
  );
};

export default Stats;
