import { useEffect, useState } from 'react';
import axios from 'axios';

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await axios.get('http://localhost:8080/vehiculo');
      setVehicles(response.data);
    };

    fetchVehicles();
  }, []);

  return (
    <div>
      <h2>Lista de Vehículos</h2>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.vin}>
            {vehicle.marca} {vehicle.modelo} - {vehicle.anio} {vehicle.color} {vehicle.chasis}\
            {vehicle.placa} {vehicle.ram} {vehicle.numeroEjes} {vehicle.numeroAsientos}\
            {vehicle.tipoCombustible} {vehicle.potencia} {vehicle.unidadPotencia} {vehicle.tipo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VehicleList;
