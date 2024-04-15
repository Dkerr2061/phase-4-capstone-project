function Album({ album }) {
  const { id, name, year, song } = album;

  return (
    <tr>
      <th className="border px-4 py-2">{id}</th>
      <td className="border px-4 py-2">{name}</td>
      <td className="border px-4 py-2">{year}</td>
      <td className="border px-4 py-2">{song}</td>
    </tr>
  );
}

export default Album;
