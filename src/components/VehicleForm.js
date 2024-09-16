import { useState } from 'react';
import axios from 'axios';

function VehicleForm() {
  const [vehicle, setVehicle] = useState({
    vin: '',
    marca: '',
    modelo: '',
    anio: '',
    color: '',
    chasis: '',
    placa: '',
    ram: '',
    numeroEjes: '',
    numeroAsientos: '',
    tipoCombustible: '',
    potencia: '',
    unidadPotencia: '',
    tipo: 'auto',
  });

  const handleChange = (e) => {
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/vehiculo', vehicle);
      alert('Vehículo registrado correctamente');
    } catch (error) {
      console.error('Error registrando el vehículo', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="vin" placeholder="VIN" onChange={handleChange} />
      <input name="marca" placeholder="Marca" onChange={handleChange} />
      <input name="modelo" placeholder="Modelo" onChange={handleChange} />
      <input name="anio" type="number" placeholder="Año" onChange={handleChange} />
      <input name="color" placeholder="Color" onChange={handleChange} />
      <input name="chasis" placeholder="Chasis" onChange={handleChange} />
      <input name="placa" placeholder="Placa" onChange={handleChange} />
      <input name="ram" placeholder="RAM" onChange={handleChange} />
      <input name="numeroEjes" type="number" placeholder="Numero de Ejes" onChange={handleChange} />
      <input name="numeroAsientos" type="number" placeholder="Numero de Asientos" onChange={handleChange} />
      <input name="tipoCombustible" placeholder="Tipo de Combustible" onChange={handleChange} />
      <input name="potencia" type="number" placeholder="Potencia" onChange={handleChange} />
      <input name="unidadPotencia" placeholder="Unidad de Potencia" onChange={handleChange} />
      
      <select name="tipo" onChange={handleChange}>
        <option value="AUTO">AUTO</option>
        <option value="CAMIONETA">Camioneta</option>
        <option value="CAMION">Camión</option>
      </select>

      <button type="submit">Registrar Vehículo</button>
    </form>
  );
}

export default VehicleForm;
