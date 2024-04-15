function Album({ album }) {
  const { id } = album;

  return (
    <tr>
      <th className="border px-4 py-2">{album.id}</th>
      <td className="border px-4 py-2">{album.name}</td>
      <td className="border px-4 py-2">{album.year}</td>
      <td className="border px-4 py-2">{album.song}</td>
    </tr>
  );
}

export default Album;
