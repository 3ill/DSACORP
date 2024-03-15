export const validate = ({ value, limit }) => {
  if (value != null && value.length < limit) {
    return true;
  }

  return false;
};
