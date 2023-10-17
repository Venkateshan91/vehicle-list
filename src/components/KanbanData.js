import { v4 as uuidv4 } from "uuid";
export const data = [
    {
        id:"1",
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/51909/a4-exterior-right-front-three-quarter-2.jpeg?q=80&q=80",
        make: "Audi",
        model: "A3",
        price: "$40000",
        year: "2015",
        mileage: "15000",
        status: "Blocked",
        isFavorite: false
      },
      {
        id:"2",
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/28379/q3-exterior-right-front-three-quarter-93481.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "A3",
        price: "$35000",
        year: "2013",
        mileage: "18000",
        status: "Available",
        isFavorite: true
      },
      {
        id:"3",
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/39472/a6-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "A3 Sportback e-tron",
        price: "$41000",
        year: "2016",
        mileage: "12000",
        status: 'Available',
        isFavorite: true
      },
      {
        id:"4",
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/141373/q3-sportback-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "A4",
        price: "$25000",
        year: "2006",
        mileage: "50000",
        status: 'Available',
        isFavorite: false
      },
      {
        id:"5",
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/34470/q8-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "A4",
        price: "$23000",
        year: "2001",
        mileage: "48000",
        status: "Blocked",
        isFavorite: true
      },
      {
        id:"6",
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/53591/q5-exterior-right-front-three-quarter-36.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "A4 allroad",
        price: "$49000",
        year: "2019",
        mileage: "10000",
        status: "Sold",
        isFavorite: true
      },
      {
        id:"7",
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/22803/audi-q7-facelift-right-front-three-quarter4.jpeg?q=80&q=80",
        make: "Audi",
        model: "A5",
        price: "$21000",
        year: "2008",
        mileage: "40000",
        status: "Blocked",
        isFavorite: true
      },
      {
        id:"8",
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/51378/s5-sportback-exterior-right-front-three-quarter-5.jpeg?q=80&q=80",
        make: "Audi",
        model: "A5 Sport",
        price: "$41000",
        year: "2017",
        mileage: "32000",
        status: "Sold",
        isFavorite: false
      },
      {
        id:"9",
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/47073/e-tron-gt-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "Q3",
        price: "$50000",
        year: "2020",
        mileage: "13000",
        status: "Sold",
        isFavorite: true
      },
      {
        id:"10",
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/124141/a8-l-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "R8",
        price: "$25000",
        year: "2008",
        mileage: "35000",
        status: "Blocked",
        isFavorite: false
      },
      {
        id:"11",
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/49294/rs-q8-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "TT",
        price: "$48000",
        year: "2019",
        mileage: "16000",
        status: "Sold",
        isFavorite: true
      },
      {
        id:"12",
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/100073/rs5-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "Q7",
        price: "$43000",
        year: "2015",
        mileage: "17000",
        status: "Sold",
        isFavorite: false
      },
      {
        id:"13",
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/152943/q8-e-tron-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "Q8",
        price: "$49000",
        year: "2019",
        mileage: "8000",
        status: "Available",
        isFavorite: true
      },
      {
        id:"14",
        image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/39048/e-tron-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80",
        make: "Audi",
        model: "Cabriolet",
        price: "$20000",
        year: "1996",
        mileage: "60000",
        status: "Available",
        isFavorite: false
      }
];

export const kanbanColumns = {
  [uuidv4()]: {
    title: "Available",
    items: data
    // items: data.map((item)=>(
    //     item.status === "Available" ? item : ''
    // ))
  },
  [uuidv4()]: {
    title: "Blocked",
    items: []
  },
  [uuidv4()]: {
    title: "Sold",
    items: []
  }
};
