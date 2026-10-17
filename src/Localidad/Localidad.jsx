import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Button, Card , CardHeader, CardContent, CardActions } from "@mui/material";

export default function Localidad({name, id, onEliminar }) {
  const Swal2 = withReactContent(Swal);
  const configuracionVentana = {
    title: '¿Estás seguro?',
    text: "¡No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminarlo!'
  }
  const onEliminarAdvertencia = (id) => {
    Swal2.fire(configuracionVentana)
        .then((result) => {
          if (result.isConfirmed) {
            onEliminar(id);
            Swal2.fire(
              'Eliminada!',
              'La localidad ha sido eliminada.',
              'success'
            )
          }
        });
  }
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardHeader title={`${name}`} />
      <CardContent>
        <p>ID: {id}</p>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="error" onClick={() => onEliminarAdvertencia(id)}>
          Eliminar Localidad
        </Button>
      </CardActions>
    </Card>
  );
}