type fuelFilterType = "117" | "145" | "163" | "201" | "244" | "492";

export type EngineType  = {
  // name: string;
  _id: string;
  serial_number: string;
  rating: number;
  Model: string;
  parts: {
    oilFilter: number;
    fuelFilter: fuelFilterType;
    airFilter: number;
  };
  location: string;
  hourReading: number;
  contacts?: {
    phoneNumber: string;
    email: string;
  };
  lastServicedDate: Date;
  nextServiceDate: Date;
}
