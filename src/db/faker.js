const {faker } = require("@faker-js/faker")

async function createRandomEngine() {
  return {
    _id: faker.string.uuid(),
    serial_number: faker.string.alphanumeric({ length: 5, casing: "upper" }),
    rating: faker.number.int({ min: 10, max: 500 }),
    Model: faker.string.alphanumeric(10),
    parts: {
      oilFilter: faker.number.int(3),
      fuelFilter: faker.helpers.arrayElement([
        "117",
        "145",
        "163",
        "201",
        "244",
        "492",
      ]),
      airFilter: faker.number.int({ min: 1000, max: 10000 }),
    },
    location: faker.location.city(),
    hourReading: faker.number.int({ min: 0, max: 1000 }),
    contacts: {
      phoneNumber: faker.phone.number(),
      email: faker.internet.email(),
    },
    lastServicedDate: faker.date.past({
      years: 2,
      refDate: "2022-01-01T00:00:00.000Z",
    }),
    nextServiceDate: faker.date.future({
      years: 2,
      refDate: "2022-01-01T00:00:00.000Z",
    }),
  };
}

async function generateRandomEngines(count) {
  const engines = [];

  for (let i = 0; i < count; i++) {
    try {
      console.log("Generating");
      const engine = await createRandomEngine();
      engines.push(engine);
      console.log("Finished generating");
    } catch (error) {
      console.error(error);
    }
  }
  console.log(engines);
  return engines;
}

async function createRandomClient(engines) {
  // console.log(engines);
  return {
    client_name: faker.company.name(),
    engine: faker.helpers.arrayElement(engines),
    contacts: {
      phoneNumber: faker.phone.number(),
      email: faker.internet.email(),
    },
    payment_statement: {
      payment_date: faker.date.past({
        years: 2,
        refDate: "2022-01-01T00:00:00.000Z",
      }),
      amount: faker.number.int({ min: 1000, max: 100000 }),
      description: faker.lorem.sentence(10),
    },
    services: {
      nature_of_visit: faker.helpers.arrayElement(["service" | "emergency"]),
      hours_ran: faker.number.int({ min: 0, max: 1000 }),
      nextServiceDate: faker.date.future({
        years: 2,
        refDate: "2022-01-01T00:00:00.000Z",
      }),
    },
  };
}

async function getSavedEngines(collection) {
  try {
    const existingEngines = await collection.find({}).toArray();
    return existingEngines;
  } catch (error) {
    console.error(error);
  }
}

async function generateRandomClients(count, engines) {
  const clients = [];

  for (let i = 0; i < count; i++) {
    try {
      console.log("Generating");
      const client = await createRandomClient(engines);
      clients.push(client);
      console.log("Finished generating");
    } catch (error) {
      console.error(error);
    }
  }
  console.log(clients);
  return clients;
}

// generateRandomEngines(2)
async function main() {
  try {
    console.log("Client generation");
    await generateRandomClients(2);
  } catch (error) {
    console.error(error);
  }
}

// main();
module.exports = { generateRandomEngines, generateRandomClients };
