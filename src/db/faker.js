
const { faker } = require("@faker-js/faker");
const { Engine } = require("./engine");

// const EngineType = require("../types/types")

function createRandomEngines(){
  return {
    _id: faker.string.uuid(),
    serial_number: faker.string.alphanumeric({length: 5, casing: "upper"}),
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

async function generateRandomEngines() {
  try {
    let generatedCount = 0;
    while (generatedCount < 5) {
      const engineData = createRandomEngines();
      console.log("Random Engines: ", engineData);
      // try {
      //   const engine = new Engine(engineData)
      //   await engine.save()
      //   console.log("Engines saved successfully");
      // } catch (error) {
      //   console.error(error);
      // }

      generatedCount++;
    }
  } catch (error) {
    console.error(error);
  }
}

// generateRandomEngines()
module.exports = generateRandomEngines;
