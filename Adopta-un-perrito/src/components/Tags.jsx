import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

const Tags=({color, text}) => {
  return (
    <Stack direction="horizontal" gap={2}>
      <Badge style={{ width: "150px", justifyContent: "center" }} bg={color}>{text}</Badge>
    </Stack>
  );
}

export default Tags;