const user = {
  name: 'Josué',
  lastName: 'Azevedo',
};

function User() {
  return <span>{`${user.name} ${user.lastName}`}</span>;
}

export default User;
