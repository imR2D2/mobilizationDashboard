const UserDetails = ({ user }) => {
    if (!user) {
      return null;
    }
  
    return (
      <div>
        <h2>{user.nombre} {user.apellidoPaterno}</h2>
        <h2>{user.responsabilidad}</h2>
        <h2>{user.nacimiento.estado}</h2>
        <h2>{user.seccion}</h2>
        {/* Mostrar otros detalles del usuario aquí */}
      </div>
    );
  };
  
  export default UserDetails;
  
  
  
  