export const search = (data, keyword) => {
  const result = data.filter(o =>
    Object.keys(o).some(k =>
      o[k].toString().toLowerCase().includes(keyword.toString().toLowerCase()),
    ),
  );
  return result;
};
